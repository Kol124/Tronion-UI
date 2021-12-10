import Image from "next/image";
import styled from "styled-components";
import { Heading, Button } from "./common";

export const Countdown = ({ image, time, total }) => {
  return (
    <CountdownConatiner>
      <Top>
        <ImageWrapper>
          <Image
            src={image}
            alt="balloons"
            objectFit="contain"
            width={100}
            height={100}
          />
        </ImageWrapper>
        <section>
          <Heading className="h3">Tronion ICO ends in:</Heading>
          <TimeDisplay>
            <Heading className="h2 center">
              {time.days}
              <br />
              <span>days</span>
            </Heading>
            <Heading className="h2 center">
              {time.hours}
              <br />
              <span>hours</span>
            </Heading>
            <Heading className="h2 center">
              {time.minutes}
              <br />
              <span>minutes</span>
            </Heading>
            <Heading className="h2 center">
              {time.seconds}
              <br />
              <span>seconds</span>
            </Heading>
          </TimeDisplay>
        </section>
      </Top>
      <LoadingBar>
        <Heading className="h4 right">$300K</Heading>
      </LoadingBar>
      <Heading className="h3 u-margin-top-medium">
        Total raised: {"$"}
        {total}
      </Heading>
      <Button>Buy Tronion</Button>
    </CountdownConatiner>
  );
};

const CountdownConatiner = styled.div`
  margin-left: 30%;
  max-width: 575px;
  border-radius: 20px;
  padding: 3rem 3.5rem;
  border: 1px solid ${(p) => p.theme.white};
  background: ${(p) => p.theme.backgroundAlternate};

  ${Button} {
    display: block;
    font-size: 15px;
    margin: 10px 0 0 auto;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    padding: 2.5rem 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    min-width: 480px;
  }

  @media only screen and (max-width: 480px) {
    padding: 2rem 0.5rem;

    .h2,
    .h3,
    .h4 {
      font-size: 18px;
    }
  }
`;

const Top = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;

const TimeDisplay = styled.div`
  display: flex;
  align-items: center;

  .h2 {
    line-height: 1;

    :not(:last-of-type) {
      margin-right: 10%;
    }

    span {
      font-size: 16px;
      text-transform: capitalize;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 1.5rem;

  @media only screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }
`;

const LoadingBar = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 2rem;
  position: relative;
  border-radius: 40px;
  background: ${(p) => p.theme.white};

  .h4 {
    color: #14131a;
  }

  &:after {
    position: absolute;
    content: "";
    width: 20%;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      269.97deg,
      #00ff75 -0.9%,
      rgba(0, 0, 0, 0) 366.34%
    );
  }
`;

Countdown.defaultProps = {
  image: "/images/tronion-logo.png",
  time: { days: 90, hours: 1, minutes: 18, seconds: 30 },
  total: 2811,
};
