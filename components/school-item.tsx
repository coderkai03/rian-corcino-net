interface SchoolItemProps {
  logo: string;
  logoAlt: string;
  schoolName: string;
  degree: string;
  years: string;
}

export default function SchoolItem({ logo, logoAlt, schoolName, degree, years }: SchoolItemProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <img src={logo} alt={logoAlt} className="w-16 h-16 object-contain" />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{schoolName}</h4>
          <p className="text-base text-gray-600 mt-1">{degree}</p>
          <p className="text-sm text-gray-500 mt-0.5">{years}</p>
        </div>
      </div>
    </div>
  );
} 