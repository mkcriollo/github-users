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

  console.log(repos);

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

  let popular = repos.reduce((total, item) => {
    const { stargazers_count, name } = item;
    if (!name) return total;
    if (!total[name]) {
      total[name] = { label: name, value: stargazers_count };
    } else {
      total[name] = {
        ...total[name],
        value: total[name].value + stargazers_count,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages).sort((a, b) => b.value - a.value);

  popular = Object.values(popular)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  console.log(popular);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D repo={languages} />
        <Bar3D repo={popular} />
        <Doughnut2D repo={repos} />
        <Column3D repo={repos} />
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
