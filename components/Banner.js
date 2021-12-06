import styled from "styled-components";
import { Heading } from "./common";
import Image from "next/image";

export default function Banner({ title, text, image }) {
  return (
    <BannerContainer>
      <Heading className="h1 center">{title}</Heading>
      <Heading className="h4 u-margin-top-medium center line-height-sm">
        {text}
      </Heading>
      <BannerImages>
        <ImageWrapper>
          <Image
            src={image[0]}
            alt="first image"
            objectFit="contain"
            width={296}
            height={296}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={image[1]}
            alt="second image"
            objectFit="contain"
            width={296}
            height={296}
          />
        </ImageWrapper>
      </BannerImages>
    </BannerContainer>
  );
}

const BannerContainer = styled.aside`
  flex-basis: 45%;

  @media only screen and (max-width: 1024px) {
    max-width: 760px;
    margin-bottom: 3rem;
  }
`;

const BannerImages = styled.section`
  display: flex;
  margin-top: 4rem;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  z-index: -10;

  :last-of-type {
    margin-left: -27%;

    @media only screen and (max-width: 1200px) {
      margin-left: -20%;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 768px) {
    width: 106px;
    height: 106px;
  }
`;

Banner.defaultProps = {
  title: "Welcome!",
  text: "Whether you are an expert or a beginner. Unifarm is going to become the first platform which will faster all your needs in a simple, easy and intuotive way",
  image: ["/images/bnb-logo.png", "/images/tronion-logo-large.png"],
};
