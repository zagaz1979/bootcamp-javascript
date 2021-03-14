import './App.css';
import Mensaje from './Mensaje'



const Descripcion = () => {
  return <p> Esta es la app del curso fullstack del bootcamp </p>   
}


function App() {
 
  return (
    <div className="App">
      <Mensaje color="yellow" mensaje="Estamos trabajando" />
      <Mensaje color="blue"  mensaje="en un curso" />
      <Mensaje color="red" mensaje="de react" />
      <Descripcion />
    </div>
  );
}

export default App;
