import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 flex h-24 w-full bg-black text-base font-medium shadow items-center justify-between text-white">
      <h1 className="text-4xl ml-8">
        <Link href="/">SD JWT</Link>
      </h1>
      <nav className="mr-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Debugger</Link>
          </li>
          <li>
            <Link
              href="https://github.com/openwallet-foundation-labs/sd-jwt-js"
              target="_blank"
            >
              Library
            </Link>
          </li>

          <li>
            <Link
              href="https://www.ietf.org/archive/id/draft-ietf-oauth-selective-disclosure-jwt-06.html"
              target="_blank"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <span className="text-xs mr-2">created</span>
        <span className="text-xl mr-4">Hopae</span>
      </nav>
    </header>
  );
};

export default Header;
