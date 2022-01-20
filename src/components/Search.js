import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context/context";
/*
Notes: 
- once context is finish 
- onSubmit we will call a fetch function
- on input change we will be setting the state for the query
*/
const Search = () => {
  const { setQuery, handleSubmit, query, request, error, loading } =
    useGlobalContext();

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              value={query}
              placeholder="Enter Github User"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            {request > 0 && !loading && (
              <button type="submit" onClick={handleSubmit}>
                Search
              </button>
            )}
          </div>
        </form>
        <h3>Requests: {request} / 60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-dark-grey);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      background: var(--clr-dark-grey);
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-white);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-8);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    input:focus {
      outline: none;
      border: 1px solid var(--clr-dark-grey);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-8);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
