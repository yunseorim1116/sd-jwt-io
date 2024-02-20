import JwtCommonHeader from "./common/JwtCommonHeader";

export const Encoded = () => {
  return (
    <div className="mr-8">
      <JwtCommonHeader
        title="Encoded"
        subtitle="EDIT THE PAYLOAD AND SECRET"
        titleSize="3xl"
        subtitleSize="xs"
      />
      <textarea>에디터 툴 </textarea>
    </div>
  );
};
