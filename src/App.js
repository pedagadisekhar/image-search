import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from "react";


function App() {
  
  const [image,setImage] = useState([]);
  const [search,setSearch]=useState("")
  const Submithandler = (e)=>{
    e.preventDefault()
    axios.get(`https://api.unsplash.com/search/photos/?query=${search}&client_id=IrCRLEPT_UqNF5US2BHi3voGAc190dPJyQ837vHYCrc`)
    .then(response=>{setImage(response.data.results);console.log(response.data)})
     
    .catch(err=>console.log(err))
  
 
  

  

  }


  return (
    <>
    <div className='header'>
    <button className='bookmark'>Bookmark</button>   <h1>React photo search app</h1>
      <input type="text" placeholder='search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button onClick={Submithandler}>search</button>
    <div className="App">
    
      </div>
      {
        image.map((item)=>{
          return(
            <>
            <div className='gallery'>
              <div>
            <img src={item.urls.small} alt="img"/>
            </div>
            </div>
            </>
          )
        })
      }
    </div>
    </>
  );
}

export default App;
