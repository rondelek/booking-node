import styled from "styled-components";
import blob from "../images/blob.svg";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;

  background-position: 60% 70%;
  background-repeat: no-repeat;
  background-size: 220%;

  padding: 1rem 3.5rem;

  @media screen and (max-width: 1102px) {
    grid-template-columns: 1fr;

    text-align: center;
    justify-items: center;

    gap: 2rem;

    .buttons {
      justify-content: center;
    }

    .girlblob {
      max-width: 750px;
    }
  }

  /* position: relative;
  display: flex;
  text-align: left;
  background-color: var(--yellow);
  overflow: hidden;
  padding: 4rem 0rem;

  h1 {
    font-family: "Poppins";
    font-size: 3rem;
    font-weight: 500;
    line-height: 4rem;
    margin: 2px;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.5rem;
    margin: 30px 0;
  }

  @media screen and (max-width: 888px) {
    flex-direction: column;
    padding: 2rem 0rem;
  }

  @media screen and (min-width: 889px) {
    padding: 2.8rem 0rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1173px) {
    padding: 4rem 0rem 2rem 0rem;
  }

  @media screen and (max-width: 1363px) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 2.1rem;
    }
  }

  @media screen and (min-width: 1230px) {
    padding: 4rem 0rem 5rem 0rem;
  } */
`;

export default Wrapper;
