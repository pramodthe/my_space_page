import React from 'react';
import Module from '../../../components/ui/Module';

const MyMail: React.FC = () => (
  <Module title="My Mail">
    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
      <a href="#/wip" className="flex items-center gap-1.5 hover:underline text-[#0059B3]">
        <span className="text-lg">✉️</span> instant messages
      </a>
      <a href="#/wip" className="flex items-center gap-1.5 hover:underline text-[#0059B3]">
        <span className="text-lg">📤</span> send message
      </a>
      <a href="#/wip" className="flex items-center gap-1.5 hover:underline text-[#0059B3]">
        <span className="text-lg">📝</span> bulletins
      </a>
      <a href="#/wip" className="flex items-center gap-1.5 hover:underline text-[#0059B3]">
        <span className="text-lg">✍️</span> post bulletin
      </a>
    </div>
  </Module>
);

export default MyMail;
