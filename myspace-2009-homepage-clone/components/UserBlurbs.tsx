import React from 'react';
import OrangeModule from './OrangeModule';

const BlurbSection: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-3">
        <h3 className="font-bold text-red-600">{title}</h3>
        <a href="#/profile/edit" className="text-[#6699CC] hover:underline">[edit]</a>
    </div>
);

const UserBlurbs: React.FC = () => (
    <OrangeModule title="matter's Blurbs">
        <BlurbSection title="About me:" />
        <BlurbSection title="Who I'd like to meet:" />
    </OrangeModule>
);

export default UserBlurbs;