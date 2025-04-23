import { ShineBorder } from "../magicui/shine-border";
import { ShinyButton } from "../magicui/shiny-button";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  title: string;
  main?: boolean;
  icon: React.ReactNode;
  price: { monthly: string; yearly: string };
  plan: "monthly" | "yearly";
  features: string[];
}

export default function PricingCard({
  title,
  main,
  icon,
  price,
  plan,
  features,
}: Props) {
  return (
    <Card
      className={`relative overflow-hidden border-0 p-8 w-full bg-white ${
        main
          ? "shadow-[0px_0px_16px_0px_rgba(37,99,235,0.3)]"
          : "shadow-md border border-gray-200"
      } `}
    >
      {main && (
        <ShineBorder
          shineColor={[
            "var(--color-primary-300)",
            "var(--color-primary-500)",
            "var(--color-primary-800)",
          ]}
          borderWidth={2}
        />
      )}
      <CardHeader className="gap-6">
        <CardDescription className="flex items-center gap-4">
          {icon}
          <h3 className="italic">{title}</h3>
        </CardDescription>
        <CardTitle className="flex items-start gap-2 py-6">
          <h4 className="font-clash-medium text-4xl font-semibold">
            {price[plan]}
          </h4>
          <span className="text-sm">€ / mes</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full flex flex-col">
        <ul className="flex flex-col gap-2 space-y-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="text-primary-500">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-8">
          {main ? (
            <ShinyButton className="bg-primary-500 w-full">
              <span className="text-white">Seleccionar</span>
            </ShinyButton>
          ) : (
            <Button variant="outline" className="w-full">
              Seleccionar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
