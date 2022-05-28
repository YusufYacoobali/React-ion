//import logo from './logo.svg';
import './App.css';

//component is a func

function Header(props){
  return (
    <header>
      <h1>The {props.name} Group</h1>
    </header>
  )
}

function Main(){
  return (
    <section>
      <p>We are the ultimate bloodline of warriors</p>
    </section>
  )
}

function Footer(){
  return (
    <footer>
      <p>We are awake and dangerous</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Yacoobali"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
