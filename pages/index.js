import Link from "next/link";
import { Heading } from "@/components/common";
import Layout from "@/components/Layout";
import styled from "styled-components";

export default function HomePage({ props }) {
  return (
    <Layout>
      <Heading className="h1 center">Welcome</Heading>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
//   const events = await res.json();

//   return {
//     props: { events },
//     revalidate: 1,
//   };
// }
