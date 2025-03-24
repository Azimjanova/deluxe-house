import React, { createContext, useContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children, aboutUs, projects }) => (
    <DataContext.Provider value={{ aboutUs, projects }}>
        {children}
    </DataContext.Provider>
);
