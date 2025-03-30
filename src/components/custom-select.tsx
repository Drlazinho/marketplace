import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LucideIcon } from "lucide-react";

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  icon?: LucideIcon;
}

export default function CustomSelect({ label, options, icon: Icon }: CustomSelectProps) {
  return (
    <div className="w-full border-b border-gray-300">
      <Select>
        <SelectTrigger className="flex items-center justify-between w-full py-2 border-none text-gray-500 bg-transparent focus:outline-none">
          <div className="flex items-center gap-2">
            {Icon && <Icon size={16} className="text-gray-400" />}
            <SelectValue placeholder={label} />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white shadow-md rounded-md">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
