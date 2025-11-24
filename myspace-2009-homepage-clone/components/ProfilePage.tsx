import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyMail from './MyMail';
import Announcements from './Announcements';
import LatestBlogs from './LatestBlogs';
import ProfileStats from './ProfileStats';
import CoolNewPeople from './CoolNewPeople';
import FriendsBulletins from './FriendsBulletins';
import BlogSubscriptions from './BlogSubscriptions';
import FriendRequests from './FriendRequests';


const ProfilePage: React.FC = () => {
    return (
        <div className="space-y-2.5">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Left Column */}
                <aside className="lg:w-[320px] flex-shrink-0 space-y-2.5">
                    <ProfileInfo />
                    <MyMail />
                    <a href="#/view-profile" className="block w-full text-center bg-gray-100 border-2 border-[#6699CC] p-1.5 text-sm font-bold hover:bg-gray-200 text-black no-underline">
                        View Your Profile
                    </a>
                    <Announcements />
                </aside>
                {/* Right Column */}
                <section className="flex-grow space-y-2.5">
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <div className="flex-grow w-full sm:w-auto">
                            <LatestBlogs />
                        </div>
                        <div className="flex-shrink-0">
                            <ProfileStats />
                        </div>
                    </div>
                    <CoolNewPeople />
                    <FriendsBulletins />
                    <BlogSubscriptions />
                    <FriendRequests />
                </section>
            </div>
        </div>
    );
};

export default ProfilePage;