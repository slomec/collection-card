export function calculateQuantity(minPlayers: number, maxPlayers: number): string {
  if (minPlayers < maxPlayers) {
    return `${minPlayers}-${maxPlayers}`;
  }
  if (minPlayers === maxPlayers) {
    return `${minPlayers}`;
  }
  return "?";
}
