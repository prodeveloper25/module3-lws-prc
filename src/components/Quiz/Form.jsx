import { useState } from "react";
function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };
  if (status === "success") return <h1>That`s right!</h1>;
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
          style={{ fontSize: "16px" }}
          cols="30"
          rows="3"
        ></textarea>
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          className={
            answer.length === 0 || status === "submitting"
              ? "disableBtn"
              : "visibleBtn"
          }
        >
          Sumbit
        </button>
        {status === "submitting" && <h3>Loading...</h3>}
        {error !== null && <h3 style={{ color: "red" }}>{error}</h3>}
      </form>
    </>
  );
}
