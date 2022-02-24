import './App.css';
import Noticias from './components/Noticias';

function App() {
  return (
    <div>
      <header className='menu'>
        <div className='d-flex justify-content-between align-items-center container'>
          <a href='#' className='text-dark'>Assine</a>
          <h1><a href='#' className='text-dark'>So Noticias</a></h1>
          <a href='#' className='text-dark'>Login</a>
        </div>
      </header>
      <main className='container'> 
        <Noticias></Noticias>
      </main>
    </div>
  );
}

export default App;
