import Link from "next/link";
import Layout from "@/components/Layout";
import styled from "styled-components";

export default function HomePage({ props }) {
  return (
    <Layout>
      <Heading>Welcome</Heading>
    </Layout>
  );
}

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-top: 2rem;
  text-align: center;
`;

// const ButtonLink = styled.a`
//   color: rgb(244, 135, 50);
//   display: inline-block;
//   font-size: 1.9rem;
//   padding: 8px;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s;
//   background-color: transparent;
//   border-bottom: 1px solid currentColor;

//   & span {
//     margin-left: 3px;
//     transition: margin-left 0.2s;
//   }

//   &:hover {
//     color: var(--color-grey-dark-1);

//     span {
//       margin-left: 10px;
//     }
//   }

//   &:focus {
//     outline: none;
//     animation: pulsate 1s infinite;
//   }
// `;

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
//   const events = await res.json();

//   return {
//     props: { events },
//     revalidate: 1,
//   };
// }
