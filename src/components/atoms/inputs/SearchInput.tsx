import { IconNames } from "../AppIcon";
import { TextInput, TextInputProps } from "./TextInput";

type Props = {
  onClear: () => void;
  value: string;
} & TextInputProps;

export const SearchInput = ({ onClear, value, ...props }: Props) => {
  const showAction = !!value;

  const actionProps = showAction
    ? {
        action: onClear,
        actionIconName: IconNames.close,
      }
    : {};

  return (
    <TextInput
      value={value}
      iconName={IconNames.search}
      {...actionProps}
      {...props}
    />
  );
};
