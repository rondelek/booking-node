import { motion } from "framer-motion";
import Course from "../elements/Course";
import {
  footerVariants,
  footerVariants3,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
} from "../utils/motion";
import certificate from "../assets/images/certificate.svg";
import job from "../assets/images/job.svg";
import fast from "../assets/images/fast.svg";
import time from "../assets/images/time.svg";
import speak from "../assets/images/speak.svg";
import computer from "../assets/images/computer.svg";
import idk2 from "../assets/images/idk2.png";
import Offer from "./Offer";
import { BlackRoundedButton } from "../styles/muiStyles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Icon from "../elements/Icon";

export default function Courses() {
  const letters = ["K", "u", "r", "s", "y"];
  return (
    <section>
      {/* <Offer /> */}
      <div className="relative section courses">
        <div className="relative flex flex-col h-[100vh] px-20 pl-[18rem] pt-8">
          <div className="flex justify-between items-center">
            <motion.h1
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="title flex text-[16vh] font-semibold leading-[19vh] pb-12"
            >
              {letters.map((letter) => {
                return (
                  <motion.div
                    variants={textVariant(letters.indexOf(letter) * 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {letter}
                  </motion.div>
                );
              })}
            </motion.h1>
            {/* <div className="card -translate-x-24">
              <a className="card-link" href="#">
                Cennik<span className="card-link-span"></span>
              </a>
            </div> */}
          </div>

          <motion.div
            className="flex flex-wrap gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="">
              <motion.div
                variants={footerVariants(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <Icon
                  icon={fast}
                  title={"Błyskawicznie naucz się języka"}
                  description={
                    "Nasze metody w połączeniu z Twoją pracą przyniosą rezultaty juz po pierwszej lekcji!"
                  }
                />
              </motion.div>
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
                    "Nasze metody w połączeniu z Twoją pracą przyniosą rezultaty juz po pierwszej lekcji!"
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
                    "Nasze metody w połączeniu z Twoją pracą przyniosą rezultaty juz po pierwszej lekcji!"
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
                    "Nasze metody w połączeniu z Twoją pracą przyniosą rezultaty juz po pierwszej lekcji!"
                  }
                />
              </motion.div>
              <motion.img
                src={idk2}
                className="absolute w-[90%] bottom-0"
                alt=""
                variants={footerVariants3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.div
                className="flex justify-center justify-self-end mt-10 ml-16"
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

            {/* <motion.div
              variants={footerVariants(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Course
                image={fast}
                course={"Kursy online"}
                description={"Ucz się z dowolnego miejsca na świecie!"}
              />
            </motion.div>
            <motion.div
              variants={footerVariants(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Course
                image={time}
                course={"Kursy indywidualne i grupowe"}
                description={"Dopasowane do Twoich potrzeb."}
              />
            </motion.div>
            <motion.div
              variants={footerVariants(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Course
                image={job}
                course={"Kursy przygotowujące do egzaminów"}
                description={"FCE, CAE, CPE, a takze matura!"}
              />
            </motion.div>
            <motion.div
              variants={footerVariants(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Course
                image={job}
                course={"Konwersacje"}
                description={"Nauczysz mówić się płynnie i pewnie!"}
              />
            </motion.div> */}
          </motion.div>
          {/* <div className="flex justify-center justify-self-end mt-auto mb-20">
            <BlackRoundedButton endIcon={<ArrowForwardIcon />}>
              Zapisz się na lekcję próbną
            </BlackRoundedButton>
          </div> */}
        </div>
      </div>
    </section>
  );
}
