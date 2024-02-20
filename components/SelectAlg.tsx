import { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectAlgProps {
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectAlg = ({ onSelect }: SelectAlgProps) => {
  return (
    <div className="flex justify-center items-center font-bold gap-4 mb-8">
      <div>Algorithm</div>
      <select
        defaultValue="HS256"
        className="w-24 p-2 border border-gray-300 rounded-md"
        onChange={onSelect}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAlg;

const options: Option[] = [
  { value: "HS256", label: "HS256" },
  { value: "HS384", label: "HS384" },
  { value: "HS512", label: "HS512" },
  { value: "RS256", label: "RS256" },
  { value: "RS384", label: "RS384" },
  { value: "RS512", label: "RS512" },
  { value: "ES256", label: "ES256" },
  { value: "ES384", label: "ES384" },
  { value: "ES512", label: "ES512" },
  { value: "PS256", label: "PS256" },
  { value: "PS384", label: "PS384" },
  { value: "PS512", label: "PS512" },
];
