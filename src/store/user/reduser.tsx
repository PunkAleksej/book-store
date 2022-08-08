import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = {
  firstName?: string;
  photo?: string;
  email: string;
  id: string;
}

export type UserToUpdateType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  photo?: string;
}

export type UserState = {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
}

const userToUpdate: UserToUpdateType = {
  email: '',
  firstName: '',
  lastName: '',
  photo: ''
}

const userReduser = createSlice({
  name: "userReduser",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.user =  {
        email: '', 
        id: '',
      }
    },
    updateUser: (state, action: PayloadAction<UserToUpdateType>) => {
      if (userToUpdate.email && state.user) {
        state.user.email = userToUpdate.email
      }
      if (userToUpdate.firstName && state.user) {
        state.user.firstName = userToUpdate.firstName
      }
      if (userToUpdate.photo && state.user) {
        state.user.photo = userToUpdate.photo
      }
    },
  }
})

export const userActions = userReduser.actions;

export default userReduser.reducer;
