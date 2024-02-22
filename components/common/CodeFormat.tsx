//codeFormat.jsx
import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

const CodeFormat = ({ data, setData }: any) => {
  return (
    <ControlledEditor
      onBeforeChange={(editor, data, value) => {
        setData(value);
      }}
      value={data}
      options={{
        mode: "javascript",
        lineWrapping: true,
      }}
    />
  );
};

export default CodeFormat;
