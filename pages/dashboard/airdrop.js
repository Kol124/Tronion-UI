import Layout from "@/components/Layout";
import { AirdropForm } from "@/components/AirdropForm";
import DashboardSidebar from "@/components/DashboardSidebar";
import {
  InputContainer,
  Input,
  Text,
  Button,
  InputEmailIcon,
} from "@/components/common";

export default function Airdrop() {
  return (
    <Layout title="Dashboard | Airdrop">
      <DashboardSidebar />
      <AirdropForm>
        <form>
          <InputContainer>
            <InputEmailIcon />
            <Input type="email" id="email" placeholder="BSC Wallet Address" />
          </InputContainer>

          <Button className="secondary" type="submit">
            Claim free 3,000 TRXN
          </Button>
        </form>
        <Text className="u-margin-top-medium grey center">
          see our milestone for use cases, as we plan to reach 1USD per Tronion
          token
        </Text>
      </AirdropForm>
    </Layout>
  );
}

// export async function getServerSideProps({ req }) {
//   const { token } = parseCookies(req);

//   const res = await fetch(`${API_URL}/airdrop/me`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const airdrop = await res.json();

//   return {
//     props: {
//       airdrop,
//       token,
//     },
//   };
// }
