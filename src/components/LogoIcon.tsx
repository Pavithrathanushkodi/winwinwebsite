import React from 'react';
// @ts-ignore
import logoImg from '../assets/images/logo.jpg';

interface LogoIconProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  darkMode?: boolean;
}

export default function LogoIcon({ className = '', size = 80, showText = false, darkMode = true }: LogoIconProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Imported Logo Image */}
      <img 
        src={logoImg} 
        alt="Win Win Wireless Logo"
        style={{ width: size, height: size }}
        className="object-contain shrink-0"
        referrerPolicy="no-referrer"
      />

      {/* Option to show company text beside logo */}

    </div>
  );
}
