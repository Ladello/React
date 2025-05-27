import './App.css';
import Tollbar from './Toolbar';
import Gallery from './Gallery';
import Counter from './Counter';
import Form from './Form';
import Form2 from './Form2';
import MovingDot from './MovingDot';
import Form3 from './Form3';
import List from './List';
import ShapeEditor from './ShapeEditor';
import List2 from './List2';
import CounterList from './CounterList';
import List3 from './List3';
import List4 from './List4';
import BucketList from './BucketList';

function App() {
  return (
    <div className="App">
      <div className="component-box">
        <Tollbar />
      </div>
      <div className="component-box">
        <Gallery />
      </div>
      <div className="component-box">
        <Counter />
      </div>
      <div className="component-box">
        <Form />
      </div>
      <div className="component-box">
        <Form2/>
      </div>
      <div className="component-box">
        <Form3/>
      </div>
      <div className="component-box">
        <List/>
      </div>
      <div className="component-box">
        <List2/>
      </div>
      <div className="component-box">
        <CounterList/>
      </div>
      <div className="component-box">
        <List3/>
      </div>
      <div className="component-box">
        <List4/>
      </div>
      <div className="component-box">
        <BucketList/>
      </div>
      <div className="component-box">
        <ShapeEditor/>
      </div>

      <center><h1>Moving Dot</h1></center>
        <MovingDot/>        
    </div>
  );
}

export default App;
