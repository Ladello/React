import './App.css';
import Accordion from './Accordion';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Messenger from './Messenger';


function App() {
  return (
    <div className="App">
      <FormQuiz/>
      <FormTicket/>
      <Accordion/>
      <Messenger />
    </div>
  );
}

export default App;
