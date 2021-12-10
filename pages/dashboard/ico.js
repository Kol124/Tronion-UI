import Layout from "@/components/Layout";
import { Countdown } from "@/components/Countdown";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function ICO() {
  return (
    <Layout title="Dashboard | ICO">
      <DashboardSidebar />
      <Countdown />
    </Layout>
  );
}

// export async function getServerSideProps({ req }) {
//   const { token } = parseCookies(req);

//   const res = await fetch(`${API_URL}/ico/me`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const ico = await res.json();

//   return {
//     props: {
//       ico,
//       token,
//     },
//   };
// }
