import { useGetCharacters } from "../hooks/use-get-characters";

import FetchError from "../../../common/components/skeletons/fetch-error";
import { CharacterItem } from "../components/character-item/character-item";
import { FilterCharacters } from "../components/filter-characters/filter-characters";
import { RickAndMortySkeletonPage } from "../components/skeletons/rick-and-morty-skeleton-page";
import { Pagination } from "../components/pagination/pagination";

export function RickAndMortyPage() {
  const { info, characters, search, setSearch, page, setPage, loading, error } =
    useGetCharacters();

  if (loading) return <RickAndMortySkeletonPage />;

  if (error) {
    return <FetchError message={error} />;
  }

  return (
    <div className="h-screen overflow-y-scroll">
      <div className="gap-10 flex justify-between items-center mb-4">
        <FilterCharacters
          search={search}
          setSearch={setSearch}
          setPage={setPage}
        />

        <Pagination page={page} setPage={setPage} info={info} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
        {characters.map((character) => (
          <CharacterItem character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}
