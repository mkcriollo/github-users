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
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchData = async () => {
    toggleError();
    setLoading(true);
    const res = await axios(`${rootUrl}/users/${query}`).catch((err) => err);
    if (res) {
      setUser(res.data);
      const { repos_url, followers_url } = res.data;
      Promise.allSettled([
        axios(`${followers_url}?per_page=100`),
        axios(`${repos_url}?per_page=100`),
      ])
        .then((res) => {
          const [followers, repos] = res;

          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => err);
    } else {
      toggleError(true, "There is no User with that Username");
    }
    calculateRequest();
    setLoading(false);
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  const calculateRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        const {
          rate: { limit, remaining },
        } = data;
        setRequest(remaining);
        if (remaining === 0) {
          toggleError(true, "You have reach your hourly request");
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
      value={{
        query,
        setQuery,
        user,
        followers,
        repos,
        handleSubmit,
        request,
        error,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, GithubProvider };
