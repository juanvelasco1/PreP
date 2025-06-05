import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchApiCharacters,
  setSearchQuery,
} from '../redux/slices/charactersSlice';
import CharacterCard from '../components/CharacterCard';

const Home = () => {
  const dispatch = useDispatch();
  const {
    apiCharacters,
    customCharacters,
    searchQuery,
  } = useSelector((state) => state.characters);
  const { userType } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchApiCharacters());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const filteredApi = apiCharacters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCustom = customCharacters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Character List</h1>
      <input
        type="text"
        placeholder="Search characters"
        value={searchQuery}
        onChange={handleSearch}
      />

      {userType === 'admin' && (
        <button onClick={() => (window.location.href = '/create')}>
          Create Character
        </button>
      )}

      <div>
        {[...filteredCustom, ...filteredApi].map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Home;