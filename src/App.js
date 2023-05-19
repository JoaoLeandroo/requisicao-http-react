import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [nutri, setNutri] = useState([])

  useEffect(() => {

      function loadApi() {
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

        fetch(url)
        .then((resultado) => resultado.json())
        .then((json) => {
          setNutri(json)
        })
      }
      
      loadApi()

  }, [])

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className='post'>

            <strong className='titulo'>{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className='img'></img>
            <p className='subtitulo'>{item.subtitulo}</p>

            <h3 className='categoria'>Categoria: {item.categoria}</h3>
          </article>
        )
      })}

    </div>
  );
}

export default App;
