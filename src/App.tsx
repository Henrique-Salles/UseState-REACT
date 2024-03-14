import { useState } from "react";

interface InfoProps {
  name: string;
  age: string;
}

export default function App() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const [info, setInfo] = useState<InfoProps>();

  function mostrarAluno() {
    setInfo({
      name: inputName,
      age: inputAge,
    });
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

      <h3>Aluno: {info?.name}</h3>
      <h3>Idade: {info?.age}</h3>
    </div>
  );
}
