export interface Character {
  id: number;
  name: string;
  initiative: number;
  ac: number;
  hp: number;
  status?: string;
}

export const characters: Character[] = [
  { id: 1, name: 'Thorin Oakenshield', initiative: 18, ac: 16, hp: 42, status: 'Wounded' },
  { id: 2, name: 'Bilbo Baggins', initiative: 14, ac: 13, hp: 27 },
  { id: 3, name: 'Gandalf the Grey', initiative: 22, ac: 12, hp: 99, status: 'Blessed' },
  // …add more as you like
];
