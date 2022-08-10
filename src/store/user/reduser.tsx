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
      console.log(action.payload)
      if (action.payload.email && state.user) {
        state.user.email = action.payload.email
      }
      if (action.payload.firstName && state.user) {
        state.user.firstName = action.payload.firstName
      }
      if (action.payload.photo && state.user) {
        state.user.photo = action.payload.photo
      }
    },
  }
})

export const userActions = userReduser.actions;

export default userReduser.reducer;
