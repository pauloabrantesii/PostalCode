import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

import api from './services/api';

function App() {

const [input, setInput] = useState('');
const [cep, setCep] = useState({});


async function handlesearch() {
  // 58035220/json

  if(input === ''){
    alert("Preencha algum cep")
    return;
  }

  try{
    const response = await api.get(`${input}/json`);
    setCep(response.data);
    setInput("");


  }catch{
    alert("ops erro ao buscar");
    setInput("")

  }



}

  return (
    <div className="container">
    <h1>Buscador de cep</h1>

    <div className="containerInput">
      <input 
      type="text" 
      placeholder="digite seu cep"
      value={input}
      onChange={(e) => setInput(e.target.value) }
      />

      <button className="buttonSearch" onClick={handlesearch}>
        <FiSearch size={25} color="#fff"/>
      </button>

    </div>
    

{Object.keys(cep).length > 0 && (
    <main className="main">
    <h2>CEP: {cep.cep}</h2>

    <span>{cep.logradouro}</span>
    <span>complemento: {cep.complemento}</span>
    <span>{cep.bairro}</span>
    <span>{cep.localidade} - {cep.uf}</span>
     
  </main>
)}

    </div>
  );
}

export default App;
