import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCharacter } from '../redux/slices/charactersSlice';

const CharacterCard = ({ character }) => {
  const { userType } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCustom = !character.url;

  const handleEdit = () => {
    navigate(`/edit/${character.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteCharacter(character.id));
  };

  return (
    <div>
      <h3>{character.name}</h3>
      {character.image && <img src={character.image} alt={character.name} />}
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {userType === 'admin' && isCustom && (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default CharacterCard;