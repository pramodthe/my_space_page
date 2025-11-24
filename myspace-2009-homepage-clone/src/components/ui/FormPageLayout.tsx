import React from 'react';

interface FormPageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const FormPageLayout: React.FC<FormPageLayoutProps> = ({ title, subtitle, children }) => {
    return (
        <div className="max-w-[800px] mx-auto bg-white border-2 border-[#003399] p-2.5">
            <h1 className="text-lg font-bold text-white bg-[#6699CC] border border-[#003399] p-2 -m-2.5 mb-0">
                {title}
            </h1>
            {subtitle && (
                <div className="text-xs text-gray-700 bg-gray-100 p-1.5 border-b border-gray-300 mb-4">
                    {subtitle}
                </div>
            )}
            <div className={subtitle ? 'pt-2' : 'pt-6'}>
                {children}
            </div>
        </div>
    );
};

export default FormPageLayout;
