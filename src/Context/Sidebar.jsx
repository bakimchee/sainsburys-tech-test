import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  const value = { handleSideBar, sideBar };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
