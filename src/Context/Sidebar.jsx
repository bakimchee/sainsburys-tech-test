import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  const value = { handleSideBar, sideBar };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
