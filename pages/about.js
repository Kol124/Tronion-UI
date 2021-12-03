import Layout from "@/components/Layout";
import styled from "styled-components";

export default function AboutPage() {
  return (
    <Layout title="About">
      <About>
        <h1>About</h1>
        <p>This is a Nextjs App.</p>
      </About>
    </Layout>
  );
}

const About = styled.div`
  text-align: center;
  margin: 100px 0;

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 1.7rem;
  }
`;
