import { useState } from 'react';

export default function RandomWords() {
  const [num] = useState(() => Math.floor(Math.random() * 10) + 1);
  const words = ['Apfel', 'Banane', 'Kirsche'];
  const word = words[(num - 1) % words.length];

  return <div>{word}</div>;
}