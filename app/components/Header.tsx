import Image from "next/image";

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
}

export default function Header({ showBack, onBack }: HeaderProps) {
  return (
    <div className="flex items-center justify-center relative mb-4">
      {showBack && (
        <button
          onClick={onBack}
          className="absolute left-0 text-[#021626] flex items-center text-2xl"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#021626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <Image
        src="/Logo.svg"
        alt="25 Logo"
        width={57}
        height={56}
        priority
        className="mx-auto"
      />
    </div>
  );
}
