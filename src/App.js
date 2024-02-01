import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Content1 from './components/content/content1';
import Content2 from './components/content/content2';
import Content3 from './components/content/content3';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Content1/>
      <Content2/>
      <Content3/>
      <Footer/>
    </div>
  );
}

export default App;
