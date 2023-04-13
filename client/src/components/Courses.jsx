import { motion } from "framer-motion";
import {
  footerVariants,
  footerVariants3,
  staggerContainer,
} from "../utils/motion";
import time from "../assets/images/time.svg";
import speak from "../assets/images/speak.svg";
import computer from "../assets/images/computer.svg";
import mancircle from "../assets/images/mancircle.png";
import bracket from "../assets/images/bracket.png";

import { BlackRoundedButton } from "../styles/muiStyles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Icon from "../elements/Icon";
import ONas from "../elements/ONas";

export default function Courses() {
  return (
    <section id="about-us" className="relative">
      <div className="relative section courses">
        <div className="relative flex flex-col h-[100vh] pl-[15rem] pt-8">
          <div className="relative flex justify-between items-center pb-4">
            <ONas />
            <img
              src={bracket}
              className="absolute -left-2 -bottom-14 w-[30%] -z-1"
              alt=""
            />
          </div>

          <motion.div
            className="flex flex-wrap gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="hero-img-2 flex flex-col gap-6 pt-12">
              <motion.div
                variants={footerVariants(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Icon
                  icon={time}
                  title={"Oszczędzaj czas"}
                  description={
                    "Działamy online, dzięki czemu nie marnujesz czasu ani pieniędzy na dojazdy!"
                  }
                />
              </motion.div>
              <motion.div
                variants={footerVariants(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Icon
                  icon={speak}
                  title={"Mów swobodnie i pewnie"}
                  description={
                    "W Sign przełamujemy bariery i podnosimy Twoją pewność siebie w używaniu języka angielskiego."
                  }
                />
              </motion.div>
              <motion.div
                variants={footerVariants(0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Icon
                  icon={computer}
                  title={"Ucz się online"}
                  description={
                    "Do lekcji online potrzebujesz jedynie komputera, tabletu lub telefonu oraz dostępu do internetu. Nic więcej!"
                  }
                />
              </motion.div>
              <motion.img
                src={mancircle}
                className="absolute w-[90%] bottom-0 left-[19rem]"
                alt=""
                variants={footerVariants3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.div
                className="flex justify-center justify-self-end mt-6"
                variants={footerVariants(1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <BlackRoundedButton endIcon={<ArrowForwardIcon />}>
                  Zapisz się na lekcję próbną
                </BlackRoundedButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
