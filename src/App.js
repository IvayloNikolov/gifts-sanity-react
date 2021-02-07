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

function App() {  
  return (
    <>
      <Router>
        <Header></Header>
          <Switch>
              <Route exact path='/' component={Index}></Route>
              <Route path='/best-gifts-for-:url_slug' component={BlogPost}></Route>
              <Route path='/blog' component={Blog}></Route>
          </Switch>
      </Router>  
    </>
  );
}

export default App;
