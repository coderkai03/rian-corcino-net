interface SchoolItemProps {
  logo: string;
  logoAlt: string;
  schoolName: string;
  degree: string;
  years: string;
}

export default function SchoolItem({ logo, logoAlt, schoolName, degree, years }: SchoolItemProps) {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <img src={logo} alt={logoAlt} className="w-16 h-16 object-contain" />
        <div>
          <h4 className="text-lg font-semibold text-gray-100">{schoolName}</h4>
          <p className="text-base text-gray-300 mt-1">{degree}</p>
          <p className="text-sm text-gray-400 mt-0.5">{years}</p>
        </div>
      </div>
    </div>
  );
} 