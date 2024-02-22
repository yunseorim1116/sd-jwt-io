import { updateURLWithQuery } from "@/utils/stringToUint8Array";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "../Debugger.css";
interface EncodedProps {
  token: string;
  setToken: (t: string) => void;
}

const Encoded = ({ token, setToken }: EncodedProps) => {
  return (
    <div className="code-item">
      <div className="code-title-wrapper">
        <div className="code-title">{"Encoded"}</div>
        <div className="code-desc">{"paste your token here".toUpperCase()}</div>
      </div>
      <div className="area-wrapper">
        <ControlledEditor
          value={token}
          options={{
            mode: "jwt",
            lineWrapping: true,
          }}
          onBeforeChange={(editor, data, value) => {
            updateURLWithQuery(`token=${value}`);
            setToken(value);
          }}
        />
      </div>
    </div>
  );
};

export default Encoded;
