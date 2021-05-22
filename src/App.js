import logo from './logo.svg';
import './App.css';
import Todousingstate from './components/Todousingstate';
import Todousingredux from './components/Todousingredux';
import Todousinglocalstorage from './components/Todousinglocalstorage';
// import Hello from './components/Hello';



function App() {

  return (
    <div className="App">
  {/* <Todousingstate></Todousingstate> */}
  <Todousingredux></Todousingredux>
  {/* <Todousinglocalstorage></Todousinglocalstorage> */}
  

    </div>
  );
}

export default App;
