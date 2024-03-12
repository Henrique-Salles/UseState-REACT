import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  function mostrarAluno() {
    console.log(input);
  }

  return (
    <div>
      <h1>useState</h1>

      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>
    </div>
  );
}
