import React from 'react';
import Module from '../../../../components/ui/Module';

const FriendComments: React.FC = () => (
    <Module title="matter's Friends Comments" variant="orange-warm">
        <p className="text-sm">
            Displaying <span className="font-bold">0</span> of <span className="font-bold">0</span> comments ( <a href="#/wip" className="text-[#0059B3] hover:underline">View all</a> | <a href="#/wip" className="text-[#0059B3] hover:underline">Add Comment</a> )
        </p>
    </Module>
);

export default FriendComments;
