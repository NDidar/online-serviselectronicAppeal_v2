import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userAppeal from "./appeal/userAppeal";
import Appeal from "./appeal/Appeal";


export const Context = createContext(null)


ReactDOM.render(
    <Context.Provider value={{
        user: new userAppeal(),
        appeal: new Appeal()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);