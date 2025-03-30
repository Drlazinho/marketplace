import CustomCard from "@/components/custom-card";
import { BadgeDollarSign, Store, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import VisitedCharts from './visited-charts'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="container mx-auto mt-10">
        <h1 className="text-title-md font-bold text-grayscale-500">
          Últimos 30 dias
        </h1>
        <p className="text-grayscale-300 text-body-sm mt-1">
          Confira as estatísticas da sua loja no último mês
        </p>
        <div className="grid grid-cols-5 gap-4 mt-10">
          <div className="col-span-1 space-y-4">
            <CustomCard
              label="Produtos Vendidos"
              value={24}
              icon={<BadgeDollarSign className="text-blue-dark  w-12 h-12" />}
            />
            <CustomCard
              label="Produtos anunciados"
              value={24}
              icon={<Store className="text-blue-dark  w-12 h-12" />}
            />
            <CustomCard
              label="Pessoas visitantes"
              value={24}
              icon={<Users className="text-blue-dark w-12 h-12" />}
            />
          </div>
          <div className="col-span-4 bg-white rounded-2xl">
            <VisitedCharts/>
          </div>
        </div>
      </div>
    </>
  );
}
