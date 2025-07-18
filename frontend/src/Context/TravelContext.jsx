import { createContext, useContext } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// Create context
export const TravelContext = createContext();

// Create provider component
export const TravelContextProvider = ({ children }) => {
  const currency = "$";
  const navigate = useNavigate();
 
 
 const handleSpecial = () => {
    navigate("./");
    const scroll = document.getElementById("special-selection");
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <TravelContext.Provider value={{ currency ,handleSpecial , navigate}}>
      {children}
    </TravelContext.Provider>
  );
};

// Optional: custom hook for easier usage
export const useTravelContext = () => useContext(TravelContext);
