export default function Icon({ icon, title, description }) {
  return (
    <div className="flex w-[500px] items-center gap-4">
      <div className="w-[80px] h-[80px] rounded-full p-2">
        <img src={icon} className="w-[80px] h-[80px] pb-4" alt="" />
      </div>
      <div className="space-y-1">
        <p className="font-bold">{title}</p>
        <p className="leading-5">{description}</p>
      </div>
    </div>
  );
}
