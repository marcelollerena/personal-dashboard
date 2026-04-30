import React from "react";
import { DisplayGender } from "../../utils/display-gender";
import { DisplayStatus } from "../../utils/display-status";
import { useNavigate } from "react-router";

export const CharacterItem = ({ character, withNavigation = true }) => {
  const { id, name, status, species, gender, origin, location, image } =
    character;

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!withNavigation) return;

    navigate(`character/${id}`);
  };

  return (
    <div
      className={`min-h-90 w-75 bg-slate-700/50 rounded-lg p-6 flex flex-col gap-2 ${withNavigation && "cursor-pointer"}`}
      onClick={handleNavigate}
    >
      <img src={image} alt={name} className="w-full h-44 rounded-lg" />
      <h2 className="font-bold opacity-50 text-2xl">{name}</h2>

      <div className="grid grid-cols-2 gap-2 items-center justify-center">
        <div className="flex gap-2">
          <p>Gender:</p>
          <DisplayGender gender={gender} />
        </div>

        <div className="flex gap-2">
          <p>Status:</p>
          <DisplayStatus status={status} />
        </div>

        <div className="flex gap-2 col-span-2 items-center">
          <p>Species:</p>
          <p className="text-sm opacity-50">{species || "---"}</p>
        </div>

        <div className="flex gap-2 col-span-2 items-center">
          <p>Origin:</p>
          <p className="text-sm opacity-50">{origin.name}</p>
        </div>

        <div className="flex gap-2 col-span-2 items-center">
          <p>Location:</p>
          <p className="text-sm opacity-50">{location.name}</p>
        </div>
      </div>
    </div>
  );
};
