import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Footer({ image }) {
  const router = useRouter();

  return (
    <Foot>
      {router.pathname !== "/" && (
        <FooterImages>
          <FooterImageWrapper>
            <Image
              src={image[0]}
              alt="first image"
              objectFit="contain"
              width={108}
              height={108}
            />
          </FooterImageWrapper>
          <FooterImageWrapper>
            <Image
              src={image[1]}
              alt="second image"
              objectFit="contain"
              width={108}
              height={108}
            />
          </FooterImageWrapper>
        </FooterImages>
      )}
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

  @media only screen and (max-width: 1024px) {
    margin-top: 3rem;
  }

  p {
    font-size: 9px;
    margin-top: 10px;
  }
`;

const FooterImages = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const FooterImageWrapper = styled.div`
  z-index: -10;

  :last-of-type {
    margin-left: -50px;
  }
`;

const ImageWrapper = styled.div`
  height: 50px;
  width: 86px;
  margin-right: 7%;
  margin-left: auto;
`;

Footer.defaultProps = {
  image: ["/images/bnb-logo.png", "/images/tronion-logo-large.png"],
};
