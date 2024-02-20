"use client";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full bg-black text-base shadow items-center text-white p-8">
      <div>
        <span className="mr-2">Missing something? </span>

        <span
          className="text-cyan-600 cursor-pointer text-sm "
          onClick={() => {
            window.open("https://github.com/lukasjhan/sd-jwt-io", "_blank");
          }}
        >
          Send a Pull Request
        </span>
        <span> - </span>
        <span
          className="text-cyan-600 cursor-pointer text-sm"
          onClick={() => {
            window.open(
              "https://github.com/lukasjhan/sd-jwt-io/blob/master/LICENSE.md",
              "_blank"
            );
          }}
        >
          License
        </span>
      </div>
    </footer>
  );
};
export default Footer;
