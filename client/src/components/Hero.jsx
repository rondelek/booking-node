import Wrapper from "../assets/wrappers/Hero";
import blobtest from "../assets/images/blobtest.svg";
import girlblob from "../assets/images/girlblob.png";
import { BlackRoundedButton, YellowRoundedButton } from "../styles/muiStyles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ButtonTrial from "../elements/ButtonTrial";

export default function Searchbox() {
  return (
    // <Wrapper style={{ backgroundImage: `url(${blobtest})` }}>
    <Wrapper
      style={{ backgroundImage: `url(${blobtest})` }}
      className="testunio1"
    >
      <div className="px-12 py-12">
        <h1
          className="hero-text"
          aria-label="Naucz się skutecznie angielskiego w Sign School"
        >
          Naucz się <br></br>
          <span className="half-background">angielskiego</span>&nbsp; <br />
          <span class="typewriter"></span> <br />w Sign!
        </h1>
        <p className="leading-6 font-semibold py-8">
          Szkoła języka angielskiego Sign to przede wszystkim jakość -&nbsp;
          <span className="half-background">autentyczne materiały</span>,&nbsp;
          <span className="half-background">wykwalifikowani lektorzy</span>
          ,&nbsp;
          <span className="half-background">nastawienie na komunikację</span>. A
          to wszystko w przyjemnej,&nbsp;
          <span className="half-background">bezstresowej atmosferze</span>!
        </p>
        <div className="buttons flex min-[1102px]:justify-center gap-4">
          <YellowRoundedButton>Dowiedz się więcej</YellowRoundedButton>
          <BlackRoundedButton endIcon={<ArrowForwardIcon />}>
            Zapisz się na lekcję próbną
          </BlackRoundedButton>
        </div>

        {/* <ButtonTrial /> */}
      </div>
      <img
        src={girlblob}
        className="girlblob min-[1276px]:max-w-[550px] min-[1224px]:max-w-[500px]"
        alt=""
      />

      {/* <div className="min-sm:w-[50%] pl-12 pr-20 w-full">
        <h1 className="z-10 min-md:my-2">Sign - Szkoła języka angielskiego </h1>
        <p>
          Jesteśmy szkołą języka angielskiego, oferującą kursy dla dzieci,
          młodzieży i dorosłych w samym sercu Poznania. Specjalizujemy się w
          korepetycjach, konwersacjach i przygotowaniach do certyfikatów. Naszym
          celem jest prowadzenie zajęć języka angielskiego nie tylko efektywnie,
          ale też przyjemnie! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Perspiciatis mollitia culpa numquam repellendus
          itaque vel laboriosam ipsum dicta minima magnam incidunt optio, velit
          distinctio, nihil repellat officia eligendi! Saepe, consequatur.
        </p>
      </div>
      <div className="max-lg:hidden -translate-x-[370px] translate-y-[150px] min-[1173px]:translate-y-[46px]  min-[889px]:translate-y-[93px] min-[889px]:-translate-x-[400px] min-md:translate-y-[108px] mr-8 relative left-[430px] bottom-[74px] min-[889px]:min-w-[400px] min-w-[480px]">
        <img
          src={blob4}
          className="absolute -top-14 right-4 min-w-[500px]"
          alt=""
        />

        <img
          src={blob5}
          className="absolute right-10 min-[889px]:min-w-[150px] min-w-[250px] rotate"
          alt=""
        />

        <img
          src={girl2}
          className="absolute min-[889px]:-top-[88px] -top-6 right-10 min-w-[300px]"
          alt=""
        />
      </div>
      <img src={wave} className="absolute -bottom-[20px] w-full" alt="" /> */}
    </Wrapper>
  );
}
