type CSSAbsoluteUnit = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px";
type CSSRelativeUnit =
    | "em"
    | "ex"
    | "ch"
    | "rem"
    | "lh"
    | "rlh"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "vb"
    | "vi"
    | "svw"
    | "svh"
    | "lvw"
    | "lvh"
    | "dvw"
    | "dvh"
    | "%";

type SizeProp = `${number}${CSSAbsoluteUnit | CSSRelativeUnit}`;
