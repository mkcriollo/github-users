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
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      const data = res.data;
      if (data) {
        setUser(data);
        setLoading(false);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${rootUrl}/users/${query}`;
    fetchData(url);
  };

  return (
    <AppContext.Provider
      value={{ query, setQuery, user, followers, repos, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, GithubProvider };
