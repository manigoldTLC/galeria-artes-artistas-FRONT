import GlobalStyle from './styles/global'
import {BrowserRouter as Router} from 'react-router-dom'
import MyRoutes from './Routes/index'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import UserProvider from './components/contexts/useUserContext'

function App() {
  return (
    <div className="approute">
      <UserProvider>
        <GlobalStyle/>
          <Navbar/>
          <Router>
            <MyRoutes/> 
          </Router>   
          <Footer/>
      </UserProvider>
    </div>    
  );
}

export default App;
