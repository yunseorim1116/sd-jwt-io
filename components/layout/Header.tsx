export const Header = () => {
  return (
    <header className="fixed top-0 flex h-24 w-full bg-black text-base font-medium shadow items-center justify-between text-white">
      <h1 className="text-4xl ml-8">SD JWT</h1>
      <nav className="mr-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/library">Library</a>
          </li>
          <li>
            <a href="/debugger">Debugger</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <nav>
        <span className="text-xs mr-2">crafted by</span>
        <span className="text-xl mr-4">Hopae</span>
      </nav>
    </header>
  );
};
