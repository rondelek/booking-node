import logo from "../assets/images/logo.png";

import { motion } from "framer-motion";

import {
  textContainer,
  textVariant2,
  slideIn,
  staggerContainer,
  fadeIn,
  textVariant,
  planetVariants,
  zoomIn,
  footerVariants,
  footerVariants2,
  footerVariants3,
  footerVariants4,
} from "../utils/motion";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="flex flex-col fixed h-full bg-[#fdfcfc] shadow-2xl p-4 z-10">
      <img
        src={logo}
        className="relative w-[16vh] z-10 pr-5 pl-1 pt-1 pb-1 mt-5 ml-5"
        alt=""
      />

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
          Kursy
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
          O nas
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
          className="menu-item relative"
        >
          Kontakt
        </motion.li>
      </motion.ul>
      <motion.div className="flex justify-around justify-self-end pb-12 mt-auto">
        <motion.div
          variants={footerVariants(1.2)}
          initial="hidden"
          whileInVi
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
          ew="show"
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
