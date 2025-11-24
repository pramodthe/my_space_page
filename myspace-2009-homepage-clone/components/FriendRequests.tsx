import React from 'react';

const FriendRequests: React.FC = () => (
    <div className="border border-[#FDB813]">
        <header className="bg-gradient-to-b from-[#FDD27D] to-[#FDB813] p-1.5 flex justify-between items-center">
            <h2 className="font-bold text-sm text-black">Friend Requests</h2>
        </header>
        <div className="p-2.5 bg-white">
            <p className="font-bold">0 Open Friend Requests</p>
            <button className="mt-2 bg-gray-200 border border-gray-400 px-2 py-0.5 text-xs font-bold hover:bg-gray-300">View All Requests</button>
        </div>
    </div>
);

export default FriendRequests;