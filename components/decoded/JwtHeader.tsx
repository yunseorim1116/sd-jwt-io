"use client";

import { DebugHook } from "@/hooks/debug.hooks";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "../Debugger.css";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

const JwtHeader = () => {
  const { header, setHeader } = DebugHook();
  const [CodeMirror, setCodeMirror] = useState<typeof ControlledEditor | null>(
    null
  );
  useEffect(() => {
    const importCodeMirror = async () => {
      // 동적 임포트
      const { Controlled } = await import("react-codemirror2");

      // 코드미러 모듈을 상태에 설정
      setCodeMirror(Controlled);
    };

    // 코드미러 모듈 가져오기
    importCodeMirror();
  }, []);

  if (!CodeMirror) {
    return <div>Loading CodeMirror...</div>;
  }

  return (
    <CodeMirror
      value={header}
      options={{
        mode: "javascript",
        lineWrapping: true,
      }}
      onBeforeChange={(editor, data, value) => {
        setHeader(value);
      }}
      className="json-header"
    />
  );
};

export default JwtHeader;
