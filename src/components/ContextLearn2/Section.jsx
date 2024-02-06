import { useContext } from "react";
import { LevelContext2 } from "../../context/LavelContext2";
import "./ContextLearn2.css";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext2);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext2.Provider value={level + 1}>
        {children}
      </LevelContext2.Provider>
    </section>
  );
}
