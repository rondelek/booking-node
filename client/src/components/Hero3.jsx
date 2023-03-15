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
} from "../utils/motion";

import girlred from "../assets/images/girlred.png";
import { BlackRoundedButton, YellowRoundedButton } from "../styles/muiStyles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero3() {
  return (
    <section>
      <motion.div className="section relative">
        <motion.div
          variants={staggerContainer}
          className="
        w-[65vw] px-20 pl-[14rem] pt-8"
        >
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="text-[16vh] font-semibold leading-[19vh] pb-12"
          >
            Naucz się angielskiego <br /> w{" "}
            <span className="text-orange">Sign</span>!
          </motion.h1>
          <motion.div
            className="flex flex-wrap max-w-[50vw] gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.div
              variants={footerVariants(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <YellowRoundedButton>Dowiedz się więcej</YellowRoundedButton>
            </motion.div>
            <motion.div
              variants={footerVariants(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <BlackRoundedButton endIcon={<ArrowForwardIcon />}>
                Zapisz się na lekcję próbną
              </BlackRoundedButton>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="hero-img">
          <motion.img
            src={girlred}
            className="block absolute h-[100vh] -right-8 bottom-0"
            alt=""
            variants={footerVariants3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
