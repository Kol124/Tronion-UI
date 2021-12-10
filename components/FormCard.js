import styled from "styled-components";
import { Heading } from "./common";
import Image from "next/image";

export const FormCard = ({ title, image, children }) => {
  return (
    <FormBackground>
      <FormHeader>
        <Heading className="h2">{title}</Heading>
        <ImageWrapper>
          <Image
            src={image}
            alt="balloons"
            objectFit="contain"
            width={62}
            height={57}
          />
        </ImageWrapper>
      </FormHeader>
      {children}
    </FormBackground>
  );
};

const FormBackground = styled.div`
  margin-right: auto;
  border-radius: 20px;
  padding: 3rem 3.5rem;
  border: ${(p) => p.theme.border};
  background: ${(p) => p.theme.backgroundPrimary};

  @media only screen and (max-width: 1024px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 2.5rem 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    min-width: 480px;
  }
`;

const FormHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ImageWrapper = styled.div`
  width: 62px;
  height: 57px;
`;

FormCard.defaultProps = {
  title: "Log in",
  image: "/images/balloons.png",
};
