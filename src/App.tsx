import { MagnifyingGlassPlus } from "phosphor-react";
import "./styles/main.css";

import logo from "./assets/logo-nlw-esports.svg";

function App() {
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
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className=" text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className=" text-white font-bold block">DOTA 2</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className=" text-white font-bold block">
              Counter Strike
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className=" text-white font-bold block">
              Apex Legends
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className=" text-white font-bold block">Fortnite</strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className=" text-white font-bold block">
              World of Warcraft
            </strong>
            <span className="text-sm text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-4">
        <div className="bg-[#2a2624] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl font-black block text-white">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="text-white bg-violet-500 py-3 px-4 rounded-md hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
