import Link from "next/link";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { FaRegEnvelope } from "react-icons/fa";
import { FormCard } from "@/components/FormCard";
import { Line, Text, LargeIcon, FlexWrapper } from "@/components/common";

export default function VerificationPage() {
  return (
    <Layout title="Verification">
      <FlexWrapper>
        <FormCard title="Verification">
          <Text className="grey bold u-margin-bottom-small">
            We sent a verification email to{" "}
            <Link href="/">ultron@gmail.com</Link>
            <br />
            Click the link inside to get started!
          </Text>

          <Line />

          <LargeIcon>
            <FaRegEnvelope size={48} />
          </LargeIcon>

          <Text className="u-margin-top-medium center">
            Email didn't arrive?
          </Text>
        </FormCard>
        <Banner title="Verification Mail" />
      </FlexWrapper>
    </Layout>
  );
}
