//importing create context to create app context
import { createContext, useContext, useReducer } from "react";

//Declearing app context with create context
const AppContext = createContext();
//providing children to make it wrap to all component
const AppProvider = ({ children }) => {
  //provider to provide data to children
  // const initialState = {
  //   isloading: true,
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value="chaseIndia">{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};
// wrap the main.jsx or index.js with app provider to wrap to all componrnts
export { AppProvider, AppContext, useProductContext };
