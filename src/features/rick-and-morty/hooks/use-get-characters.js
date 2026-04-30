import { useEffect, useState } from "react";
import { getCharacters } from "../services/get-characters";
import { useDebounce } from "use-debounce";
import { useRickAndMortyStore } from "../store/rick-and-morty-store";

export const useGetCharacters = () => {
  const { page, setPage, search, setSearch } = useRickAndMortyStore();

  const [characters, setCharacters] = useState({});
  const [debouncedSearch] = useDebounce(search, 1000);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters({ name: debouncedSearch, page })
      .then(setCharacters)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [debouncedSearch, page]);

  return {
    error,
    search,
    loading,
    page,
    setPage,
    setSearch,
    info: characters.info,
    characters: characters.results,
  };
};
