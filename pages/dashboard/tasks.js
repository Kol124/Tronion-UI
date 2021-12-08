import Link from "next/link";
import Layout from "@/components/Layout";
import { FaEnvelope } from "react-icons/fa";
import { FormCard } from "@/components/FormCard";
import {
  Heading,
  Line,
  Text,
  LargeIcon,
  FlexWrapper,
} from "@/components/common";

export default function Tasks() {
  return (
    <Layout title="Tasks">
      <Heading className="center">Tasks</Heading>
    </Layout>
  );
}

// export async function getServerSideProps({ req }) {
//   const { token } = parseCookies(req);

//   const res = await fetch(`${API_URL}/tasks/me`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const tasks = await res.json();

//   return {
//     props: {
//       tasks,
//       token,
//     },
//   };
// }
