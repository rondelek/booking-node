import { motion } from "framer-motion";

import {
  textVariant2,
  staggerContainer,
  footerVariants,
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
          className="hero-text
        px-[5vw] pt-8"
        >
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="font-semibold pb-12"
          >
            Naucz się angielskiego <br /> w{" "}
            <span className="text-orange">Sign</span>!
          </motion.h1>
          <motion.div
            className="hero-buttons flex flex-wrap gap-4"
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
            className="absolute -right-[4rem] bottom-0"
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
