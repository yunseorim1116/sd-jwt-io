import React from "react";

interface CommonHeaderProps {
  title: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
}

const JwtCommonHeader = ({
  title,
  subtitle,
  titleSize,
  subtitleSize,
}: CommonHeaderProps) => {
  return (
    <div className="flex items-center mb-4">
      <div className={`font-bold text-${titleSize} mr-2`}>{title}</div>
      <p className={`text-gray-500 whitespace-nowrap text-${subtitleSize}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default JwtCommonHeader;
