"use client";
import React from "react";
import { DebugHook } from "@/hooks/debug.hooks";

const VerifySignature = ({ checked, setBase64Checked }: any) => {
  const { secret, setSecret } = DebugHook();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`checked = ${e.target.checked}`);
    setBase64Checked(e.target.checked);
  };

  return (
    <>
      <div className="my-2">VERIFY SIGNATURE</div>
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
            onChange={onChange}
            className="text-blue-400"
          />
          <label className="text-blue-400 ml-2">
            {"secret base64 encoded"}
          </label>
        </div>
      </pre>
    </>
  );
};

export default VerifySignature;
