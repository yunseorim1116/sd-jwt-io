import React from "react";

interface CommonHeaderProps {
  title: string;
  subtitle?: string;
  titleSize?: string; // 타이틀 텍스트 크기 프롭스 추가 (선택적)
  subtitleSize?: string; // 서브타이틀 텍스트 크기 프롭스 추가 (선택적)
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
