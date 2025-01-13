import { type ReactElement } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import clsxm from "@/utils/clsxm";
import { TextInput, View } from "react-native";
// import BaseHelper from "../Base/BaseHelper";
// import BaseLabel from "../Base/BaseLabel";
// import { Button } from "../ui/button";

type InputProperties<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  disabled?: boolean;
  required?: boolean;
  type?: string;
  label?: string;
  showPass?: boolean;
  showCfPass?: boolean;
  errors?: string;
  hidden?: boolean;
  onFocus?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  rows?: number;
  helperText?: string;
  setShowPassword?: (show: boolean) => void;
  showPassword?: boolean;
};

const InputContainer = <T extends FieldValues>({
  name,
  control,
  disabled,
  type = "text",
  label,
  errors,
  hidden,
  onFocus,
  placeholder,
  className,
  helperText,
  required,
  setShowPassword,
  showPassword = false,
}: InputProperties<T>): ReactElement => (
  <View className={clsxm("w-full ", className, hidden && "hidden")}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <View className="">
          {/* {label && (
            <BaseLabel
              value={label}
              className={clsxm(errors ? "text-[#D02B20]" : "")}
              required={required}
            />
          )} */}
          <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
            <TextInput
              className={clsxm("", className)}
              placeholder={placeholder}
              onFocus={onFocus}
              disabled={disabled}
              {...field}
            />
            {/* {type === "password" && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-1/2 -translate-y-1/2 px-3  hover:bg-transparent"
                onClick={() => {
                  if (setShowPassword) {
                    setShowPassword(!showPassword);
                  }
                }}
                disabled={!field.value}
              >
                {showPassword ? (
                  <EyeIcon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </Button>
            )} */}
          </View>
        </View>
      )}
    />
  </View>
);

export default InputContainer;
