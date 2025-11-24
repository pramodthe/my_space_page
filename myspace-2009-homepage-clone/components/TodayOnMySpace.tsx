import React, { useState } from 'react';
import Module from './Module';

type Tab = 'Featured' | 'Videos' | 'Music' | 'People';

// Custom list item component for the yellow bullets
const BulletLink: React.FC<{ href: string; children: React.ReactNode; isBold?: boolean }> = ({ href, children, isBold = false }) => (
  <li className="flex items-start gap-1.5">
    <span className="w-1.5 h-1.5 bg-[#F9D423] mt-[5px] flex-shrink-0" aria-hidden="true" style={{boxShadow: '0 0 1px #a28b18'}}></span>
    <a href={href} className={`hover:underline ${isBold ? 'font-bold' : ''}`}>{children}</a>
  </li>
);

const TodayOnMySpace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Featured');

  const tabs: Tab[] = ['Featured', 'Videos', 'Music', 'People'];

  return (
    <Module
      title="Today on MySpace"
      rightElement={
        <div className="text-xs font-normal text-right">
          Sunday, Oct 26, 2008
          <br />
          <a href="#/wip" className="underline hover:text-gray-200">Check your Horoscope</a>
        </div>
      }
    >
      <div className="border-b-2 border-[#6699CC] mb-2.5">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 font-bold text-sm ${
                  activeTab === tab
                    ? 'bg-white border-t border-x border-[#6699CC] text-[#003399] border-b-2 border-b-white -mb-0.5'
                    : 'bg-[#DFE9F7] border border-b-0 border-[#6699CC] text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeTab === 'Featured' && (
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Left Column */}
          <div className="flex-grow flex flex-col justify-between">
            {/* MySpace Exclusive */}
            <div className="flex gap-2.5">
              <img src="https://picsum.photos/seed/milian/125/160" alt="Christina Milian" className="w-[125px] h-[160px] object-cover flex-shrink-0 border border-black p-0.5" />
              <div>
                <h3 className="font-bold text-sm text-[#003399]">MySpace Exclusive: Christina Milian Brings it On!</h3>
                <p className="mt-1">From the set of the all-new Bring It On, Christina chats about picking up the pom-poms in the famous franchise and her upcoming album with MySpace Records!</p>
                <ul className="text-[#0059B3] mt-2 text-xs space-y-1">
                  <BulletLink href="#/wip" isBold={true}>Support for Jennifer Hudson</BulletLink>
                  <BulletLink href="#/wip">Celebrity Photos</BulletLink>
                  <BulletLink href="#/wip">Craig Robinson does "Porno"</BulletLink>
                  <BulletLink href="#/wip">Brooke Hogan asks fans to pray</BulletLink>
                  <BulletLink href="#/wip">Kirsten Dunst impact</BulletLink>
                </ul>
              </div>
            </div>

            {/* Saw V */}
            <div className="flex justify-between items-end mt-4">
              <div>
                <h3 className="font-bold text-sm text-[#003399]">Saw V Exclusive Clip</h3>
                <p className="mt-1">Check out this exclusive clip "The Pit" from Saw V.</p>
                <a href="#/wip" className="font-bold text-[#0059B3] hover:underline mt-2 inline-block">Watch Now!</a>
              </div>
              <img src="https://picsum.photos/seed/saw-v/120/100" alt="Saw V" className="w-[120px] h-[100px] object-cover flex-shrink-0 border border-black p-0.5" />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[260px] flex-shrink-0">
            <img src="https://picsum.photos/seed/snow-patrol/260/210" alt="MySpace Music Exclusive Album Premiere" className="w-full h-auto border border-black p-0.5" />
            <div className="mt-2">
                <h3 className="font-bold text-sm text-[#003399]">Snow Patrol</h3>
                <p className="text-xs text-gray-600">Photo: MySpace Music</p>
                <ul className="text-[#0059B3] mt-2 text-xs space-y-1">
                    <BulletLink href="#/wip">88 Keys Album Premiere</BulletLink>
                    <BulletLink href="#/wip">The Cure Album Premiere</BulletLink>
                    <BulletLink href="#/wip">BET 2008 Hip Hop Awards</BulletLink>
                </ul>
            </div>
          </div>

        </div>
      )}
      
      {/* Placeholder for other tabs */}
      {activeTab !== 'Featured' && (
        <div className="text-center p-8 text-gray-500">
            Content for {activeTab} goes here.
        </div>
      )}
    </Module>
  );
};

export default TodayOnMySpace;