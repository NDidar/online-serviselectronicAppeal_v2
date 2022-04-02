import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userAppeal from "./appeal/userAppeal";
import Appeal from "./appeal/Appeal";
require('dotenv').config()

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new userAppeal(),
        appeal: new Appeal()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);