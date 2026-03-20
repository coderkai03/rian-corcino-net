import axios from 'axios';
import { load } from 'cheerio';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const DEVPOST_URL = 'https://devpost.com/riancorci';

async function scrapeDevpostProjects() {
  try {
    const { data } = await axios.get(DEVPOST_URL);
    const $ = load(data);

    // Collect all gallery-item elements
    const galleryItems = $('.gallery-item').toArray();

    // Map over each gallery-item, scraping its details in series to preserve order
    const projects = [];
    for (const element of galleryItems) {
      const title = $(element).find('h5').text().trim();
      const description = $(element).find('.tagline').text().trim();
      const image = $(element).find('.software_thumbnail_image').attr('src') || '/placeholder.svg?height=300&width=500';
      const devpost = $(element).find('.link-to-software').attr('href') || '#';
      const isWinner = $(element).find('aside').length > 0;

      let hackathon = '';
      try {
        const { data: devpostDataHtml } = await axios.get(devpost);
        const devpostData = load(devpostDataHtml);
        hackathon = devpostData('.software-list-content p a').first().text().trim();
      } catch (err) {
        console.error(`Error fetching details for project ${title}:`, err);
        hackathon = '';
      }

      projects.push({
        title,
        description,
        image,
        devpost,
        isWinner,
        hackathon,
      });

      console.log(projects[projects.length - 1]);

      // Respectful delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(JSON.stringify(projects, null, 2));
    // Write projects array to JSON file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const outputPath = join(__dirname, '..', 'data', 'projects.json');
    
    // Ensure directory exists
    const dir = dirname(outputPath);
    if (!existsSync(dir)){
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outputPath, JSON.stringify(projects, null, 2));
    console.log('Projects data written to:', outputPath);
  } catch (error) {
    console.error('Error fetching Devpost page:', error);
  }
}

scrapeDevpostProjects();