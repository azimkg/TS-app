import React, { createContext } from "react";
import axios from "axios";

type ContextType = {};
type ContextProviderType = {
  children: React.ReactNode;
};

export const Context = createContext(null);

const INIT_STATE = {
  skills: [],
};

const ContextProvider = ({ children }: ContextProviderType) => {
  return <Context.Provider value={}>{children}</Context.Provider>;
};
export default ContextProvider;
