import speak from "../assets/images/speak.svg";
import certificate from "../assets/images/certificate.svg";
import job from "../assets/images/job.svg";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Offer() {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-around py-12">
        <div className="offer-item">
          <img src={speak} className="w-[200px]" alt="" />
          <p className="font-bold pt-5">Kursy online</p>
          <p className="text-[14px]">Ucz się z dowolnego miejsca na świecie!</p>
        </div>
        <div className="offer-item">
          <img src={certificate} className="w-[200px]" alt="" />
          <p className="font-bold pt-5">Kursy indywidualne i grupowe</p>
          <p className="text-[14px]">Dopasowane do Twoich potrzeb.</p>
        </div>
        <div className="offer-item">
          <img src={job} className="w-[120px]" alt="" />
          <p className="font-bold pt-5">Kursy przygotowujące do egaminów</p>
          <p className="text-[14px]">FCE, CAE, CPE, a takze matura!</p>
        </div>
        <div className="offer-item">
          <img src={job} className="w-[220px] -translate-y-8" alt="" />
          <p className="font-bold pt-5">Konwersacje</p>
          <p className="text-[14px]">Nauczysz mówić się płynnie i pewnie!</p>
        </div>
      </div>
      {/* <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        sx={{ paddingRight: "30px", maxWidth: "190px", alignSelf: "center" }}
      >
        Sprawdź ofertę
      </Button> */}
    </div>
  );
}
