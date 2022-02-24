import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

function Inicio(props) {
    //function retornaAnoMaisUm(){
    //    return props.ano + 1;
    //}

    function handleClickAno(){
        alert(props.ano);
    }

    const hello = (
                //<React.Fragment>
                <>
                    <h1 onClick={handleClickAno}>Olá Mundo em {props.ano}!</h1>
                    <p>{ props.estaLogado? 'Você está logado!' : 'Você não está logado!' }</p>
                </>);
                //</React.Fragment>;
    return hello;
}

function Alunos(){

    const alunos = ['1', '2', '3', '4'];

    const listAlunos = alunos.map( (aluno, index) => <li key={index}>{aluno}</li>);
    return (
        <ul>
            {listAlunos}
        </ul>
    );
}

function HomeTroker() {
    const moedas = [{
            nome: "Dolar Americano",
            valor: 5.17,
            variacao: 0.76
        },
        {
            nome: "Euro",
            valor: 5.87,
            variacao: -1.48
        },
        {
            nome: "Peso Argentino",
            valor: 0.04,
            variacao: -0.62
        },
        {
            nome: "Dolar Canadense",
            valor: 4.07,
            variacao: 2.66
        }
    ];

    function retornaMoedaTexto (moeda) {
        return moeda.toString().replace('.', ',');
    }

    const listamoedas = moedas.map( (moeda, index) => 
        <div key={index} className='card my-2'>
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
            </div>
        </div>
    );

    return (
        <div className='card my-4 p-4'>
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
   /* return (
    <Layout>
        <Inicio ano={2022} estaLogado={true}/>
        <Alunos />
    </Layout>
    );*/
    return (
        <Layout>
            <HomeTroker></HomeTroker>
        </Layout>
    );
}

ReactDOM.render(<App/>, root);