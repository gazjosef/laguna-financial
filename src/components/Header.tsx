import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: #333;
  padding: 1rem;
  color: #fff;

  nav a {
    margin-right: 1rem;
    color: #fff;
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </HeaderWrapper>
);
