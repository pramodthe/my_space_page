import React from 'react';

const BlockUserPage: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto border-2 border-gray-400 bg-gray-50 p-4 space-y-4">
            <h1 className="text-xl font-bold text-red-600">Block User</h1>
            <p>Would you like to block this person? If you block this person, the following will happen:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
                <li>This will remove this person from your friends, if you are currently friends with this person.</li>
                <li>This person won't be able to view your Profile and your Bulletins anymore.</li>
                <li>This person won't be able to send you friend-requests anymore.</li>
                <li>This person won't be able to message you anymore and all existing messages between you two (if there are any) will be deleted.</li>
                <li>This person won't be able to comment on your Profile, your Blog Entries and your Bulletins anymore.</li>
            </ul>
            <p>You can unblock this person at any time by viewing your blocked users.</p>
            <div className="flex items-center gap-4 pt-2">
                <a href="#/profile" className="bg-red-600 text-white font-bold px-4 py-1.5 hover:bg-red-700 no-underline rounded-sm">
                    Block User
                </a>
                <a href="#/profile" className="text-[#0059B3] hover:underline">
                    Cancel
                </a>
            </div>
        </div>
    );
};

export default BlockUserPage;