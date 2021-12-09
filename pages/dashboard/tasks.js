import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";
import { FaLock, FaRegCopy } from "react-icons/fa";
import {
  FormLinkBox,
  TasksCard,
  Heading,
  Modal,
  Line,
  Text,
  Button,
  LargeIcon,
  FlexWrapper,
} from "@/components/common";
import DashboardSidebar from "@/components/DashboardSIdebar";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout title="Dashboard | Tasks">
      <DashboardSidebar />
      <TasksCard>
        <section className="taskItem">
          <Heading className="h3">Follow @Troinion on Twitter</Heading>
          <Button className="primary">Follow</Button>
        </section>
        <section className="taskItem">
          <Heading className="h3">Follow @Troinion on Twitter</Heading>
          <Button className="primary">Follow</Button>
        </section>
        <section className="taskItem">
          <Heading className="h3">Follow @Troinion on Twitter</Heading>
          <Button className="primary">Follow</Button>
        </section>
        <Button className="secondary" onClick={() => setShowModal(true)}>
          Verify
        </Button>
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
