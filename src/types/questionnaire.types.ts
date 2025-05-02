export type DoshaType = "Vata" | "Pitta" | "Kapha";

export type FormValues = Record<number, DoshaType>;

export type DoshaResultType = "vata" | "pitta" | "kapha";

export interface DoshaResult {
  doshaType: DoshaResultType;
  percentage: number;
}
