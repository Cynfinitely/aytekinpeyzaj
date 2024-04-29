import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFromFirebase,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

interface AuthState {
  user: { uid: string; email: string | null } | null;
  loading: boolean;
}

const initialState: AuthState = { user: null, loading: true };

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { uid: userCredential.user.uid, email: userCredential.user.email };
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { uid: userCredential.user.uid, email: userCredential.user.email };
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  await signOutFromFirebase(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ uid: string; email: string | null }>
    ) => {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const { setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
