import { useState } from "react";

export default function DynamicFormCreation() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);
  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);
  };
  return (
    <div>
      <div>
        {inputs.map((input) => (
          <div key={input.id}>
            <input type="text" label={input.label} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
