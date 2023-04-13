import { YellowRoundedButton } from "../styles/muiStyles";

export default function Course({ image, course, description }) {
  return (
    <div class="grid max-w-[300px] my-4">
      <div className="w-[100px]">
        <img src={image} className="offer-img w-[150px]" alt="" />
        <p className="font-bold pt-5">{course}</p>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
}
