import { motion } from "framer-motion";
import {
  footerVariants,
  footerVariants3,
  staggerContainer,
  textContainer,
  textVariant,
} from "../utils/motion";
import bracket from "../assets/images/bracket.png";

import conversation from "../assets/images/conversation.svg";
import test from "../assets/images/test.svg";
import business from "../assets/images/business.svg";

import woman6 from "../assets/images/woman6.png";

import { useState } from "react";
import CourseCard from "../elements/CourseCard";

export default function Offer() {
  const letters = ["O", "f", "e", "r", "t", "a"];

  return (
    <section>
      <div className="relative section courses">
        <div className="relative flex flex-col h-[100vh] pl-[15rem] pt-8">
          <div className="relative flex justify-between items-center pb-4">
            <motion.h1
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="ml-8 -translate-y-2 title flex text-[16vh] font-semibold leading-[19vh] pb-2"
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
            <img
              src={bracket}
              className="absolute left-4 -bottom-14 w-[30%] -z-1"
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
            <div className="hero-img-2 flex gap-6 pt-12">
              <motion.div
                variants={footerVariants(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <CourseCard
                  image={conversation}
                  title={"Konwersacje"}
                  description={
                    "Dla wszystkich, którym szczególnie zależy na skutecznej komunikacji i przełamaniu bariery językowej."
                  }
                />
              </motion.div>
              <motion.div
                variants={footerVariants(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <CourseCard
                  image={test}
                  title={"Kurs certyfikacyjny i maturalny"}
                  description={
                    "Z nami zdasz egzamin z języka angielskiego ze znakomitym wynikiem!"
                  }
                />
              </motion.div>

              <motion.div
                variants={footerVariants(0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              >
                <CourseCard
                  image={business}
                  title={"Angielski biznesowy"}
                  description={
                    "Dołącz do nas, aby lepiej radzić sobie w kontaktach biznesowych z cudzoziemcami."
                  }
                />
              </motion.div>
              <motion.img
                src={woman6}
                className="absolute max-w-[650px] top-[100px] right-[-230px]"
                alt=""
                variants={footerVariants3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
