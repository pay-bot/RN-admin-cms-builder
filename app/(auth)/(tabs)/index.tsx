import React from "react";
import authApi from "@/api/auth";
import { store, useAppSelector } from "@/store";
import { Button } from "react-native";

export default function Index() {
  const key = useAppSelector((state) => state.auth.key);
  const handleLogout = () => {
    const { signout } = authApi();
    signout(key)
      .then((res) => {
        if (res.status === 200 || res.data) {
          store.dispatch({ type: "auth/setLogout" });
        }
      })
      .catch(() => {
        // console.log(err.response);
      });
  };
  return (
    <div>
      {" "}
      <Button title="logout" onPress={() => handleLogout()} />
    </div>
  );
}
