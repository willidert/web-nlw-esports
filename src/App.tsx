import "./styles/main.css";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

import logo from "./assets/logo-nlw-esports.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import { GameBanner } from "./components/GameBanner";
import { getGames } from "./services/api";

export interface IGames {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<IGames[]>([]);

  useEffect(() => {
    getGames(setGames);
  }, []);

  return (
    <div className="max-w-[1020px] mx-auto flex flex-col items-center my-10">
      <img src={logo} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-6">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-3 mt-8">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              name={game.title}
              bannerUrl={game.bannerUrl}
              ads={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
