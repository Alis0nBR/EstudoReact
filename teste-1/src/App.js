import './App.css';
import ComponentTeste from './components/ComponentTeste';
import ListaCarros from './components/ListaCarros'
import FormsTeste from './components/FormsTeste'

function App() {
  return (
    <div className="App">
      <ComponentTeste nome="Alison"/>
      <ListaCarros/>
      <FormsTeste/>
    </div>
  );
}

export default App;