import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Toggle from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";

import { Input } from "./Form/Input";
import { useState, useEffect, FormEvent } from "react";
import { IGames } from "../App";
import { Ad, createAd, getGames } from "../services/api";

export function CreateAdModal() {
  const [games, setGames] = useState<IGames[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  useEffect(() => {
    getGames(setGames);
  }, []);

  function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    const adData = {
      ...data,
      useVoiceChannel,
      yearsPlaying: Number(data.yearsPlaying),
      weekDays: weekDays.map(Number),
    } as Ad;

    createAd(adData);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0" />
      <Dialog.Content className="bg-[#2a2634] rounded-md fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black mb-8">
          Publique um anúncio
        </Dialog.Title>
        <form onSubmit={handleCreateAd} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>
            <select
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
              defaultValue=""
              name="game"
            >
              <option disabled value="">
                Selecione o game que deseja jogar
              </option>
              {games.map((game) => {
                return (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="nick">
              Seu nome (ou nickname)
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Como te chamam dentro do jogo"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="years">
                Joga há quantos anos?
              </label>
              <Input
                className="bg-[#181818] py-3 px-4 rounded"
                type="number"
                id="yearsPlaying"
                placeholder="Tudo bem ser ZERO"
                name="yearsPlaying"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="discord">
                Qual seu Discord?
              </label>
              <Input id="discord" name="discord" placeholder="usuário#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="weekDays">
                Quando costuma jogar?
              </label>
              <Toggle.Root
                type="multiple"
                className="flex gap-1"
                onValueChange={setWeekDays}
                value={weekDays}
              >
                <Toggle.Item
                  title="S"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="0"
                >
                  S
                </Toggle.Item>
                <Toggle.Item
                  title="D"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="1"
                >
                  D
                </Toggle.Item>
                <Toggle.Item
                  title="T"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="2"
                >
                  T
                </Toggle.Item>
                <Toggle.Item
                  title="Q"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="3"
                >
                  Q
                </Toggle.Item>
                <Toggle.Item
                  title="Q"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="4"
                >
                  Q
                </Toggle.Item>
                <Toggle.Item
                  title="S"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="5"
                >
                  S
                </Toggle.Item>
                <Toggle.Item
                  title="S"
                  className={`w-6 h-6 rounded-md ${
                    weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  value="6"
                >
                  S
                </Toggle.Item>
              </Toggle.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold" htmlFor="hourStart">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="time"
                  id="hourStart"
                  name="hourStart"
                  placeholder="De"
                />
                <Input
                  type="time"
                  id="hourEnd"
                  name="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="mt-2 flex gap-2 items-center select-none">
            <Checkbox.Root
              checked={useVoiceChannel}
              className="w-6 h-6 p-1 rounded-md bg-zinc-900"
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(checked);
                } else setUseVoiceChannel(false);
              }}
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-600" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
  );
}
