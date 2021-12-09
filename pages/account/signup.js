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
  InputUserIcon,
  FormLinkBox,
  Input,
  Line,
  Text,
  Button,
  FlexWrapper,
  InputContainer,
} from "@/components/common";

export default function SignupPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ username, email, password });
  };

  return (
    <Layout title="Sign Up">
      <FlexWrapper>
        <ToastContainer />
        <FormCard title="Sign up">
          <Text className="grey bold u-margin-bottom-small">
            You've been referred by ultron
          </Text>

          <FormLinkBox>
            <FaLock className="icon-left" />
            <Text className="grey">https://www.tronion.org/?ref=ultron</Text>
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
              <InputUserIcon />
              <Input
                type="text"
                id="user"
                value={userName}
                placeholder="User"
                onChange={(e) => setUserName(e.target.value)}
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
              Sign up
            </Button>
          </form>

          <Text className="u-margin-top-medium center">
            Already on tronion? <Link href="/account/login">LOGIN</Link>
          </Text>
        </FormCard>
        <Banner title="Claim Airdrop!" />
      </FlexWrapper>
    </Layout>
  );
}
