import React from 'react';
import MainBanner from './components/MainBanner';
import TodayOnMySpace from './components/TodayOnMySpace';
import LoginPanel from './components/LoginPanel';
import NewToMySpace from './components/NewToMySpace';

const HomePage: React.FC = () => {
    return (
        <>
            <MainBanner />
            <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5">
                <div className="flex-grow lg:w-2/3 flex flex-col gap-2.5">
                    <TodayOnMySpace />
                    <NewToMySpace />
                </div>
                <div className="flex-shrink-0 lg:w-1/3">
                    <LoginPanel />
                </div>
            </div>
        </>
    );
};

export default HomePage;
