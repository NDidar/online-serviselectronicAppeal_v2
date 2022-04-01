import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userAppeal from "./appeal/userAppeal";
require('dotenv').config()

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new userAppeal()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);