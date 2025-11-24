import React from 'react';
import Module from '../../../../components/ui/Module';
import UserPreviewGrid, { User } from '../../components/UserPreviewGrid';

const FriendSpace: React.FC = () => {
    const friends: User[] = [
        { name: "SpaceHey", imgSrc: "https://placehold.co/100x112/003399/FFFFFF?text=hey", verified: true },
        { name: "An", imgSrc: "https://placehold.co/100x112/EFEFEF/333333?text=An", verified: true },
    ];
    
    return (
        <Module
            title="matter's Friend Space"
            variant="orange-warm"
            rightElement={<a href="#/profile/friends">[view all]</a>}
        >
            <p className="mb-2 text-sm"><strong className="text-red-600">matter</strong> has <strong className="text-red-600">2</strong> friends.</p>
            <UserPreviewGrid users={friends} imageClassName="w-24 h-28" />
        </Module>
    );
};

export default FriendSpace;