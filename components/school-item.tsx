interface SchoolItemProps {
  logo: string;
  logoAlt: string;
  schoolName: string;
  degree: string;
  years: string;
}

export default function SchoolItem({ logo, logoAlt, schoolName, degree, years }: SchoolItemProps) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 shadow-md hover:shadow-lg hover:border-yellow-400/40 transition-all">
      <div className="flex items-center gap-4">
        <img src={logo} alt={logoAlt} className="w-16 h-16 object-contain" />
        <div>
          <h4 className="text-lg font-semibold text-white">{schoolName}</h4>
          <p className="text-base text-gray-300 mt-1">{degree}</p>
          <p className="text-sm text-gray-400 mt-0.5">{years}</p>
        </div>
      </div>
    </div>
  );
} 