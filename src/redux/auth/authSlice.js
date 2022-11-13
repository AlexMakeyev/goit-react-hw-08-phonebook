import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, current } from "./operations";

const initialState = {
    user: {name: null, email: null},
    token: '',
    isLogin: false,
    loading: false,
    error: null,
    isLoadingUser: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signup.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signup.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [login.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [login.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [login.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [logout.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logout.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = {};
            store.token = "";
            store.isLogin = false;
        },
        [logout.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [current.pending]: (store) => {
            store.isLoadingUser = true;
            store.error = null;
        },
        [current.fulfilled]: (store, {payload}) => {
            store.isLoadingUser = false;
            store.user = payload;
            store.isLogin = true;
        },
        [current.rejected]: (store, {payload}) => {
            store.isLoadingUser = false;
            store.error = payload;
        },
    }
})

export default authSlice.reducer;