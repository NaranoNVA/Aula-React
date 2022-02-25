import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

function HomeTroker() {
    const [moedas, setMoedas] = React.useState(null);

    useEffect(() => {
        fetch("https://api.wazirx.com/sapi/v1/tickers/24hr")
          .then(res => 
            res.json()
          )
          .then(data => 
            setMoedas(data)
            );
    }, []);

    return (
        !moedas ?
        <div>
            <h2 className='text-white'>Carregando</h2>
        </div>
        :
        <>
        <div className='card bg-secondary my-4 p-4'>
            {
                moedas.slice(0, 20).map( (moeda, index) => 
                <div key={index} className='card my-2 bg-light'>
                    <div className='card-body'>
                        <div className='row px-2'>
                            <div className='col-4 text-center'>
                                <span className='h2'>{moeda.lastPrice}</span>
                            </div>
                            <div className='col-4 text-center'>
                                <span className='h1'>{moeda.baseAsset}</span>
                            </div>
                            <div className={moeda.lastPrice > moeda.openPrice ? 'col-4 text-center rounded bg-success' : 'col-4 text-center rounded h2 bg-danger'}>
                                <span className="h2"> {moeda.openPrice} → {( ((moeda.openPrice - moeda.lastPrice) / (moeda.openPrice / 100)) * -1).toString().replace('.', ',').slice(0,5)}%</span>
                            </div>
                        </div>
                        <div className='row mt-2 d-none'>
                          <div className='col-12'>
                            <a href="#" className='btn btn-primary w-100' target="_blank">Ver mais</a>
                          </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
        </>
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
