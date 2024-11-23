import { TextInput, TextInputProps } from "react-native";

export interface InputTextProps extends TextInputProps {}

export const InputText: React.FC<InputTextProps> = props => {
  return (
    <TextInput
      {...props}
      className="rounded bg-[white] italic p-3"
      placeholderTextColor="#8C8A93"
    />
  );
};
