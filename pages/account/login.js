import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import { FormCard } from "@/components/FormCard";
import {
  PasswordIcon,
  FormLinkBox,
  EmailIcon,
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
    <Layout title="User Login">
      <FlexWrapper>
        <ToastContainer />
        <FormCard>
          <Text className="grey bold u-margin-bottom-small">
            Please check that you are visiting{" "}
            <Link href="/account/signup">https://tronion.org</Link>
          </Text>

          <FormLinkBox>
            <FaLock className="icon" />
            <Text className="grey">https://www.tronion.org</Text>
          </FormLinkBox>

          <Line />

          <form onSubmit={handleSubmit}>
            <InputContainer>
              <EmailIcon />
              <Input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <PasswordIcon />
              <Input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <Button className="form" type="submit">
              Login
            </Button>
          </form>

          <Text className="u-margin-top-medium center">
            Don't have an account? <Link href="/account/signup">Sign Up</Link>
          </Text>
        </FormCard>
        <Banner title="Welcome Back!" />
      </FlexWrapper>
    </Layout>
  );
}
