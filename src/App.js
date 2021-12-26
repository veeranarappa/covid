import logo from './logo.svg';
import './App.css';
import One from './One';
import Covid from './Covid'
import Reduxcompnent from './Reduxcomponent';
import Parentcomp from './Parentcomp';
import Axiosdata from './Axiosdata';
function App() {
  return (
    <div className="App">
      <Axiosdata/>
      {/* <Parentcomp/> */}
      {/* <One></One>
      <Covid></Covid>
      <hr/>

      <Reduxcompnent/> */}
    </div>
  );
}

export default App;

// npm install -g json server
//json-server --watch db.json
