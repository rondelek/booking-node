import wave from "../assets/images/wave.svg";
import bubble from "../assets/images/bubble.svg";
import speaking from "../assets/images/speaking.svg";
import Offer from "./Offer";
import { Button } from "@mui/material";
import { BlackRoundedButton } from "../styles/muiStyles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FirstLesson() {
  return (
    <div className="relative flex-column text-center bg-yellow p-20 mt-8">
      {/* <img
        src={wave}
        className="min-[1050px]:visible hidden absolute -top-5 rotate-180"
        alt=""
      /> */}
      <img
        src={bubble}
        className="absolute max-w-[200px] h-[291px] left-[30px] -top-[123px]"
        alt=""
      />
      <h2 className="text-center pb-2 pt-2">Pierwsza lekcja bez zobowiązań</h2>
      <p className="text-[18px] leading-10 pt-2 pb-6">
        Nie decyduj w ciemno! Umów się na bezpłatną, niezobowiązującą
        30-minutową lekcję próbną, na której poznasz lektora, lektor pozna Twoje
        potrzeby i wspólnie ustalicie plan działania.
      </p>
      <BlackRoundedButton
        endIcon={<ArrowForwardIcon />}
        sx={{ marginBottom: "1.5rem" }}
      >
        Zapisz się na lekcję próbną
      </BlackRoundedButton>
      {/* <Offer /> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        consequatur, quis nobis dolor rem minima recusandae impedit, temporibus
        aliquam sapiente expedita illum? Neque laboriosam voluptas in est
        debitis corporis eum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        expedita reiciendis aspernatur molestias perferendis facere eveniet
        quidem quod totam quaerat optio, explicabo ullam ratione autem esse,
        necessitatibus vero eos omnis, excepturi vitae repudiandae consequuntur
        deleniti maxime. Consectetur voluptas exercitationem tempore
        repudiandae. Nisi unde ad culpa, obcaecati aliquid impedit quibusdam
        sunt?
      </p> */}
    </div>
  );
}
