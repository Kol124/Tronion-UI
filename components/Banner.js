import styled from "styled-components";

export default function Banner({ title }) {
  return (
    <HeaderImage>
      <h1>{title}</h1>
    </HeaderImage>
  );
}

const HeaderImage = styled.div`
  text-align: center;
  position: relative;
  height: 45vh;
  color: #fff;
  display: flex;
  max-width: 113rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #000 url("/images/event.jpg") no-repeat center center;

  @media only screen and (max-width: 768px) {
    height: 30vh;
  }

  & * {
    z-index: 20;
  }

  &::after {
    position: absolute;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  h1 {
    margin-bottom: 0;

    @media only screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

Banner.defaultProps = {
  title: "Upcoming Events",
};
