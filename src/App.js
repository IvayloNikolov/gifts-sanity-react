import './styles/App.css';
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'
import Index from './Views/index';
import BlogPost from './Views/BlogPost'

function App() {  
  return (
    <div>
      <Router>
        <Header></Header>
          <Switch>
              <Route exact path='/' component={Index}></Route>
              <Route path='/best-gift-for-:url_slug' component={BlogPost}></Route>
          </Switch>
      </Router>  
    </div>
  );
}

export default App;
