import './App.css';
import Introduction from './components/Introduction';
import Notice from './components/Notice';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Introduction />
      <br/>
      <Notice />
      <br/>
      <Footer />
    </div>
  );
};

export default App;