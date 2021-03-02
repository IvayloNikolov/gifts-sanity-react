import './styles/App.css';
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'
import Index from './Views/Index';
import BlogPost from './Views/BlogPost';
import Blog from './Views/Blog';
import Helmet from 'react-helmet';

function App() {  
  return (
    <>
      <Router>
          <Switch>
              <Route exact path='/' component={Blog}></Route>
              <Route path='/best-gifts-for-:url_slug' component={BlogPost}></Route>
              <Route path='/search' component={Index}></Route>
          </Switch>
      </Router>  
    </>
  );
}

export default App;
