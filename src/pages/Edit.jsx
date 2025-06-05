import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CharacterForm from '../components/CharacterForm';

const Edit = () => {
  const { id } = useParams();
  const { customCharacters } = useSelector((state) => state.characters);
  const character = customCharacters.find((char) => String(char.id) === id);

  return (
    <div>
      <h1>Edit Character</h1>
      <CharacterForm character={character} />
    </div>
  );
};

export default Edit;