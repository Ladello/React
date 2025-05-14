import './App.css';
import Gallery from './Gallery';
import { Profile } from './Gallery'
import List from './List';
import PackingList from './PackingList';
import ProfileV2 from './ProfileV2';
import TeaGathering from './TeaGathering';
import TodoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <Gallery/><br></br>
      <Profile/><br></br>
      <TodoList/><br></br>
      <ProfileV2/><br></br>
      <PackingList/><br></br>
      <List/><br></br>
      <TeaGathering/>
    </div>
  );
}

export default App;
