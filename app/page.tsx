"use client";

import React, { ChangeEvent } from "react";
import { useState } from "react";
import Encoded from "@/components/Encoded";
import SelectAlg from "@/components/SelectAlg";
import JwtHeader from "@/components/decoded/JwtHeader";
import VerifySignature from "@/components/decoded/VerifySignature";
import Claims from "@/components/decoded/Claims";
import { DebugHook } from "@/hooks/debug.hooks";
import JwtCommonHeader from "@/components/common/JwtCommonHeader";
import { SdJwtContainer } from "@/components/SdJwtContainer";
import Button from "@/components/common/Button";

export type TabType = "claim" | "discloseFrame" | "discolsures";

export default function Home() {
  const {
    base64Checked,
    setBase64Checked,
    discloseFrame,
    setDiscloseFrame,
    claims,
    setClaims,
    discolsures,
    setDiscolsures,
    encode,
    decode,
    verify,
    token,
    setToken,
  } = DebugHook();

  console.log(token);

  const [tab, setTab] = useState<TabType>("claim");

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
    <SdJwtContainer>
      <SelectAlg onSelect={handleSelectChange} />

      <div className="flex justify-evenly">
        <Encoded token={token} setToken={setToken} />
        <div className="decoded">
          <JwtCommonHeader
            title="Decoded"
            subtitle="EDIT THE PAYLOAD AND SECRET"
            titleSize="3xl"
            subtitleSize="xs"
          />
          <JwtHeader />
          <Claims
            tab={tab}
            setTab={setTab}
            payload={tabValue[tab]}
            setPayload={tabHandler[tab]}
          />
          <VerifySignature
            checked={base64Checked}
            setChecked={setBase64Checked}
          />
        </div>
      </div>

      <Button
        onClick={async () => {
          await encode();
        }}
      >
        Encode SD JWT
      </Button>
      <Button
        onClick={async () => {
          await decode();
        }}
      >
        Decode SD JWT
      </Button>
    </SdJwtContainer>
  );
}
