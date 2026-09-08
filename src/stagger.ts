import type {CSSProperties} from "react";

export const slot = (i : number) => ({ '--slot': i}) as CSSProperties;
export const offset = (i: number) => ({'--offset': i}) as CSSProperties;