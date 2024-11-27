import styled from "styled-components";

const HeroWrapper = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

export const HeroSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <HeroWrapper>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </HeroWrapper>
);
