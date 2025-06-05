import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCharacter, saveEdit } from '../redux/slices/charactersSlice';
import { useNavigate } from 'react-router-dom';

const CharacterForm = ({ character }) => {
  const [form, setForm] = useState(
    character || { name: '', status: '', species: '', id: Date.now() }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (character) {
      dispatch(saveEdit(form));
    } else {
      dispatch(addCharacter(form));
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="status" placeholder="Status" value={form.status} onChange={handleChange} />
      <input name="species" placeholder="Species" value={form.species} onChange={handleChange} />
      <button type="submit">{character ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default CharacterForm;