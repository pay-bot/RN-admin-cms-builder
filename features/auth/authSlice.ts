import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Storage } from "@/state/cache";
import { TIdAndName } from "@/types";
import { reduxStorage } from "@/store/storage";

// Define more specific types for the client and user objects
interface Client {
  id: string;
  // Add other properties as needed
}

type TLanguages = TIdAndName & {
  abbreviation: string;
  flag: string;
};

interface User {
  is_superuser: boolean;
  avatar?: string;
  name: string;
  email: string;
  id: string;
  site: string;
  client: string;
  groups: TIdAndName[];

  // Add other properties as needed
}

interface AuthPayload {
  key: string;
  user: User;
  client: Client;
  site_languages: TLanguages[];
}

type TAuth = {
  isAuthenticated: boolean;
  key?: string;
  user?: User;
  activeSiteLanguages: TLanguages[];
};

export type AuthState = TAuth;

const siteLanguagesState = reduxStorage.getItem("bzSiteLanguages")
  ? (JSON.parse(
      JSON.stringify(reduxStorage.getItem("bzSiteLanguages") || "{}")
    ) as TLanguages[])
  : [
      {
        id: "",
        name: "",
        abbreviation: "",
        flag: "",
      },
    ];

const parsedUserData = JSON.parse(
  JSON.stringify(reduxStorage.getItem("bzUser") || "{}")
) as User;
const getUserData = {
  is_superuser: parsedUserData.is_superuser,
  avatar: parsedUserData.avatar,
  name: parsedUserData.name,
  email: parsedUserData.email,
  id: parsedUserData.id,
  site: parsedUserData.site,
  client: parsedUserData.client,
  groups: parsedUserData.groups || [],
};

const userState = {
  is_superuser: getUserData.is_superuser,
  avatar: getUserData.avatar,
  name: getUserData.name,
  email: getUserData.email,
  id: getUserData.id,
  site: getUserData.site,
  client: getUserData.client,
  groups: getUserData.groups || [],
};
const initialState: TAuth = {
  isAuthenticated: false,

  key: reduxStorage.getItem("bzKey") || "",
  user: userState,
  activeSiteLanguages: siteLanguagesState,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggin(state, action: PayloadAction<AuthPayload>) {
      const data = action.payload;
      console.log("🚀 ~ setLoggin ~ data:", data);
      state.key = data.key;
      state.user = {
        is_superuser: data.user.is_superuser,
        avatar: data.user.avatar,
        name: data.user.name,
        email: data.user.email,
        id: data.user.id,
        site: data.user.site,
        client: data.user.client,
        groups: data.user.groups || [],
      };
      state.activeSiteLanguages = data.site_languages;

      Storage.set("bzKey", data.key);
      Storage.set(
        "bzUser",
        JSON.stringify({
          is_superuser: data.user.is_superuser,
          avatar: data.user.avatar,
          name: data.user.name,
          email: data.user.email,
          id: data.user.id,
          site: data.user.site,
          client: data.user.client,
          groups: data.user.groups,
        })
      );
      Storage.set("bzaSite", String(data.user.site));
      localStorage.setItem(
        "bzSiteLanguages",
        JSON.stringify(data.site_languages)
      );
    },

    setAuthenticated(state) {
      if (state.key && state.user) {
        state.isAuthenticated = true;
      }
    },

    setLogout(state) {
      state.key = "";
      state.user = undefined;
      state.isAuthenticated = false;
      Storage.clearAll();
    },
  },
});

export const { setLoggin, setAuthenticated, setLogout } = authSlice.actions;
export default authSlice.reducer;
