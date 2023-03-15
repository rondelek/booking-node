import { YellowRoundedButton } from "../styles/muiStyles";

export default function Course({ image, course, description }) {
  return (
    <div class="grid max-w-[300px] my-4 ">
      {/* <img className="max-w-[100px] rounded-full" src={image} alt="" />
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {course}
      </h5>
      <p class="mb-3 font-normal leading-5 text-gray-700 dark:text-gray-400">
        {description}
      </p> */}
      {/* <YellowRoundedButton className="flex justify-end h-[7vh] mt-auto">
        Dowiedz się więcej
      </YellowRoundedButton> */}
      <div className="w-[100px]">
        <img src={image} className="offer-img w-[150px]" alt="" />
        <p className="font-bold pt-5">{course}</p>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
}
