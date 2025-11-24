import React from 'react';
import PublicProfileInfo from './components/PublicProfileInfo';
import ContactingUser from './components/ContactingUser';
import ProfileUrl from './components/ProfileUrl';
import UserInterests from './components/UserInterests';
import UserLinks from './components/UserLinks';
import UserBlurbs from './components/UserBlurbs';
import FriendSpace from './components/FriendSpace';
import FriendComments from './components/FriendComments';

const ViewProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left Column */}
            <aside className="w-full lg:w-[320px] flex-shrink-0 space-y-2.5">
                <PublicProfileInfo />
                <ContactingUser />
                <ProfileUrl />
                <UserInterests />
                <UserLinks />
            </aside>
            {/* Right Column */}
            <section className="flex-grow w-full space-y-2.5">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <h2 className="text-2xl font-bold">
                        matter
                        <span className="text-sm font-normal text-[#6699CC] ml-2">
                            <a href="#/profile/edit" className="hover:underline">[edit name]</a> <a href="#/wip" className="hover:underline">[edit photo]</a>
                        </span>
                    </h2>
                </div>

                <a href="#/profile/edit" className="block w-full text-center border-2 border-black bg-gray-100 p-2 font-bold text-lg text-[#003399] hover:bg-gray-200 no-underline">
                    Edit Your Profile
                </a>
                
                <h3 className="font-bold text-base">
                    matter's Latest Blog Entries <a href="#/wip" className="text-sm text-[#6699CC] hover:underline">[View Blog]</a>
                </h3>
                <p>There are no Blog Entries yet.</p>

                <UserBlurbs />
                <FriendSpace />
                <FriendComments />
            </section>
        </div>
    );
};

export default ViewProfilePage;
