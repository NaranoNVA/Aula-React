import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

function HomeTroker() {
  const moedas = [{
          nome: "Dolar Americano",
          valor: 5.17,
          variacao: 0.76,
          link: 'https://www.remessaonline.com.br/cotacao/cotacao-dolar'
      },
      {
          nome: "Euro",
          valor: 5.87,
          variacao: -1.48,
          link: 'https://www.remessaonline.com.br/cotacao/cotacao-euro'
      },
      {
          nome: "Peso Argentino",
          valor: 0.04,
          variacao: -0.62,
          link: 'https://www.remessaonline.com.br/cotacao/cotacao-peso-argentino'
      },
      {
          nome: "Dolar Canadense",
          valor: 4.07,
          variacao: 2.66,
          link: 'https://www.remessaonline.com.br/cotacao/cotacao-dolar-canadense'
      }
  ];

  function retornaMoedaTexto (moeda) {
      return moeda.toString().replace('.', ',');
  }

  const listamoedas = moedas.map( (moeda, index) => 
      <div key={index} className='card my-2 bg-light'>
          <div className='card-body'>
              <div className='row px-2'>
                  <div className='col-4 text-center'>
                      <span className='h2'>R$ {retornaMoedaTexto(moeda.valor)}</span>
                  </div>
                  <div className='col-4 text-center'>
                      <span className='h1'>{moeda.nome}</span>
                  </div>
                  <div className='col-4 text-center rounded' style={{background: moeda.variacao > 0 ? 'green' : 'red'}}>
                      <span className='h2'> {moeda.variacao > 0 ? '+' : ''}{moeda.variacao}%</span>
                  </div>
              </div>
              <div className='row mt-2'>
                <div className='col-12'>
                  <a href={moeda.link} className='btn btn-primary w-100' target="_blank">Ver mais</a>
                </div>
              </div>
          </div>
      </div>
  );

  return (
      <div className='card bg-secondary my-4 p-4'>
          {listamoedas}
      </div>
  );
}


function Layout(props) {
  return (
      <div className='container'>{props.children}</div>
      );
}

function App(){
  return (
      <Layout>
          <HomeTroker></HomeTroker>
      </Layout>
  );
}

ReactDOM.render(<App/>, root);
