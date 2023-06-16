import { useEffect, useState } from "react";
import Header from "../Header";

function Mods() {
  const [mods, setMods] = useState<
    {
      title: string;
      icon_url: string;
      description: string;
      slug: string;
      project_id: string;
    }[]
  >([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://api.modrinth.com/v2/search?limit=10")
      .then((response) => response.json())
      .then((data) => setMods(data.hits));
  }, []);

  const searchMods = () => {
    fetch(`https://api.modrinth.com/v2/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => setMods(data.hits));
  };

  return (
    <>
      <Header title="Mods" />
      <div className="flex justify-center items-center mt-10">
        <input
          type="text"
          placeholder="Search mods"
          className="bg-[#131518] p-4 rounded-lg text-xl text-white focus:outline-none"
          onChange={(e) => {
            setQuery(e.target.value);
            searchMods();
          }}
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-10">
        {mods.map((mod) => (
          <a
            key={mod.project_id}
            className="cursor-pointer"
            onClick={() => {
              window.open(
                `https://modrinth.com/mod/${mod.slug}/version/latest`
              );
            }}
          >
            <div className="w-96 bg-[#1f2227] m-2 rounded-lg scale">
              <div className="p-2">
                <h1>{mod.title}</h1>
                <img src={mod.icon_url} alt="" className="h-10 rounded-lg" />
                <p className="">{mod.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Mods;
