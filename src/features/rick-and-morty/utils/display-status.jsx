import { Heart, ShieldQuestionMark, Skull } from "lucide-react";

export const DisplayStatus = ({ status }) => {
  if (status === "Alive")
    return <Heart className="text-red-500 fill-red-500" />;
  if (status === "Dead") return <Skull className="text-gray-500" />;
  if (status === "Unknown")
    return <ShieldQuestionMark className="text-gray-500" />;

  return <ShieldQuestionMark className="text-gray-500" />;
};
