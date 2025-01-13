import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import clsxm from "@/utils/clsxm";
import { Text, View } from "react-native";

type TBaseLabel = {
  value: string;
  mb?: boolean;
  required?: boolean;
  className?: string;
};

export default function BaseLabel({
  value,
  mb,
  className,
  required,
}: TBaseLabel) {
  return (
    <View className="relative w-fit pr-[10px]">
      <Text
        className={clsxm(
          "text-[0.875rem] font-[600] capitalize leading-[1.4375em] tracking-[0.00938em] text-[#32324D]",
          mb ? "mb-[4px]" : "",
          className
        )}
      >
        {value}
      </Text>
      {required && (
        <FontAwesome5
          name="star-of-life"
          size={24}
          className="absolute right-0 top-[4px] w-[7px] h-[7px] text-[#F15B5B]"
        />
      )}
    </View>
  );
}
