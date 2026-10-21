import React from 'react';

export const MorphoLogo: React.FC<{ className?: string; color?: string }> = ({ 
  className = "h-8", 
  color = "#101828" 
}) => {
  return (
    <span 
      className={`font-black tracking-tight select-none lowercase ${className}`}
      style={{ 
        color, 
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        letterSpacing: "-0.05em",
        fontSize: "2rem",
        lineHeight: 1
      }}
    >
      morpho
    </span>
  );
};

export const TiendanubeLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 40 32" fill="none" className="h-6 w-auto" aria-hidden="true">
      <path 
        d="M28.5 28H9.5C5.35786 28 2 24.6421 2 20.5C2 16.5946 4.98188 13.3855 8.81423 13.0366C9.69971 7.39958 14.5901 3 20.5 3C26.0461 3 30.7061 6.86877 31.9048 12.0628C35.3406 12.5804 38 15.5348 38 19.1C38 23.0212 34.8212 26.2 30.9 26.2" 
        stroke="#0080FF" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    <div className="flex flex-col text-left">
      <span className="font-bold text-slate-900 text-sm tracking-tight leading-none">TiendaNube</span>
      <span className="text-[10px] text-slate-500 font-medium tracking-normal mt-0.5">Partners</span>
    </div>
  </div>
);

export const MetaPartnerLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 48 32" fill="none" className="h-6 w-auto" aria-hidden="true">
      <path 
        d="M34.8 6.5C32.4 6.5 30.2 7.7 28.8 9.8C26.9 7 24.2 6.5 22.4 6.5C17.2 6.5 13 10.7 13 16C13 21.3 17.2 25.5 22.4 25.5C24.4 25.5 27 24.9 28.8 22.2C30.2 24.3 32.4 25.5 34.8 25.5C40 25.5 44.2 21.3 44.2 16C44.2 10.7 40 6.5 34.8 6.5ZM22.4 22.2C18.9 22.2 16.2 19.4 16.2 16C16.2 12.6 18.9 9.8 22.4 9.8C25.3 9.8 27.5 11.9 28.2 14.8C27.9 15.6 27.5 16.4 26.9 17.2C25.8 18.6 24.1 22.2 22.4 22.2ZM34.8 22.2C33.1 22.2 31.4 18.6 30.3 17.2C29.7 16.4 29.3 15.6 29 14.8C29.7 11.9 31.9 9.8 34.8 9.8C38.3 9.8 41 12.6 41 16C41 19.4 38.3 22.2 34.8 22.2Z" 
        fill="#0064E0"
      />
    </svg>
    <div className="flex flex-col text-left">
      <span className="font-bold text-slate-900 text-sm tracking-tight leading-none">Meta</span>
      <span className="text-[10px] text-slate-500 font-medium tracking-normal mt-0.5">Business Partner</span>
    </div>
  </div>
);

export const MercadoLibreLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="w-8 h-8 rounded-full bg-[#FFE600] flex items-center justify-center p-1 shrink-0">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path 
          d="M7 11L10 14L17 7M10 11L13 14" 
          stroke="#2D3277" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M5 8C3.5 9.5 3.5 12 5 13.5L9 17.5C10.5 19 13 19 14.5 17.5L19 13" 
          stroke="#2D3277" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-slate-900 text-sm tracking-tight leading-none">mercado libre</span>
      <span className="text-[10px] text-slate-500 font-medium tracking-normal mt-0.5">Partners</span>
    </div>
  </div>
);

export const GooglePartnerLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="flex items-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-bold text-slate-900 text-sm tracking-tight leading-none">Google</span>
      <span className="text-[10px] text-slate-500 font-medium tracking-normal mt-0.5">Premier Partner</span>
    </div>
  </div>
);
