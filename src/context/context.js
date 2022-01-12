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
  const [request, setRequest] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    const res = await axios(`${rootUrl}/users/${query}`);
    if (res) {
      setUser(res.data);
      const { repos_url, followers_url } = res.data;
      Promise.allSettled([
        axios(`${followers_url}?per_page=100`),
        axios(`${repos_url}?per_page=100`),
      ])
        .then((res) => {
          const followers = res[0].value.data;
          const repos = res[1].value.data;
          setFollowers(followers);
          setRepos(repos);
        })
        .catch((err) => console.log(err));
    } else {
    }
    setLoading(false);
  };

  const calculateRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        const {
          rate: { limit, remaining },
        } = data;
        setRequest(remaining);
        if (remaining === 0) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    calculateRequest();
  }, []);

  return (
    <AppContext.Provider
      value={{ query, setQuery, user, followers, repos, handleSubmit, request }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, GithubProvider };
