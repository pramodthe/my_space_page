import React from 'react';

export interface User {
    name: string;
    imgSrc: string;
    href?: string;
    verified?: boolean;
}

interface UserPreviewGridProps {
    users: User[];
    gridCols?: string;
    imageClassName?: string;
}

const UserPreviewGrid: React.FC<UserPreviewGridProps> = ({ users, gridCols = 'grid-cols-2 md:grid-cols-4', imageClassName = 'w-24 h-24' }) => {
    return (
        <div className={`grid ${gridCols} gap-4`}>
            {users.map((user) => (
                <div key={user.name} className="text-center">
                    <a href={user.href || '#/wip'} className="font-bold text-sm text-[#0059B3] hover:underline">
                        {user.name} {user.verified && '✅'}
                    </a>
                    <a href={user.href || '#/wip'} className="block mt-1">
                        <img 
                            src={user.imgSrc} 
                            alt={user.name} 
                            className={`${imageClassName} object-cover mx-auto border border-black`}
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default UserPreviewGrid;
