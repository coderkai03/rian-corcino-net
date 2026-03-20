import Image from "next/image";

interface SchoolItemProps {
  logo: string;
  logoAlt: string;
  schoolName: string;
  degree: string;
  years: string;
}

export default function SchoolItem({ logo, logoAlt, schoolName, degree, years }: SchoolItemProps) {
  return (
    <div className="bg-[#0a0a14] border border-[#ffd000]/20 hover:border-[#ffd000]/50 p-5 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
          <Image
            src={logo}
            alt={logoAlt}
            width={48}
            height={48}
            className="object-contain opacity-90"
            style={{ width: 48, height: 48 }}
          />
        </div>
        <div>
          <h4 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-oswald)' }}>{schoolName}</h4>
          <p className="text-sm text-[#c0c0d5] mt-0.5">{degree}</p>
          <p className="text-xs text-[#ffd000]/70 mt-1 tracking-wider uppercase" style={{ fontFamily: 'var(--font-oswald)' }}>{years}</p>
        </div>
      </div>
    </div>
  );
} 