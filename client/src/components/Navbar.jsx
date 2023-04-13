import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

import { motion } from "framer-motion";

import {
  staggerContainer,
  footerVariants,
  footerVariants4,
} from "../utils/motion";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { YellowRoundedButton } from "../styles/muiStyles";

export default function Navbar() {
  return (
    <div className="navbar w-[200px] flex-col items-center fixed h-full bg-[#fdfcfc] shadow-2xl p-4 z-10">
      <img src={logo} className="pt-4 w-[16vh] z-10" alt="" />

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col items-center h-[70%] w-full justify-around overflow-hidden mt-4"
      >
        <motion.li
          variants={footerVariants4(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="menu-item menu-item-chosen relative"
        >
          <NavLink activeStyle={{ color: "#5754a8" }} to="/about-us">
            O nas
          </NavLink>
        </motion.li>
        <motion.li
          variants={footerVariants4(0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="menu-item relative"
        >
          Cennik
        </motion.li>

        <motion.li
          variants={footerVariants4(0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="menu-item relative"
        >
          Oferta
        </motion.li>
        <motion.li
          variants={footerVariants4(1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="menu-item relative"
        >
          Kontakt
        </motion.li>
        <motion.li
          variants={footerVariants4(1.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <YellowRoundedButton>Zapisz się</YellowRoundedButton>
        </motion.li>
      </motion.ul>
      <motion.div className="flex justify-around justify-self-end w-full pb-12 mt-auto">
        <motion.div
          variants={footerVariants(1.2)}
          initial="hidden"
          className="social"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <FaFacebookF className="w-4 h-4 outline-offset-[6px] outline outline-yellow rounded-full" />
          <div className="social-bg" />
        </motion.div>
        <motion.div
          variants={footerVariants(1.4)}
          initial="hidden"
          whileInView="show"
          className="social"
          viewport={{ once: false, amount: 0.5 }}
        >
          <FaInstagram className="w-4 h-4 outline-offset-[6px] outline outline-yellow rounded-full" />
          <div className="social-bg" />
        </motion.div>

        <motion.div
          variants={footerVariants(1.6)}
          initial="hidden"
          whileInView="show"
          className="social"
          viewport={{ once: false, amount: 0.5 }}
        >
          <MdOutlineMailOutline className="w-4 h-4 outline-offset-[6px] outline outline-yellow rounded-full" />
          <div className="social-bg" />
        </motion.div>
      </motion.div>
    </div>
  );
}
