import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const [imageError, setImageError] = useState(false);
  const logoUrl =
    'https://files.manuscdn.com/user_upload_by_module/session_file/310519663868807351/VagVsowqwrLtWgIy.jpeg';

  const heights = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {!imageError ? (
        <img
          src={logoUrl}
          alt="LiveGood Logo"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className={`${heights[size]} w-auto object-contain rounded-md bg-white p-0.5 shadow-sm`}
        />
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-sm">
            LG
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-xl tracking-tight text-white">
              LIVE<span className="text-emerald-400">GOOD</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
