import Link from "next/link";
import Layout from "@/components/Layout";
import { FaEnvelope } from "react-icons/fa";
import { FormCard } from "@/components/FormCard";
import { Line, Text, LargeIcon, FlexWrapper } from "@/components/common";

export default function ICO() {
  return (
    <Layout title="ICO">
      <Heading>ICO (coming soon)</Heading>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/ico/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ico = await res.json();

  return {
    props: {
      ico,
      token,
    },
  };
}
