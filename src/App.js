import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom'
import index from './Views/index';
import blogPost from './Views/blogPost';
import blog from './Views/blog';

function App() {  
  return (
    <>
      <Router>
          <Switch>
              <Route exact path='/' component={blog}></Route>
              <Route path='/best-gifts-for-:url_slug' component={blogPost}></Route>
              <Route path='/search' component={index}></Route>
          </Switch>
      </Router>  
    </>
  );
}

export default App;
