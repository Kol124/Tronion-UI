import { useState } from "react";
import Layout from "@/components/Layout";
import { FaLock, FaRegCopy } from "react-icons/fa";
import {
  FormLinkBox,
  Heading,
  Text,
  Button,
  ListIcon,
} from "@/components/common";
import { Modal } from "@/components/Modal";
import { TasksCard } from "@/components/TasksCard";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout title="Dashboard | Tasks">
      <DashboardSidebar />

      <TasksCard>
        <section className="taskItem">
          <ListIcon />
          <Heading className="h4">Follow @Troinion on Twitter</Heading>
          <Button className="small">Follow</Button>
        </section>
        <section className="taskItem">
          <ListIcon />
          <Heading className="h4">Retweet @Troinion on Twitter</Heading>
          <Button className="small">Retweet</Button>
        </section>
        <section className="taskItem">
          <ListIcon />
          <Heading className="h4">Join @Troinion Telegram Channel</Heading>
          <Button className="small">Join</Button>
        </section>
        <section className="taskItem">
          <ListIcon />
          <Heading className="h4">Join @Troinion Telegram Chat</Heading>
          <Button className="small">Join</Button>
        </section>
        <section className="taskItem">
          <ListIcon />
          <Heading className="h4">Refer Your friends</Heading>
          <Button className="small" onClick={() => setShowModal(true)}>
            Refer
          </Button>
        </section>
        <Button className="secondary">Verify</Button>
        <Text className="u-margin-top-small center">
          You cant proceed to claim airdrop without completing the task.
        </Text>
      </TasksCard>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Heading className="h2 u-margin-bottom-medium">
          Refer to earn more
        </Heading>
        <Text className="grey center">
          Copy and share your referall link to loved ones and friends
        </Text>
        <FormLinkBox>
          <FaLock className="icon-left" />
          <Text className="grey">https://www.tronion.org/ref?=loki</Text>
          <FaRegCopy className="icon-right" />
        </FormLinkBox>
      </Modal>
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
