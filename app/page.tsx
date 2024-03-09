import NavItem from "@/components/NavItem";
import Navbar from "@/components/Navbar";
import { Briefcase, File, HandCoins, HomeIcon, Mail, User } from "lucide-react";

export default function Home() {
  return (
    <Navbar>
      <NavItem Icon={HomeIcon}>Home</NavItem>
      <NavItem Icon={User}>About</NavItem>
      <NavItem Icon={File}>Resume</NavItem>
      <NavItem Icon={Briefcase}>Portfolio</NavItem>
      <NavItem Icon={HandCoins}>Services</NavItem>
      <NavItem Icon={Mail}>Contact</NavItem>
    </Navbar>
  );
}
