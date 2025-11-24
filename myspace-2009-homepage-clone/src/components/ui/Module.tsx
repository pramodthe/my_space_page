import React from 'react';

interface ModuleProps {
  title: string;
  variant?: 'blue' | 'orange-cool' | 'orange-warm';
  rightElement?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Module: React.FC<ModuleProps> = ({ title, variant = 'blue', rightElement, children, className = '' }) => {
  let containerClasses = '';
  let headerClasses = '';
  let rightElementClasses = '';

  switch (variant) {
    case 'orange-cool':
        containerClasses = 'border border-[#FDB813]';
        headerClasses = 'bg-gradient-to-b from-[#FFF2D9] to-[#FDE6B2] text-black';
        rightElementClasses = 'text-xs text-[#0059B3] hover:underline';
        break;
    case 'orange-warm':
        containerClasses = 'border border-[#FDB813]';
        headerClasses = 'bg-gradient-to-b from-[#FDD27D] to-[#FDB813] text-black';
        rightElementClasses = 'text-xs font-normal text-black hover:underline';
        break;
    case 'blue':
    default:
        containerClasses = 'border-2 border-[#6699CC]';
        headerClasses = 'bg-[#6699CC] text-white';
        rightElementClasses = 'text-xs font-normal text-white hover:text-gray-200 underline';
        break;
  }

  return (
    <div className={`${containerClasses} ${className}`}>
      <header className={`${headerClasses} p-1.5 flex justify-between items-center`}>
        <h2 className="font-bold text-sm">{title}</h2>
        {rightElement && (
           <div className={rightElementClasses}>
             {rightElement}
           </div>
        )}
      </header>
      <div className="p-2.5 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Module;
