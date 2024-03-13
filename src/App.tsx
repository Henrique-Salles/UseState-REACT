import { useState } from "react";

export default function App() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [aluno, setAluno] = useState("");
  const [age, setAge] = useState("");

  function mostrarAluno() {
    setAluno(inputName);
    setAge(inputAge);
  }

  return (
    <div>
      <h1>useState</h1>

      <input
        placeholder="Digite o nome"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Digite a idade"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />

      <br />
      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr />

      <h3>Aluno: {aluno}</h3>
      <h3>Idade: {age}</h3>
    </div>
  );
}
