"use client";

import React, { ChangeEvent } from "react";
import { useState } from "react";
import Encoded from "@/components/encoded/Encoded";
import SelectAlg from "@/components/SelectAlg";
import JwtHeader from "@/components/decoded/JwtHeader";
import VerifySignature from "@/components/decoded/VerifySignature";
import Claims from "@/components/decoded/Claims";
import { DebugHook } from "@/hooks/debug.hooks";
import JwtCommonHeader from "@/components/common/JwtCommonHeader";
import { SdJwtContainer } from "@/components/SdJwtContainer";
import Button from "@/components/common/Button";
import CodeMirror from "codemirror";

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
        {/* <Encoded token={token} setToken={setToken} /> */}
        <div className="decoded">
          <JwtCommonHeader
            title="Decoded"
            subtitle="EDIT THE PAYLOAD AND SECRET"
            titleSize="3xl"
            subtitleSize="xs"
          />
          <JwtHeader />
          {/* <Claims
            tab={tab}
            setTab={setTab}
            payload={tabValue[tab]}
            setPayload={tabHandler[tab]}
          />
          <VerifySignature
            checked={base64Checked}
            setChecked={setBase64Checked}
          /> */}
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

CodeMirror.defineMode("jwt", function () {
  return {
    token: function (stream, state) {
      if (stream.sol()) {
        state.partParsed = "header"; // Start of line, assume header
      }

      if (stream.eat(".") || stream.eat("~")) {
        // Consume and style the dot
        if (state.partParsed === "header") {
          state.partParsed = "payload";
        } else if (state.partParsed === "payload") {
          state.partParsed = "signature";
        } else if (state.partParsed === "signature") {
          state.partParsed = "after-signature"; // After the signature, no styling
        }
        return "jwt-dot";
      }

      stream.next(); // Consume the next character
      if (state.partParsed === "after-signature") {
        return "sdjwt-disclosure"; // No styling after the signature
      }
      return "jwt-" + state.partParsed; // Style based on the current part
    },
    startState: function () {
      return { partParsed: null };
    },
  };
});
