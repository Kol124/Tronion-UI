import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaLock, FaRegCopy } from "react-icons/fa";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import { FormCard } from "@/components/FormCard";
import {
  InputPasswordIcon,
  InputEmailIcon,
  FormLinkBox,
  Input,
  Line,
  Text,
  Button,
  FlexWrapper,
  InputContainer,
} from "@/components/common";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title="Login">
      <FlexWrapper>
        <ToastContainer />
        <FormCard title="Login">
          <Text className="grey bold u-margin-bottom-small">
            Please check that you are visiting{" "}
            <Link href="/account/signup">https://tronion.org</Link>
          </Text>

          <FormLinkBox>
            <FaLock className="icon-left" />
            <Text className="grey">https://www.tronion.org</Text>
            <FaRegCopy className="icon-right" />
          </FormLinkBox>

          <Line />

          <form onSubmit={handleSubmit}>
            <InputContainer>
              <InputEmailIcon />
              <Input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <InputPasswordIcon />
              <Input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <Button className="secondary" type="submit">
              Login
            </Button>
          </form>

          <Text className="u-margin-top-medium center">
            Not on tronion yet? <Link href="/account/signup">SIGN UP</Link>
          </Text>
        </FormCard>
        <Banner title="Welcome Back!" />
      </FlexWrapper>
    </Layout>
  );
}
