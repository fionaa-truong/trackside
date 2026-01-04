// TODO: replace imola with Madring
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

const LAP_LENGTHS_KM: Record<string, number> = {
  Sakir: 5.412,
  Jeddah: 6.174,
  Melbourne: 5.278,
  Baku: 6.003,
  Miami: 5.412,
  Monte: 3.337,
  Catalunya: 4.657,
  Montreal: 4.361,
  Spielberg: 4.326,
  Silverstone: 5.891,
  Hungaroring: 4.381,
  "Spa-Francorchamps": 7.004,
  Zanvoort: 4.259,
  Monza: 5.793,
  Singapore: 4.927,
  Suzuka: 5.807,
  Lusail: 5.419,
  Austin: 5.513,
  "Mexico City": 4.304,
  Interlagos: 4.309,
  "Las Vegas": 6.201,
  "Yas Marina": 5.281,
  Imola: 4.909,
  Shanghai: 5.451,
};

export function getLapLength(circuit: string): number {
  return LAP_LENGTHS_KM[circuit] ?? 5;
}
