import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { BadgeCheck, CircleCheck, Crown, Play, User } from "lucide-react";

const options = [
  {
    label: "Demo",
    value: "demo",
    icon: Play,
    defaultChecked: true,
  },
  {
    label: "Starter",
    value: "starter",
    icon: User,
  },
  {
    label: "Pro",
    value: "pro",
    icon: BadgeCheck,
  },
  {
    label: "Elite",
    value: "elite",
    icon: Crown,
  },
];

interface Props {
  defaultChecked: string;
  onValueChange: (value: string) => void;
}

const RadioCardsDemo = ({ defaultChecked, onValueChange }: Props) => {
  return (
    <RadioGroup.Root
      onValueChange={onValueChange}
      defaultValue={defaultChecked}
      className="w-full grid grid-cols-2 gap-4 justify-center items-center"
    >
      {options.map((option) => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          className={cn(
            "relative group ring-[1px] ring-border rounded py-2 px-3 text-start",
            "data-[state=checked]:ring-2 data-[state=checked]:ring-primary-500 data-[state=checked]:text-primary-500",
            "flex items-center gap-2"
          )}
        >
          <CircleCheck className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary fill-primary-500 stroke-white group-data-[state=unchecked]:hidden" />

          <option.icon className="size-4" />
          <span className="tracking-tight">{option.label}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};

export default RadioCardsDemo;
