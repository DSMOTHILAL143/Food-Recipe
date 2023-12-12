import React,{useState} from "react"
import './App.css';
import Products from "./Products";
function App() {
  const [Search,setSearch]=useState("")
  const [data,setData]=useState([])
  const your_app_id="c6d0a562";
  const your_app_key="3e3c9fb44ba7b94fc3d20fdf6b0e8d49";
  const submitHandler=(e)=>{
    e.preventDefault();
    const data=fetch(`https://api.edamam.com/search?q=${Search}&app_id=${your_app_id}&app_key=${your_app_key}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response=>response.json()
    ).then(
     data=> setData(data.hits)
     
    )
    setSearch("")
  }
  return (
   <div>
        <center>
            <h4>Food Recipe App</h4>
            <form onSubmit={submitHandler}>
              <input type="text"className="input-style" value={Search} onChange={(e)=>setSearch(e.target.value)}/> <br/>
              <input type="submit" value="Search" className="btn btn-primary mb-3" />
              {data.length>=1? <Products data={data}/>:null}
            </form>
        </center>
   </div>
  );
}

export default App;
