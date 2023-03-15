import girl1 from "../assets/images/girl1.png";
import girl3 from "../assets/images/girl3.png";
import girlhero from "../assets/images/girl-hero.png";
import blobblue3 from "../assets/images/blobblue3.svg";

export default function Hero2() {
  return (
    <div className="grid grid-cols-2 px-20 pb-60">
      <div className="relative">
        <div className="shadow-dot-blue absolute top-20 -left-20">.</div>
        <div className="shadow-dot-yellow absolute top-60 right-40 translate-y-20">
          .
        </div>
        <h1
          className="hero-text pt-32"
          aria-label="Naucz się skutecznie angielskiego w Sign School"
        >
          W <span className="text-orange">Sign&nbsp;</span>
          nauczysz się&nbsp;
          <span className="">angielskiego</span>&nbsp; <br />
          <span class="typewriter"></span>
        </h1>
      </div>
      <div className="relative -translate-y-12">
        <img src={girl1} alt="" />
        <img src={girl3} alt="" />
        {/* <img src={girlblue} alt="" /> */}
        {/* <Circle /> */}
        {/* <img
          src={girlblob2}
          className="absolute top-8 left-4 max-w-[530px]"
          alt=""
        />
        <img
          src={blobblue3}
          className="absolute top-52 left-12 max-w-[450px] -z-10"
          alt=""
        /> */}
      </div>
    </div>
  );
}
