/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useMemo } from "react";
import {
  Box,
  Grid,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Divider,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { motion, MotionProps } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { isValidMotionProp } from 'framer-motion';

interface FooterLink {
  href: string;
  text: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

type MotionBoxProps = BoxProps & MotionProps;

const MotionBox = motion(
  // eslint-disable-next-line react/display-name
  React.forwardRef<HTMLDivElement, MotionBoxProps>((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

MotionBox.displayName = 'MotionBox';
MotionBox.displayName = "MotionBox";

MotionBox.displayName = "MotionBox";

MotionBox.displayName = "MotionBox";

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = useMemo(
    () => [
      {
        title: "About Us",
        links: [
          { href: "/our-story", text: "Our Story" },
          { href: "/team", text: "Meet the Team" },
          { href: "/careers", text: "Careers" },
          { href: "/press", text: "Press Releases" },
          { href: "/blog", text: "Blog" },
          { href: "/contact", text: "Contact Us" },
          { href: "/partnerships", text: "Partnerships" },
          { href: "/investor-relations", text: "Investor Relations" },
        ],
      },
      {
        title: "Products",
        links: [
          { href: "/products/software", text: "Software Solutions" },
          { href: "/products/hardware", text: "Hardware" },
          { href: "/products/services", text: "Services" },
          { href: "/products/enterprise", text: "Enterprise" },
          { href: "/products/personal", text: "Personal" },
          { href: "/pricing", text: "Pricing" },
          { href: "/products/custom", text: "Custom Solutions" },
          { href: "/products/integrations", text: "Integrations" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "/resources/documentation", text: "Documentation" },
          { href: "/resources/tutorials", text: "Tutorials" },
          { href: "/resources/webinars", text: "Webinars" },
          { href: "/resources/case-studies", text: "Case Studies" },
          { href: "/resources/white-papers", text: "White Papers" },
          { href: "/resources/faq", text: "FAQ" },
          { href: "/resources/api", text: "API Reference" },
          { href: "/resources/community", text: "Community Resources" },
        ],
      },
      {
        title: "Community",
        links: [
          { href: "/community/forums", text: "Forums" },
          { href: "/community/events", text: "Events" },
          { href: "/community/developers", text: "Developers" },
          { href: "/community/partners", text: "Partners" },
          { href: "/community/affiliates", text: "Affiliates" },
          { href: "/community/newsletter", text: "Newsletter" },
          { href: "/community/user-groups", text: "User Groups" },
          { href: "/community/hackathons", text: "Hackathons" },
        ],
      },
      {
        title: "Support",
        links: [
          { href: "/support/help-center", text: "Help Center" },
          { href: "/support/ticket", text: "Submit a Ticket" },
          { href: "/support/status", text: "System Status" },
          { href: "/support/security", text: "Security" },
          { href: "/support/compliance", text: "Compliance" },
          { href: "/support/accessibility", text: "Accessibility" },
          { href: "/support/training", text: "Training" },
          { href: "/support/consulting", text: "Consulting Services" },
        ],
      },
      {
        title: "Legal",
        links: [
          { href: "/legal/terms", text: "Terms of Service" },
          { href: "/legal/privacy", text: "Privacy Policy" },
          { href: "/legal/cookies", text: "Cookie Policy" },
          { href: "/legal/gdpr", text: "GDPR" },
          { href: "/legal/licenses", text: "Licenses" },
          { href: "/legal/trademark", text: "Trademark Policy" },
          { href: "/legal/copyright", text: "Copyright Policy" },
          { href: "/legal/acceptable-use", text: "Acceptable Use Policy" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "/company/mission", text: "Our Mission" },
          { href: "/company/values", text: "Core Values" },
          { href: "/company/leadership", text: "Leadership" },
          { href: "/company/diversity", text: "Diversity & Inclusion" },
          { href: "/company/sustainability", text: "Sustainability" },
          { href: "/company/social-responsibility", text: "Social Responsibility" },
          { href: "/company/awards", text: "Awards & Recognition" },
          { href: "/company/locations", text: "Global Locations" },
        ],
      },
      {
        title: "Connect",
        links: [
          { href: "/connect/social-media", text: "Social Media" },
          { href: "/connect/mobile-app", text: "Mobile App" },
          { href: "/connect/feedback", text: "Feedback" },
          { href: "/connect/testimonials", text: "Testimonials" },
          { href: "/connect/ambassador", text: "Ambassador Program" },
          { href: "/connect/referrals", text: "Referral Program" },
          { href: "/connect/community-challenges", text: "Community Challenges" },
          { href: "/connect/customer-stories", text: "Customer Stories" },
        ],
      },
    ],
    []
  );

  return (
    <Box className="relative mt-12 bg-transparent text-slate-800">
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>

      {/* Top animated gradient border */}
      <MotionBox
        className="h-[3px] w-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 animate-gradient bg-[length:200%_100%] animate-alternate"
        style={{
          backgroundSize: "200% 100%",
          animation: "gradientAnimation 5s linear infinite alternate",
        }}
      />

      {/* Footer Grid Sections */}
      <Grid
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-12 mb-8 mt-10"
        textAlign={{ base: "center", md: "left" }}
      >
        {footerSections.map((section, index) => (
          <Stack key={index} spacing={2}>
            <Text className="font-bold text-2xl mb-3 hover:scale-105 transition duration-300">
              {section.title}
            </Text>
            {section.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="text-slate-800 text-base hover:text-purple-500 hover:underline transition duration-300"
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        ))}
      </Grid>

      {/* Divider and Bottom Section */}
      <Divider className="border border-slate-800 my-6" />
      <Grid
        className="grid grid-cols-1 md:grid-cols-2 items-center text-left mt-8 px-4 md:px-12 pb-10"
      >
        <Stack className="space-y-4 pointer-events-none whitespace-pre-wrap text-center font-semibold leading-none">
          <Text className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            © 2024 Dayflow.io Technologies, Inc. All rights reserved.
          </Text>
      
          <Text className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </Text>
        </Stack>
        <HStack className="flex justify-center text-4xl md:justify-end space-x-6 mt-4 md:mt-0 text-indigo-600">
  <Link href="https://github.com/harshitduggal1" className="hover:hover:text-pink-600 transition">
    <Icon as={FaGithub} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-pink-600 transition">
    <Icon as={FaYoutube} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-pink-600 transition">
    <Icon as={FaTwitter} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-pink-600 transition">
    <Icon as={FaFacebook} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-pink-600 transition">
    <Icon as={FaInstagram} className="w-6 h-6" />
  </Link>
  <Link href="#" className="hover:text-pink-600 transition">
    <Icon as={FaPinterest} className="w-6 h-6" />
  </Link>
</HStack>

          </Grid>
       

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      
    </Box>
  );
};
export default Footer;