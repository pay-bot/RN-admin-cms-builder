import { Button, Text } from "react-native";

import authApi from "@/api/auth";
import InputContainer from "@/components/input/InputContainer";
import { useForm } from "react-hook-form";

import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "toastify-react-native";
import { store } from "@/store";
console.log("API URL:", process.env.EXPO_PUBLIC_API_URL);

export default function login() {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "newadmin@mail.com",
      password: "anotherpassword",
    },
  });
  const onSubmit = (dataAuth: { email: string; password: string }) => {
    const { signin } = authApi();
    signin({
      email: dataAuth.email,
      password: dataAuth.password,
    })
      .then((res) => {
        const { data } = res;
        if (data && res.status === 200) {
          console.log("🚀 ~ .then ~ data:", data);
          store.dispatch({ type: "auth/setLoggin", payload: data });
          store.dispatch({
            type: "client/setActiveClient",
            payload: data.user.client,
          });
          store.dispatch({
            type: "content/setActiveSite",
            payload: data.user.site,
          });
          store.dispatch({
            type: "content/setActiveTemplate",
            payload: data.templates[0]?.id,
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      edges={["top"]}
    >
      <InputContainer control={control} name="email" label="Email" />
      <InputContainer control={control} name="password" label="Password" />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
