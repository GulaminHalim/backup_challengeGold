import NavbarComponent from "../navbar";
import Footer from "../../module/landingPage/sections/Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
