const tabs = [
  "Home",
  "Series",
  "Films",
  "New and Popular",
  "My List",
  "Browse by language",
];

export default function Navbar() {
  return (
    <nav className="w-full fixed z-40">
      <div className="px-16 py-6 flex items-center">
        <img
          className="h-16"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F580b57fcd9996e24bc43c529.png&f=1&nofb=1&ipt=400b681b4677f4a6e2fd6b6245f2a2e9dd0fa729c7f8e7e5d8508d67961bad63&ipo=images"
          alt="Logo"
        />
        <div className="flex gap-7 ml-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
