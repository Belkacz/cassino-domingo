import { WinColors } from "./enums";

export interface SlotItem {
    id: number;
    name: string;
    src?: string;
}

export interface SlotItemScore extends SlotItem {
    winStrike: WinColors
}
