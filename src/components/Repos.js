import React from "react";
import styled from "styled-components";
import { GithubContext, useGlobalContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

/*
Notes: 
- create table templates
- using repo data fill out the charts 
- make sure they updated based on the user 
*/

const Repos = () => {
  const { repos } = useGlobalContext();

  // const { language, stargazers_count, name, watchers, forks } = repos;

  // const chartInfo = (arr, name, count) => {
  //   const data = arr.reduce((total, item) => {
  //     if (!name) return total;
  //     if (!total[name]) {
  //       total[name] = { label: name, value: count };
  //     } else {
  //       total[name] = {
  //         ...total[name],
  //         value: total[name].value + count,
  //       };
  //     }
  //     return total;
  //   }, {});

  //   console.log(data);
  // };

  // const sortData = (arr) => {
  //   return Object.values(arr)
  //     .sort((a, b) => b.value - a.value)
  //     .slice(0, 5);
  // };

  // let forkData = chartInfo(repos, name, forks);
  // let languageData = sortData(chartInfo(repos, language, 1));
  // let starData = sortData(chartInfo(repos, language, stargazers_count));
  // let popularData = sortData(chartInfo(repos, name, watchers));

  let forks = repos.reduce((total, item) => {
    const { name, forks } = item;
    if (!name) return total;
    if (!total[name]) {
      total[name] = { label: name, value: forks };
    } else {
      total[name] = {
        ...total[name],
        value: total[name].value + forks,
      };
    }
    return total;
  }, {});

  let languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  let stars = repos.reduce((total, item) => {
    const { stargazers_count, language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + stargazers_count,
      };
    }
    return total;
  }, {});

  let popular = repos.reduce((total, item) => {
    const { name, watchers } = item;
    if (!name) return total;
    if (!total[name]) {
      total[name] = { label: name, value: watchers };
    } else {
      total[name] = {
        ...total[name],
        value: total[name].value + watchers,
      };
    }
    return total;
  }, {});

  forks = Object.values(forks)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  stars = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  popular = Object.values(popular)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D repo={languages} />
        <Bar3D repo={popular} />
        <Doughnut2D repo={stars} />
        <Column3D repo={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
