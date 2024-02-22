"use client";
import { Dispatch, SetStateAction } from "react";
import { DebugHook } from "@/hooks/debug.hooks";

interface VerifySignatureProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

const VerifySignature = ({ checked, setChecked }: VerifySignatureProps) => {
  const { secret, setSecret } = DebugHook();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`checked = ${e.target.checked}`);
    setChecked(e.target.checked);
  };

  return (
    <>
      <div className="decode-item">
        <div className="decode-header decode-border-top">
          {"VERIFY SIGNATURE"}
        </div>
        <div className='className="w-full min-h-[200px] p-2 border border-gray-300 rounded-md font-mono"'>
          <pre className="flex flex-col gap-0.2rem text-blue-400">
            <div>{"HMACSHA256("}</div>
            <div>{`base64UrlEncode(header) + "." +`}</div>
            <div>{"base64UrlEncode(payload),"}</div>
            <div>
              <input
                type="text"
                onChange={(e) => setSecret(e.target.value)}
                value={secret}
                className="w-200 text-blue-400"
              />
            </div>
            <div>
              <input
                type="checkbox"
                checked={checked}
                value={secret}
                onChange={onChange}
                className="text-blue-400"
              />
              <label className="text-blue-400 ml-2">
                {"secret base64 encoded"}
              </label>
            </div>
          </pre>
        </div>
      </div>
    </>
  );
};

export default VerifySignature;
