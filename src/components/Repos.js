import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

/*
Notes: 
- create table templates
- using repo data fill out the charts 
- make sure they updated based on the user 
*/

const Repos = () => {
  const { repos } = useGlobalContext();

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

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
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
  const mostLang = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  const stars = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);
  popular = Object.values(popular)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // Prev work (create another reduce function for stars => didn't use because it will use more memory used)

  // let stars = repos.reduce((total, item) => {
  //   const { stargazers_count, language } = item;
  //   if (!language) return total;
  //   if (!total[language]) {
  //     total[language] = { label: language, value: stargazers_count };
  //   } else {
  //     total[language] = {
  //       ...total[language],
  //       value: total[language].value + stargazers_count,
  //     };
  //   }
  //   return total;
  // }, {});

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D repo={mostLang} />
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
