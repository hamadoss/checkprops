import './App.css';
import Profile from './components/Profile';
import profilepic from "./Images/profilepic.png"

function App() {
  const alertMyInput = name => alert(name);
  return (
    <div className="App">
     <Profile fullName="Mohamed Alibi" Bio="Full Time Developer" Profession="Developer" alert={alertMyInput}>
      <h2>My Profile Picture</h2>
      <img src= {profilepic} alt=''/>
     </Profile>
    </div>
  );
}

export default App;
