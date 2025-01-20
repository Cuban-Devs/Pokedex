import { BurguerButton } from "../components/BurgerButton";
import { SearchBar } from "../components/SearchBar";

export function HomeView() {
  return (
    <div className="p-6 bg-black text-white w-full h-full flex flex-col">
      {/* Hero Img */}
      <img
        src="/pokeball_hero.png"
        className="fixed top-6 -right-11 w-40 opacity-10 -rotate-12"
      />
      <nav className="flex items-center">
        <BurguerButton/>
      </nav>
      <h1 className="mt-6 p-2 text-lg font-bold">
        What Pokémon are you looking for?
      </h1>

      <div className="mt-6 flex flex-col">
        <SearchBar/>
      </div>
    </div>
  );
}