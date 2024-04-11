import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SpaceJellyLoginCodeEmailProps {
  validationCode?: string;
}

export const SpaceJellyLoginCodeEmail = ({
  validationCode,
}: SpaceJellyLoginCodeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Z Monting Plus d.o.o, imate vedno močnega in zanesljivega partnerja na vaši strani!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={'https://monting-plus.vercel.app/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F231440%2F50x50%2F64faa1f0da%2Flogo.png&w=48&q=75'}
          width="50"
          height="50"
          alt="Monting Plus"
          style={logo}
        />
        <Text style={paragraph}>Hi {validationCode},</Text>
        <Text style={paragraph}>
          Vaše sporočilo je bilo sprejeto, kmalu vas bomo kontaktirali.
        </Text>
        <Text style={paragraph}>
          Lep pozdrav,
          <br />
          Monting Plus
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Kraigherjeva ulica 19b, 2230 Lenart
        </Text>
      </Container>
    </Body>
  </Html>
);

SpaceJellyLoginCodeEmail.PreviewProps = {
  validationCode: "tt226-5398x",
} as SpaceJellyLoginCodeEmailProps;

export default SpaceJellyLoginCodeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};