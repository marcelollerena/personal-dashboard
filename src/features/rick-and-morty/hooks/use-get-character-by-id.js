import React, { useEffect, useState } from "react";
import { getCharacterById } from "../services/get-character-by-id";

export const useGetCharacterById = (id) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then(setCharacter)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    character,
    loading,
    error,
  };
};
