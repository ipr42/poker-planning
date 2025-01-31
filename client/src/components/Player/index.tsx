import { ReactElement } from "react";

import { Card } from "@/components/Card";

interface PlayerProps {
  username: string;
  isCardPicked: boolean;
  isGameOver: boolean;
  card: string | null | undefined;
}

export function Player({
  username,
  isCardPicked,
  isGameOver,
  card,
}: PlayerProps): ReactElement {
  // Determine the symbol to display based on the player's state.
  const cardSymbol = isCardPicked
    ? card
      ? card
      : "✅"
    : isGameOver
    ? "😴"
    : "🤔";

  return (
    <div className="flex flex-col items-center" data-testid="player">
      <Card>{cardSymbol}</Card>
      <span className="text-sm mb-1">{username}</span>
    </div>
  );
}
