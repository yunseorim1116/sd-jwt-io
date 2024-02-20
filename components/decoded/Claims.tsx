"use client";

import JwtCommonHeader from "../common/JwtCommonHeader";

const Claims = ({
  payload,
  setPayload,
}: {
  payload: string;
  setPayload: any;
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPayload(event.target.value);
  };

  return (
    <>
      <div className="flex items-center my-2">
        <div className="text-base mr-2">PayLoad</div>
        <div className="text-base mr-2">DiscloseFrames</div>
        <div className="text-base">Discolsures</div>
      </div>
      <textarea
        value={payload}
        onChange={handleInputChange}
        rows={10}
        cols={40}
        className="w-full min-h-[200px] p-2 border border-gray-300 rounded-md font-mono"
      />
    </>
  );
};

export default Claims;
