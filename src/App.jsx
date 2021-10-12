import logo from './logo.svg';
import './App.css';
import cover from './cover.jpg';
import profile from './profile.jpg';
import Card from "./Card"


function App() {
  return (
    <div className="App">
      <img className="cover" src={cover} alt="" />
      <div class="col-12 ">


      <img className="rounded-circle image-main" alt="100x100" src={profile}
          data-holder-rendered="true"/>





      </div>
      <div class="col-12 ">
      <Card/>
      </div>

    </div>
  );
}

export default App;
