import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #222;
  padding: 1rem;
  color: #fff;
  text-align: center;
`;

export const Footer = () => (
  <FooterWrapper>
    <p>© 2024 My Website. All rights reserved.</p>
  </FooterWrapper>
);
