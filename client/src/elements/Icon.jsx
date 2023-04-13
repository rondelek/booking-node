export default function Icon({ icon, title, description }) {
  return (
    <div className="flex w-[500px] items-center gap-4">
      <div className="rounded-full p-2">
        <img src={icon} className="max-w-[60px] h-[60px]" alt="" />
      </div>
      <div className=" text-[1.1rem] space-y-2">
        <p className="font-bold">{title}</p>
        <p className="leading-6">{description}</p>
      </div>
    </div>
  );
}
