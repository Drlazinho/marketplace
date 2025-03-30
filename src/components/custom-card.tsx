interface ICustomCardProps {
  icon?: React.ReactNode;
  value?: string | number;
  label: string;
}

export default function CustomCard({ icon, value, label }: ICustomCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-shape-white rounded-2xl">
      <div className="flex justify-center items-center bg-blue-light p-3 rounded-xl w-20 h-20">
        {icon}
      </div>{" "}
      <div className='w-16'>
        <p className="text-title-lg text-grayscale-400 font-bold">{value}</p>
        <p className="text-grayscale-300 text-body-xs">{label}</p>
      </div>
    </div>
  );
}
