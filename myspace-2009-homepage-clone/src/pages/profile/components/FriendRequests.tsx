import React from 'react';
import Module from '../../../components/ui/Module';

const FriendRequests: React.FC = () => (
    <Module title="Friend Requests" variant="orange-warm">
        <p className="font-bold">0 Open Friend Requests</p>
        <button className="mt-2 bg-gray-200 border border-gray-400 px-2 py-0.5 text-xs font-bold hover:bg-gray-300">View All Requests</button>
    </Module>
);

export default FriendRequests;
