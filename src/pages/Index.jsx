import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Divider, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaLock, FaShieldAlt, FaUserSecret, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <HStack justify="center">
          <FaLock size={48} />
          <Heading as="h1" size="2xl">
            Ethical Hacking & Penetration Testing
          </Heading>
        </HStack>
        <Image src="https://images.unsplash.com/photo-1502736842968-bcaab72d0700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBpbiUyMGRhcmslMjByb29tfGVufDB8fHx8MTcxMTY1MjA0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hacker" />
        <Text fontSize="xl">Welcome to our website dedicated to the world of ethical hacking and penetration testing. Here, we explore the techniques and tools used by security professionals to identify and mitigate vulnerabilities in computer systems and networks.</Text>
        <Divider />
        <Heading as="h2" size="xl">
          <FaShieldAlt /> What is Ethical Hacking?
        </Heading>
        <Text fontSize="lg">Ethical hacking involves authorized professionals, known as "white hat hackers," using the same methods as malicious hackers to identify security weaknesses in systems. The goal is to proactively find and fix vulnerabilities before they can be exploited by attackers.</Text>
        <Heading as="h2" size="xl">
          <FaUserSecret /> Penetration Testing
        </Heading>
        <Text fontSize="lg">Penetration testing, or "pentesting," is a simulated cyber attack against a computer system to evaluate its security. Pentesters use a variety of techniques to attempt to breach defenses and identify vulnerabilities. This helps organizations strengthen their security posture.</Text>
        <Heading as="h2" size="xl">
          <FaTools /> Common Tools & Techniques
        </Heading>
        <UnorderedList fontSize="lg">
          <ListItem>Network scanning (e.g., Nmap)</ListItem>
          <ListItem>Vulnerability scanning</ListItem>
          <ListItem>Exploitation frameworks (e.g., Metasploit)</ListItem>
          <ListItem>Social engineering</ListItem>
          <ListItem>Web application testing</ListItem>
          <ListItem>Wireless network testing</ListItem>
        </UnorderedList>
        <Text fontSize="lg">By employing these tools and techniques responsibly, ethical hackers and pentesters help organizations identify and address security risks before they can be exploited by malicious actors.</Text>
        <Divider />
        <Text fontSize="lg">
          Interested in learning more about ethical hacking and pentesting? Check out our{" "}
          <Link color="blue.500" href="#">
            resources
          </Link>{" "}
          and{" "}
          <Link color="blue.500" href="#">
            training programs
          </Link>
          .
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
