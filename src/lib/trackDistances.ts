// TODO: replace catulunya with Madring
export const RACE_DISTANCES: Record<string, number> = {
  Sakir: 308.238,
  Jeddah: 308.45,
  Melbourne: 306.124,
  Baku: 306.049,
  Miami: 308.326,
  Monte: 260.286,
  Catalunya: 307.236,
  Montreal: 305.27,
  Spielberg: 307.018,
  Silverstone: 306.198,
  Hungaroring: 306.63,
  "Spa-Francorchamps": 308.052,
  Zanvoort: 306.587,
  Monza: 306.72,
  Singapore: 305.337,
  Suzuka: 307.471,
  Lusail: 308.611,
  Austin: 308.405,
  "Mexico City": 305.354,
  Interlagos: 305.879,
  "Las Vegas": 309.958,
  "Yas Marina": 306.183,
  Imola: 309.049,
  Shanghai: 305.066,
};

export function getRaceDistance(circuit: string): number {
  return RACE_DISTANCES[circuit] ?? 305;
}
