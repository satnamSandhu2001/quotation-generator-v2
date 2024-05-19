import React from 'react';

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 z-[60] h-screen w-full flex justify-center items-center bg-black/60 backdrop-blur-sm">
      <span className="h-20 aspect-square border-t-2 border-white rounded-full animate-[spin_0.8s_infinite_linear]"></span>
    </div>
  );
}
