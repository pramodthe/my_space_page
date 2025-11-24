import React from 'react';
import Module from '../../../components/ui/Module';
import UserPreviewGrid, { User } from './UserPreviewGrid';

const CoolNewPeople: React.FC = () => {
    const people: User[] = [
        { name: "NICOLE !", imgSrc: "https://placehold.co/100x100/639/fff/png?text=NICOLE" },
        { name: "Benito", imgSrc: "https://placehold.co/100x100/333/fff/png?text=Benito" },
        { name: "pawzzcarnival", imgSrc: "https://placehold.co/100x100/f8b/fff/png?text=pawzz" },
        { name: "Willow lull", imgSrc: "https://placehold.co/100x100/555/fff/png?text=Willow" },
    ];

    return (
        <Module 
            title="Cool New People"
            variant="orange-cool"
            rightElement={<a href="#/wip">[view more]</a>}
        >
            <UserPreviewGrid users={people} />
        </Module>
    );
};

export default CoolNewPeople;
