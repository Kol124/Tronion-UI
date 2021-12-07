import Link from "next/link";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { FormCard } from "@/components/FormCard";
import { EmailIcon, Line, Text, FlexWrapper } from "@/components/common";

export default function VerificationPage() {
  return (
    <Layout title="Verification">
      <FlexWrapper>
        <FormCard title="Verification">
          <Text className="grey bold u-margin-bottom-small">
            Please check that you are visiting{" "}
            <Link href="/account/signup">https://tronion.org</Link>
          </Text>

          <Line />

          <Text className="u-margin-top-medium center">
            Email didn't arrive?
          </Text>
        </FormCard>
        <Banner title="Verification Mail" />
      </FlexWrapper>
    </Layout>
  );
}
