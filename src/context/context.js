import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
import App from "../App";

const rootUrl = "https://api.github.com";

const AppContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);

  return (
    <AppContext.Provider value={{ query, setQuery, user, followers, repos }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, GithubProvider };
