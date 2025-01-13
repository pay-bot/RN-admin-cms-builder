import { Button, Text } from "react-native";

import authApi from "@/api/auth";
import InputContainer from "@/components/input/InputContainer";
import { useForm } from "react-hook-form";

import { SafeAreaView } from "react-native-safe-area-context";
import { Toast } from "toastify-react-native";
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
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const showToasts = () => {
    Toast.success("Promised is resolved");
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
      <Text className="bg-red-600">test</Text>
      <InputContainer control={control} name="email" label="Email" />
      <InputContainer control={control} name="password" label="Password" />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
