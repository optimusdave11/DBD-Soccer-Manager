export enum FFPPunishment {

  NONE = "NONE",

  FINE = "FINE",

  POINTS_DEDUCTION = "POINTS_DEDUCTION",

  TRANSFER_BAN = "TRANSFER_BAN"

}

export function determinePunishment(
  loss: number
): FFPPunishment {

  if (loss <= 105_000_000)
    return FFPPunishment.NONE;

  if (loss <= 120_000_000)
    return FFPPunishment.FINE;

  if (loss <= 140_000_000)
    return FFPPunishment.POINTS_DEDUCTION;

  return FFPPunishment.TRANSFER_BAN;

}