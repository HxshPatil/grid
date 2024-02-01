import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Content1 from './components/content/content1';
import Content2 from './components/content/content2';
import Content3 from './components/content/content3';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Content1/>
      <Content2/>
      <Content3/>
      <Footer/>
    </div>
  );
}

export default App;
