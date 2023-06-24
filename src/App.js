import logo from './logo.svg';
import Header from './comp/Header';
import Contact from './pages/Contact';

function App() {
  return (
      <>
      <Header logoText="DDocs" />
      <Contact/>
      </>
  );
}
document.title = "Hello World";
export default App;
