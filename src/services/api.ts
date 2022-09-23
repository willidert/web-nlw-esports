import { IGames } from "../App";

export interface Ad {
  id?: string;
  nome: string;
  weekDays: number[];
  discord: string;
  game: string;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

export function getGames(fn: (data: IGames[]) => void) {
  return fetch("http://127.0.0.1:3333/games").then((response) =>
    response.json().then((data) => fn(data))
  );
}

export function createAd(ad: Ad) {
  console.log(ad);
  return fetch(`http://127.0.0.1:3333/games/${ad.game}/ads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  }).then((response) =>
    response
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
}
