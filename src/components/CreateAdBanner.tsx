import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
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
        <Dialog.Trigger className="text-white bg-violet-500 py-3 px-4 rounded-md hover:bg-violet-600 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
