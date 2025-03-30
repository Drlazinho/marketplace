import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  title: string;
  price: string;
  description: string;
  status: "anunciado" | "vendido" | "desativado";
  image?: string;
  tag?: string;
}

export default function ProductCard({
  title,
  price,
  description,
  status,
  image,
  tag,
}: CardProps) {
  return (
    <Card className="relative w-full max-w-sm shadow-lg rounded-2xl">
      <div className="absolute top-3 right-3 space-x-2 text-body-sm">
        {status === "vendido" && (
          <Badge className=" bg-green-500">VENDIDO</Badge>
        )}
        {status === "anunciado" && (
          <Badge className="bg-blue-dark">ANUNCIADO</Badge>
        )}
        {status === "desativado" && (
          <Badge className="bg-grayscale-300">DESATIVADO</Badge>
        )}
        {tag && <Badge className="bg-grayscale-400 text-white font-thin uppercase">{tag}</Badge>}
      </div>

      <div className="w-full h-40 p-1">
        <img src={image} alt={title} width={330} height={144} className="w-full h-full object-cover rounded-xl" />
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between truncate">
          <h3 className="text-subtitle font-bold capitalize truncate">{title}</h3>
          <p className="text-body-sm">
            R${" "}
            <span className="text-title-sm font-bold text-gray-800">
              {price}
            </span>
          </p>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-2"></div>
      </CardContent>
    </Card>
  );
}
