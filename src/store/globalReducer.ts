import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @ts-ignore
import Cookies from "js-cookie";

import {
  Type_User_Data,
  Type_Lang_Model,
  Type_Modal_types,
} from "@/constants/types";

interface Type_Global_State {
  user: Type_User_Data | null | undefined;
  theme: string | null | undefined;
  lang: Type_Lang_Model | null | undefined;
  modal: {
    type: Type_Modal_types;
    isOpen: boolean;
    data: {};
    id: string | number | undefined | null;
  };
}

function getcookiesValues() {
  const user = Cookies.get("user");
  const theme = Cookies.get("theme");
  const lang = Cookies.get("lang");

  return {
    user: user ? JSON.parse(user) : null,
    theme,
    lang: lang ? JSON.parse(lang) : null,
  };
}

const initialState: Type_Global_State = {
  user: getcookiesValues().user,
  lang: getcookiesValues().lang,
  theme: getcookiesValues().theme,
  modal: {
    type: undefined,
    isOpen: false,
    data: {},
    id: "",
  },
};

const globalReducer = createSlice({
  name: "global_reducer",
  initialState,
  reducers: {
    // save data
    saveUserData: (
      state,
      action: PayloadAction<{ token: string; data: Type_User_Data }>,
    ) => {
      Cookies.set("token", action.payload.token);
      Cookies.set("user", JSON.stringify(action.payload.data));
      state.user = action.payload.data;
    },

    // logout
    logoutUser: (state) => {
      Cookies.remove("token");
      Cookies.remove("user");
    },

    // toggle theme
    toggleTheme: (state, action: PayloadAction<string>) => {
      Cookies.set("theme", action.payload);
      state.theme = action.payload;
      document.documentElement.dataset.theme = action.payload;
    },

    // open modal
    openModal: (
      state,
      action: PayloadAction<{
        data: {};
        id: string | number;
        type: Type_Modal_types;
      }>,
    ) => {
      state.modal.isOpen = true;
      state.modal.data = action.payload.data;
      state.modal.type = action.payload.type;
      state.modal.id = action.payload.id;
    },

    // close modal
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.data = {};
      state.modal.type = undefined;
      state.modal.id = "";
    },
  },
});

export default globalReducer.reducer;

export const { saveUserData, logoutUser, toggleTheme, openModal, closeModal } =
  globalReducer.actions;
