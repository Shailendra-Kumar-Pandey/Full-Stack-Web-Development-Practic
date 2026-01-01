import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'



function App() {
  return (
    <>
      <Header />
      <hr />

      <p>lorenm ipsum dolor sit amet consectetur adipisicing elit. Dolore iure quidem, commodi suscipit, perferendis, expedita provident cumque unde laboriosam maiores animi quo fuga atque nisi debitis recusandae ad quisquam itaque?</p>

      <h5>What is your Name? <span style={{color: 'darkblue'}}>Shailendra Kumar Pandey</span></h5>

      <Main />

      <hr />

      <Header />
    </>
  );
}

export default App;
