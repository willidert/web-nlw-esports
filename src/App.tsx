import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import "./styles/main.css";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "./assets/logo-nlw-esports.svg";
import { useEffect, useState } from "react";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Input } from "./components/Form/Input";

interface IGames {
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
    fetch("http://127.0.0.1:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 fixed inset-0" />
          <Dialog.Content className="bg-[#2a2634] rounded-md fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black mb-8">
              Publique um anúncio
            </Dialog.Title>
            <form action="" method="post" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="nick">
                  Seu nome (ou nickname)
                </label>
                <Input id="nick" placeholder="Como te chamam dentro do jogo" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="years">
                    Joga há quantos anos?
                  </label>
                  <Input
                    className="bg-[#181818] py-3 px-4 rounded"
                    type="number"
                    id="years"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="discord">
                    Qual seu Discord?
                  </label>
                  <Input id="discord" placeholder="usuário#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="weekDays">
                    Quando costuma jogar?
                  </label>
                  <div className="flex gap-1">
                    <button title="S" className="w-6 h-6 bg-zinc-900">
                      S
                    </button>
                    <button title="D" className="w-6 h-6 bg-zinc-900">
                      D
                    </button>
                    <button title="T" className="w-6 h-6 bg-zinc-900">
                      T
                    </button>
                    <button title="Q" className="w-6 h-6 bg-zinc-900">
                      Q
                    </button>
                    <button title="Q" className="w-6 h-6 bg-zinc-900">
                      Q
                    </button>
                    <button title="S" className="w-6 h-6 bg-zinc-900">
                      S
                    </button>
                    <button title="S" className="w-6 h-6 bg-zinc-900">
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-semibold" htmlFor="hourStart">
                    Qual horário do dia?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hourStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2">
                <input
                  className="bg-[#181818] py-3 px-4 rounded"
                  type="checkbox"
                  name="voiceChannel"
                  id="voiceChannel"
                />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                  Cancelar
                </Dialog.Close>
                <button
                  className="bg-violet-500 px-5 h-12 rounded-md flex items-center gap-3 hover:bg-violet-600"
                  type="submit"
                >
                  <GameController size={24} /> Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
