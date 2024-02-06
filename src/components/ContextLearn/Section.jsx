import { useContext } from "react";
import { LevelContext } from "../../context/LevelContext";
import "./Section.css";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
