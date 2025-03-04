const axios = require('axios');
const cheerio = require('cheerio');

const DEVPOST_URL = 'https://devpost.com/riancorci';

async function scrapeDevpostProjects() {
  try {
    const { data } = await axios.get(DEVPOST_URL);
    const $ = cheerio.load(data);
    console.log($);

    const projects = [];

    $('.gallery-item').each((index, element) => {
      const title = $(element).find('h5').text().trim();
      const description = $(element).find('.tagline').text().trim();
      const image = $(element).find('.software_thumbnail_image').attr('src') || '/placeholder.svg?height=300&width=500';
      const devpost = $(element).find('.link-to-software').attr('href') || '#';
      const isWinner = $(element).find('aside').length > 0;

      projects.push({
        title,
        description,
        image,
        devpost,
        isWinner,
      });
    });

    console.log(JSON.stringify(projects, null, 2));
    // Write projects array to JSON file
    const fs = require('fs');
    const path = require('path');

    const outputPath = path.join(__dirname, '..', 'data', 'projects.json');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
    console.log('Projects data written to:', outputPath);
  } catch (error) {
    console.error('Error fetching Devpost page:', error);
  }
}

scrapeDevpostProjects();
