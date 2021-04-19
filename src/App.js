
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login'
import {useSelector} from 'react-redux'

const user = 12 

function App() {

  const user = useSelector(state => state.all.user)

  return (
    <div className="app">

    {!user ? <Login/> : 
    <>
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>    
    </>
    }
    </div>
  );
}

export default App;
