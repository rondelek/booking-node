import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  outline: 2px solid var(--yellow);
  border-radius: 1rem;
  margin: 2rem;

  h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--yellow);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    font-weight: 300;
    font-size: 1.25rem;
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }
`;

export default Wrapper;
