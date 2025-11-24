import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-[#003399] text-white border-b border-[#6699CC]">
      <div className="max-w-[980px] mx-auto flex flex-wrap justify-center sm:justify-start items-end font-bold text-sm px-2">
        <a href="#" className="bg-white text-[#003399] px-3 py-1 border-t border-x border-[#6699CC] rounded-t-sm -mb-px">Home</a>
        <a href="#/wip" className="hover:underline px-3 py-1">Browse People</a>
        <a href="#/wip" className="hover:underline px-3 py-1">Find People</a>
        <a href="#/wip" className="hover:underline px-3 py-1">Blogs</a>
        <a href="#/wip" className="hover:underline px-3 py-1">Music</a>
        <a href="#/wip" className="hover:underline px-3 py-1">Videos</a>
        <a href="#/wip" className="hover:underline px-3 py-1">Layout</a>
        <a href="#/wip" className="hover:underline px-3 py-1">About Us</a>
      </div>
    </nav>
  );
};

export default Navigation;
