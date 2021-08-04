import GlobalStyle from './styles/global'
import {BrowserRouter as Router} from 'react-router-dom'
import MyRoutes from './Routes/index'
import {Navbar} from "./components/Navbar"
function App() {
  return (
      <Router>
        <GlobalStyle/>  
        <Navbar/>
        <MyRoutes/> 
      </Router>   
  );
}

export default App;
