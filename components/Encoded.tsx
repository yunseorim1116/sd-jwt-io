import JwtCommonHeader from "./common/JwtCommonHeader";
import { updateURLWithQuery } from "@/utils/stringToUint8Array";
import { DebugHook } from "@/hooks/debug.hooks";
import { ChangeEvent } from "react";

interface EncodedProps {
  token: string;
  setToken: (t: string) => void;
}

const Encoded = ({ token, setToken }: EncodedProps) => {
  const handleTokenChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    updateURLWithQuery(`token=${newValue}`);
    setToken(newValue);
    console.log(newValue);
  };

  return (
    <>
      <div className="mr-8">
        <JwtCommonHeader
          title="Encoded"
          subtitle="EDIT THE PAYLOAD AND SECRET"
          titleSize="3xl"
          subtitleSize="xs"
        />
        <textarea
          value={token}
          onChange={handleTokenChange}
          className="w-full min-h-[200px] p-2 border border-gray-300 rounded-md font-mono"
        />
      </div>
    </>
  );
};

export default Encoded;
