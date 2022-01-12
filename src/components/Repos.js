import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

/*
Notes: 
- create table templates
- using repo data fill out the charts 
- make sure they updated based on the user 
*/

const Repos = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <div>
          <span className="fusioncharts-container">
            <Pie3D />
          </span>
        </div>
        <div>
          <span className="fusioncharts-container">
            <Bar3D />
          </span>
        </div>
        <div>
          <span className="fusioncharts-container">
            <Doughnut2D />
          </span>
        </div>
        <div>
          <span className="fusioncharts-container">
            <Column3D />
          </span>
        </div>
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
