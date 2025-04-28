import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CircleCheck, Crown, Play, User } from "lucide-react";

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
    icon: CircleCheck,
  },
  {
    label: "Elite",
    value: "elite",
    icon: Crown,
  },
];

const CheckboxCard = () => {
  return (
    <div className="w-full max-w-sm grid grid-cols-3 gap-3">
      {options.map((option) => (
        <CheckboxPrimitive.Root
          key={option.value}
          defaultChecked={option.defaultChecked}
          className="relative ring-[1px] ring-border rounded-lg px-4 py-3 text-start text-muted-foreground data-[state=checked]:ring-2 data-[state=checked]:ring-primary data-[state=checked]:text-primary"
        >
          <option.icon className="mb-3" />
          <span className="font-medium tracking-tight">{option.label}</span>

          <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
            <CircleCheck className="fill-primary text-primary-foreground" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      ))}
    </div>
  );
};

export default CheckboxCard;
