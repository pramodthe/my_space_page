import React from 'react';

const friends = [
    { name: "SpaceHey", imgSrc: "https://placehold.co/100x112/003399/FFFFFF?text=hey", verified: true },
    { name: "An", imgSrc: "https://placehold.co/100x112/EFEFEF/333333?text=An", verified: true },
];

const FriendsPage: React.FC = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">matter's Friends</h1>
            <a href="#/view-profile" className="text-[#0059B3] hover:underline text-sm">
                « Back to matter's Profile
            </a>

            <form onSubmit={e => e.preventDefault()} className="border-t border-b border-gray-300 py-2">
                <label htmlFor="search" className="font-bold mr-2">Search</label>
                <input type="text" id="search" className="border border-black p-1" />
            </form>

            <div>
                <h2 className="text-lg font-bold">Friends</h2>
                <div className="mt-2 space-y-4">
                    {friends.map(friend => (
                        <div key={friend.name} className="flex items-center gap-4 p-2 border border-gray-200 bg-gray-50">
                            <img src={friend.imgSrc} alt={`${friend.name}'s profile picture`} className="w-24 h-28 object-cover" />
                            <a href="#/wip" className="text-lg font-bold text-[#0059B3] hover:underline">
                                {friend.name} {friend.verified && '✅'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
