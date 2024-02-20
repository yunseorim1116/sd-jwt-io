"use client";

import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Encoded } from "@/components/Encoded";
import SelectAlg from "@/components/SelectAlg";
import JwtHeader from "@/components/decoded/JwtHeader";
import VerifySignature from "@/components/decoded/VerifySignature";
import Claims from "@/components/decoded/Claims";
import { DebugHook } from "@/hooks/debug.hooks";
import JwtCommonHeader from "@/components/common/JwtCommonHeader";
import { Warning } from "@/components/Warning";

export default function Home() {
  const {
    token,
    setToken,
    secret,
    setSecret,
    base64Checked,
    setBase64Checked,
    discloseFrame,
    setDiscloseFrame,
    claims,
    setClaims,
    discolsures,
    setDiscolsures,
    header,
    setHeader,
    encode,
    decode,
    verify,
  } = DebugHook();

  const [tab, setTab] = useState<"claim" | "discloseFrame" | "discolsures">(
    "claim"
  );

  const tabValue = {
    claim: claims,
    discloseFrame: discloseFrame,
    discolsures: discolsures,
  };

  const tabHandler = {
    claim: setClaims,
    discloseFrame: setDiscloseFrame,
    discolsures: setDiscolsures,
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <main className="min-h-screen items-center p-24">
      <div className="flex justify-center items-center text-4xl m-6 mt-12">
        Debugger
      </div>
      <Warning />
      <SelectAlg onSelect={handleSelectChange} />
      <div className="flex justify-evenly">
        <Encoded />

        {/* decoded */}
        <div>
          <JwtCommonHeader
            title="Decoded"
            subtitle="EDIT THE PAYLOAD AND SECRET"
            titleSize="3xl"
            subtitleSize="xs"
          />
          <JwtHeader />
          <br />
          <Claims payload={tabValue[tab]} setPayload={tabHandler[tab]} />
          <br />
          <VerifySignature
            checked={base64Checked}
            setChecked={setBase64Checked}
          />
        </div>
      </div>
    </main>
  );
}
