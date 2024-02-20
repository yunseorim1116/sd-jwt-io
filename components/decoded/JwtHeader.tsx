"use client";

import { DebugHook } from "@/hooks/debug.hooks";

const JwtHeader = () => {
  const { header, setHeader } = DebugHook();
  const handleInputChange = (event: any) => {
    setHeader(event.target.value);
  };

  return (
    <>
      <div className="flex items-center my-2">
        <div className="text-base">Header</div>
        <p className="text-gray-500 text-xs ml-2">ALGORITHM & TOKEN TYPE</p>
      </div>

      <textarea
        value={header}
        onChange={handleInputChange}
        rows={10}
        cols={40}
        className="w-full h-24 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-red-500 font-mono"
      />
    </>
  );
};

export default JwtHeader;
