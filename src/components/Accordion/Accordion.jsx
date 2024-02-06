import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan1`s largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        `apple` and is often translated as `full of apples`. In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
      <Panel
        title="Free Course"
        isActive={activeIndex === 2 && true}
        onActive={() => setActiveIndex(2)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        blanditiis magni exercitationem, quidem reiciendis fugit! Expedita
        omnis, officia minima veniam dolor quibusdam nemo atque voluptatum magni
        cum voluptas accusantium fuga?
      </Panel>
    </>
  );
}
