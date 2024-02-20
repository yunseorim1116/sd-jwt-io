import { SetStateAction } from "react";
import { TabType } from "@/app/page";

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
      <div className="flex p-4">
        <TabButton
          label="Claims"
          active={tab === "claim"}
          onClick={() => setTab("claim")}
        />
        <TabButton
          label="DiscloseFrames"
          active={tab === "discloseFrame"}
          onClick={() => setTab("discloseFrame")}
        />
        <TabButton
          label="Discolsures"
          active={tab === "discolsures"}
          onClick={() => setTab("discolsures")}
        />
      </div>

      <textarea
        value={payload}
        onChange={handleInputChange}
        rows={10}
        cols={40}
        className="w-full min-h-[200px] p-2 border border-gray-300 rounded-md font-mono"
      />
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
      }`}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Claims;
