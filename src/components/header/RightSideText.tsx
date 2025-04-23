import { TextAnimate } from "../magicui/text-animate";

export default function RightSideText() {
  return (
    <div className=" hidden md:flex flex-col font-clash-medium text-lg md:text-xl lg:text-3xl text-primary-700 tracking-wider font-medium">
      <TextAnimate
        className="flex justify-end"
        animation="slideLeft"
        by="character"
        delay={2.4}
        duration={0.6}
      >
        Automatizamos
      </TextAnimate>
      <TextAnimate
        className="flex justify-end"
        animation="slideLeft"
        by="character"
        delay={2.6}
        duration={0.6}
      >
        tu
      </TextAnimate>
      <TextAnimate
        className="flex justify-end"
        animation="slideLeft"
        by="character"
        delay={2.8}
        duration={0.6}
      >
        negocio,
      </TextAnimate>
      <TextAnimate
        className="flex justify-start"
        animation="slideLeft"
        by="character"
        delay={3}
        duration={0.6}
      >
        impulsamos
      </TextAnimate>
      <div className="flex justify-between">
        <TextAnimate
          animation="slideLeft"
          by="character"
          delay={3.2}
          duration={0.6}
        >
          tu
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          delay={3.4}
          duration={0.6}
        >
          futuro
        </TextAnimate>
      </div>
    </div>
  );
}
