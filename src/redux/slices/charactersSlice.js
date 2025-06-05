import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchApiCharacters = createAsyncThunk(
  'characters/fetchApiCharacters',
  async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    apiCharacters: [],
    customCharacters: [],
    editingCharacter: null,
    searchQuery: '',
  },
  reducers: {
    addCharacter: (state, action) => {
      state.customCharacters.push(action.payload);
    },
    deleteCharacter: (state, action) => {
      state.customCharacters = state.customCharacters.filter((c) => c.id !== action.payload);
    },
    startEditing: (state, action) => {
      state.editingCharacter = action.payload;
    },
    saveEdit: (state, action) => {
      state.customCharacters = state.customCharacters.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
      state.editingCharacter = null;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiCharacters.fulfilled, (state, action) => {
      state.apiCharacters = action.payload;
    });
  },
});

export const {
  addCharacter,
  deleteCharacter,
  startEditing,
  saveEdit,
  setSearchQuery,
} = charactersSlice.actions;

export default charactersSlice.reducer;