import { SetStateAction } from "react";
import { TabType } from "@/app/page";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "../Debugger.css";

interface ClaimsProps {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<TabType>>;
  payload: string;
  setPayload: React.Dispatch<SetStateAction<string>>;
}

const Claims = ({ tab, setTab, payload, setPayload }: ClaimsProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPayload(event.target.value);
  };

  return (
    <>
      <div>
        <div className="decode-header decode-border-top">
          <span
            className={tab === "claim" ? "decode-tab-active" : "decode-tab"}
            onClick={() => setTab("claim")}
          >
            {"Claims"}
          </span>
          <span
            className={
              tab === "discloseFrame" ? "decode-tab-active" : "decode-tab"
            }
            onClick={() => setTab("discloseFrame")}
          >
            {"DiscloseFrames"}
          </span>
          <span
            className={
              tab === "discolsures" ? "decode-tab-active" : "decode-tab"
            }
            onClick={() => setTab("discolsures")}
          >
            {"Discolsures"}
          </span>
        </div>
      </div>
      <div className="decode-item">
        <ControlledEditor
          value={payload}
          options={{
            mode: "javascript",
            lineWrapping: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setPayload(value);
          }}
          className="json-payload"
        />
      </div>
    </>
  );
};

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton = ({ label, active, onClick }: TabButtonProps) => {
  const tabButtonStyle = "px-4 py-2 rounded-md cursor-pointer text-sm";
  const activeTabStyle = "bg-blue-500 text-white";
  const inactiveTabStyle = "text-gray-500";

  return (
    <span
      className={`${tabButtonStyle} ${
        active ? activeTabStyle : inactiveTabStyle
      } ml-2`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Claims;
