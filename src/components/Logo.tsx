import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-11 w-11",
    lg: "h-16 w-16",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Sleek Custom SVG Monogram */}
      <svg
        className={`${sizeClasses[size]} shrink-0 text-white`}
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="StreamWave Logo"
        id="logo-svg"
      >
        {/* Background container (rounded squircle) */}
        <rect width="100" height="100" rx="24" fill="black" />
        
        {/* The 'S' with film strip top curve */}
        {/* Upper filmstrip arc */}
        <path
          d="M 22,46 C 22,33 42,27 50,28 L 50,34 C 44,33 30,37 30,46 C 30,55 50,56 50,68 C 50,75 42,80 32,79"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 22,46 C 22,33 42,27 50,28 L 47,33 C 41,32 30,37 30,46"
          fill="white"
        />
        
        {/* Film strip squares on top of 'S' */}
        <rect x="25" y="32" width="4" height="2" transform="rotate(-15 25 32)" fill="white" />
        <rect x="31" y="29" width="4" height="2" transform="rotate(-10 31 29)" fill="white" />
        <rect x="37" y="27" width="4" height="2" transform="rotate(-5 37 27)" fill="white" />
        <rect x="43" y="26" width="4" height="2" fill="white" />
        
        {/* Main body of 'S' and waves */}
        <path
          d="M 24,46 C 24,37 49,36 49,46 C 49,56 20,55 20,70 C 20,80 43,80 49,70 C 49,70 38,74 29,71"
          fill="white"
        />
        
        {/* The 'W' on the right */}
        <path
          d="M 46,45 L 53,70 L 64,46 L 70,70 L 85,32 L 80,32 L 67,61 L 61,46 L 55,61 L 51,45 Z"
          fill="white"
        />
        
        {/* Film strip squares on the right leg of W */}
        <rect x="73" y="38" width="3" height="3" transform="rotate(-25 73 38)" fill="black" />
        <rect x="76" y="44" width="3" height="3" transform="rotate(-25 76 44)" fill="black" />
        <rect x="79" y="50" width="3" height="3" transform="rotate(-25 79 50)" fill="black" />
        
        {/* Bottom wave curve accentuating the logo */}
        <path
          d="M 18,72 Q 40,64 64,74 T 85,68"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 18,77 Q 40,69 64,79 T 85,73"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {showText && (
        <span
          className={`${textSizes[size]} font-display font-bold tracking-tight text-white`}
          id="logo-text"
        >
          Stream<span className="font-light text-neutral-400">Wave</span>
        </span>
      )}
    </div>
  );
};
