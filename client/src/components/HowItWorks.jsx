import Offer from "./Offer";
import wave from "../assets/images/wave.svg";
import teacher from "../assets/images/teacher.svg";
import blob from "../assets/images/blob.svg";
import blob2 from "../assets/images/blob2.svg";
import blob3 from "../assets/images/blob3.svg";
import blob4 from "../assets/images/blob4.svg";
import blob5 from "../assets/images/blob5.svg";

export default function HowItWorks() {
  return (
    <div className="relative text-center pt-12  px-16">
      {/* <img
        src={wave}
        className="min-[1050px]:visible hidden absolute -top-[98px] max-[1422px]:-top-[83px] max-[1194]:-top-[72px]"
        alt=""
      /> */}
      <h2 className="text-center">Dlaczego warto uczyć się w Sign?</h2>
      {/* <Offer /> */}
      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="flex-column gap-16">
          <div className="flex flex-col gap-4">
            <div className="number-outlined mr-2">1.</div>
            <h3 className="text-xl leading-3 font-semibold">
              Uczysz się gdzie chcesz
            </h3>
            <p className="leading-6">
              Mozesz łączyć się z nami gdziekolwiek jesteś! Potrzebujesz jedynie
              dostępu do internetu oraz komputera lub telefonu.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="number-outlined mr-2">2.</div>
            <h3 className="text-xl leading-3 font-semibold">
              Przełamujemy bariery
            </h3>
            <p className="leading-6">
              Mówienie po angielsku zawsze Cię stresowało? My znamy na to
              sposoby! Potrafimy sprawić, ze nawet najbardziej zestresowana
              osoba poczuje się komfortowo i pewnie w uzywaniu języka.
            </p>
          </div>
        </div>
        <div className="relative self-center justify-self-center">
          <img src={teacher} className="max-w-[300px] z-10" alt="" />
        </div>
        <div className="flex-column gap-16">
          <div className="flex flex-col gap-4">
            <div className="number-outlined mr-2">3.</div>
            <h3 className="text-xl leading-3 font-semibold">
              Darmowa lekcja próbna
            </h3>
            <p className="leading-6">
              Nie musisz kupować kursu w ciemno - umów się na darmową,
              30-minutową lekcję próbną, zeby przekonać się, ze Sign to szkoła
              dla Ciebie!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="number-outlined mr-2">4.</div>
            <h3 className="text-xl leading-3 font-semibold">
              Indywidualne podejście
            </h3>
            <p className="leading-6">
              Każde zajęcia dopasowujemy do indywidualnych predyspozycji,
              zainteresowań, celu oraz poziomu językowego ucznia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
