import GlobalStyle from './styles/global'
import {BrowserRouter as Router} from 'react-router-dom'
import MyRoutes from './Routes/index'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="approute">
        <GlobalStyle/>  
        <Navbar/>
      <Router>
        <MyRoutes/> 
      </Router>   
        <Footer/>
    </div>    
  );
}

export default App;
