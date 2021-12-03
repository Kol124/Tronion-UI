import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import Layout from "@/components/Layout";
import DashboardItem from "@/components/DashboardItem";

export default function DashboardPage({ events, token }) {
  const router = useRouter();

  const deleteEvent = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  return (
    <Layout title="User Dashboard">
      <DashBoardDetails>
        <h1>
          <FaUser /> Dashboard
        </h1>
        <h3>My Events</h3>

        {events.map((evt) => (
          <DashboardItem key={evt.id} evt={evt} handleDelete={deleteEvent} />
        ))}
      </DashBoardDetails>
    </Layout>
  );
}

const DashBoardDetails = styled.main`
  margin: 2rem 0;
  background-color: #f6f6f6;
  padding: 3rem 3rem 2.5rem 3rem;
  box-shadow: 0.5rem 1rem 1.3rem rgba(220, 220, 220, 0.4);

  h1 {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2rem;
  }
`;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
      token,
    },
  };
}
