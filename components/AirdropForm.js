import Image from "next/image";
import styled from "styled-components";
import { Heading, Line } from "@/components/common";

export const AirdropForm = ({ image, children }) => {
  return (
    <AirdropContainer>
      <FormHeader>
        <ImageWrapper>
          <Image
            src={image}
            alt="balloons"
            objectFit="contain"
            width={102}
            height={100}
          />
        </ImageWrapper>
        <HeaderText className="u-margin-top-medium">
          <Image
            src="/images/tronion-logo.png"
            alt="Tronion Logo"
            width={24}
            height={24}
          />
          <Heading className="h4">
            TRXN ~<span> BSC (BEP20)</span>
          </Heading>
        </HeaderText>
      </FormHeader>
      <Line />
      {children}
    </AirdropContainer>
  );
};

export const AirdropContainer = styled.div`
  margin-left: 30%;
  max-width: 540px;
  border-radius: 20px;
  padding: 3rem 3.5rem;
  border: ${(p) => p.theme.border};
  background: ${(p) => p.theme.backgroundPrimary};

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    padding: 2.5rem 2.5rem 3rem;
  }

  @media only screen and (min-width: 768px) {
    min-width: 480px;
  }
`;

const FormHeader = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 115px;

  @media only screen and (max-width: 480px) {
    width: 72px;
    height: 68px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;

  .h4 {
    text-transform: uppercase;

    span {
      color: #896f30;
    }
  }
`;

AirdropForm.defaultProps = {
  image: "/images/balloons.png",
};
