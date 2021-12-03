import Link from "next/link";
import { API_URL } from "@/config/index";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import styled from "styled-components";

export default function EventPage({ post }) {
  // const imgStyle = {
  //   backgroundImage: "url(" + post.image.formats.medium.url + ")",
  //   backgroundPosition: "center center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundColor: "#000",
  // };

  return (
    <Layout title={post.name}>
      <Container>
        {post.image && (
          <ImageContainer style={imgStyle}>
            <h1>{post.name}</h1>
            <span>
              {new Date(post.date).toLocaleDateString("en-US")} at {post.time}
            </span>
          </ImageContainer>
        )}

        <h3>Performers:</h3>
        <p>{post.performers}</p>
        <h3>Description:</h3>
        <p>{post.description}</p>
        <h3>Venue: {post.venue}</h3>
        <p>{post.address}</p>

        <Link href="/events">
          <ButtonLink>
            <span> &larr;</span> Go Back
          </ButtonLink>
        </Link>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  margin-bottom: 1rem;
  background-color: #f6f6f6;
  box-shadow: 0.5rem 1rem 1.3rem rgba(220, 220, 220, 0.3);

  h3,
  p {
    margin-left: 1rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.6rem;
  }
`;

const ImageContainer = styled.section`
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  height: 50vh;
  color: #fff;
  display: flex;
  max-width: 113rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;

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
    font-family: "Shadows Into Light", sans-serif;
    margin-bottom: 0;
    font-size: 7rem;

    @media only screen and (max-width: 768px) {
      font-size: 5rem;
    }
  }

  span {
    font-size: 2rem;
  }
`;

const ButtonLink = styled.a`
  transition: all 0.2s;
  font-size: 1.6rem;
  padding: 8px;
  border: none;
  color: #000;
  outline: none;
  cursor: pointer;
  margin-bottom: 1rem;
  display: inline-block;

  & span {
    margin-right: 3px;
    transition: margin-right 0.2s;
  }

  &:hover {
    color: rgb(244, 135, 50);

    span {
      margin-right: 10px;
    }
  }

  &:focus {
    outline: none;
  }
`;

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`);
//   const events = await res.json();

//   return {
//     props: {
//       post: events[0],
//     },
//   };
// }
