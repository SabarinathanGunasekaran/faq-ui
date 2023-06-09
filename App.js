import './App.css';
import BreadCrum from './components/BreadCrum';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import  Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <BreadCrum />

      <div className='MainHead'>

        <div className='SidebarStyle'>
          <Sidebar />

        </div>

        <div className='MainContent'>
          <Searchbar/>
        </div>

      </div>
    </div>
  );
}

export default App;

