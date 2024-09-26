import './App.css';
import {useEffect} from "react";
import { Provider } from "react-redux"
import store from "@/renderer/redux/stores"

function App() {
  useEffect(()=>{
  }, [])
  
  return (
    <Provider store={store}>
      <div className="App">
        <webview id="webview" src={"https://chatgpt.com/"} />
      </div>
    </Provider>
  );
}

export default App;
