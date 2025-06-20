import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userType: 'admin', // cambiar a 'user' para probar permisos
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;