import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <ImageWrapper>
        <Image
          src="/images/footer-rectangle.png"
          alt="Footer Rectangle"
          objectFit="contain"
          width={86}
          height={50}
        />
      </ImageWrapper>
      <p>
        See our milestone for use cases, as we plan to reach 1USD per Tronion
        token
      </p>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  color: ${(p) => p.theme.fontSecondary};

  p {
    font-size: 9px;
    margin-top: 10px;
  }

  img {
    display: block !important;
    margin-left: auto;
    border: 2px solid;
  }
`;

const ImageWrapper = styled.div`
  height: 50px;
  width: 86px;
  margin-left: auto;
`;
