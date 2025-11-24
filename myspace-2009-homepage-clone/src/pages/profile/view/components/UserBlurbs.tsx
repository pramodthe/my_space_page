import React from 'react';
import Module from '../../../../components/ui/Module';

const BlurbSection: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-3">
        <h3 className="font-bold text-red-600">{title}</h3>
        <a href="#/profile/edit" className="text-[#6699CC] hover:underline">[edit]</a>
    </div>
);

const UserBlurbs: React.FC = () => (
    <Module title="matter's Blurbs" variant="orange-warm">
        <BlurbSection title="About me:" />
        <BlurbSection title="Who I'd like to meet:" />
    </Module>
);

export default UserBlurbs;
