import Wrapper from "../assets/wrappers/Searchbox";
import CheckIcon from "@mui/icons-material/Check";

export default function Searchbox() {
  return (
    <Wrapper>
      <h1 className="z-10 my-6">
        Bezstresowe lekcje angielskiego w Sign School!
      </h1>
      <p>
        Chcesz nauczyć się języka angielskiego w łatwy, szybki i przyjemny
        sposób? Świetnie trafiłeś! Wybierając nas stawiasz na:
      </p>
      <div className="flex flex-wrap justify-center space-x-4 py-4">
        <div>
          <CheckIcon /> <span>jakość</span>
        </div>
        <div>
          <CheckIcon /> <span>efektywność</span>
        </div>
        <div>
          <CheckIcon /> <span>przyjazną atmosferę</span>
        </div>
      </div>
    </Wrapper>
  );
}
