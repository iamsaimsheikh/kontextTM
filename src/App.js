import Home from './screens/Home';
import Bookdetail from './screens/Bookdetail';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
    
      <ThemeContextProvider>
      <AuthContextProvider>
      <BookContextProvider>
      
          <Route path="/" component={Home} exact/>
          <Route path="/bookdetail/:id" exact component={Bookdetail} />
       
      </BookContextProvider>
      </AuthContextProvider>
      </ThemeContextProvider>
      
    </div>
    </Switch>
    </Router>
  );
}

export default App;
