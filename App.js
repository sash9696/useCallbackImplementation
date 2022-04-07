import React, { useCallback, useState } from "react";
import "./App.css"
import List from "./List";

function App() {
	const [input, setInput] = useState(1)
	const [light, setLight] = useState(true)

	const getItems = useCallback(()=>{
		return [input+10, input+100]

	},[input])
	//https://www.geeksforgeeks.org/when-to-use-usecallback-usememo-and-useeffect/
	
	const theme = {
		backgroundColor: light ? 'White' : 'Grey',
		color: light ? 'grey' : 'white'
	}
	return (
		<div style={theme} className="app">
		  <input type='number' 
		  		 value={input}
				onChange={(event) => setInput(parseInt(event.target.value))}
		  />	
		  <button onClick={()=>setLight(!light)}>
				{light ? 'Dark Mode' : 'Light Mode'}
		  </button>
		  <List getItems={getItems} input={input}/>
		</div>
	);
}

export default App;
