import { atom } from "jotai";


/**
 * setMenu({
  style: "list",
  options: [
    { label: "Attack", id: "ATTACK" },
    { label: "Magic", id: "MAGIC" }
  ]
})
 */
// interface Menu{
//   style: "start" | "modal" | "list" | "dialogue" | "confirm" | null;
//   data: unknown;
// }

export const showMenuAtom = atom(false);
export const menuStyleAtom = atom("start");

export interface UICommand {
  type: string;
};

export const uiCommandQueue: UICommand[] = [];

export function emitUICommand(cmd: UICommand){
  uiCommandQueue.push(cmd);
}

export function consumeUICommands(){
  const commands = [...uiCommandQueue];
  uiCommandQueue.length = 0;
  return commands;
}


