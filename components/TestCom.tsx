"use client";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

const TestCom = () => {
  const [value, setValue] = useState("sdfsd");

  const handleChange = (editor: any, data: any, value: string) => {
    setValue(value);
  };

  return (
    <>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          mode: "javascript",
          theme: "dracula",
          lineNumbers: true,
          autofocus: true,
        }}
      />
    </>
  );
};

export default TestCom;
