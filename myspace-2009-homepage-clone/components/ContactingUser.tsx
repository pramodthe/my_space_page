import React from 'react';
import Module from './Module';

const ContactingUser: React.FC = () => {
    const actions = [
        { icon: '➕', text: 'Add to Friends' },
        { icon: '⭐', text: 'Add to Favorites' },
        { icon: '💬', text: 'Send Message' },
        { icon: '➡️', text: 'Forward to Friend' },
        { icon: '✉️', text: 'Instant Message' },
        { icon: '🚫', text: 'Block User' },
        { icon: '👥', text: 'Add to Group' },
        { icon: '🚩', text: 'Report User' },
    ];

    return (
        <Module title="Contacting matter">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                {actions.map(action => (
                    <a key={action.text} href="#/wip" className="flex items-center gap-1.5 hover:underline text-[#0059B3]">
                        <span className="text-lg w-5 text-center">{action.icon}</span>
                        <span>{action.text}</span>
                    </a>
                ))}
            </div>
        </Module>
    );
};

export default ContactingUser;