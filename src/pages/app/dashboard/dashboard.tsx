import CustomCard from "@/components/custom-card";
import { BadgeDollarSign, Store, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useQuery } from '@tanstack/react-query'
import { getMetricsProductsAvailable, getMetricsProductsSold, getMetricsViews } from '@/api/metrics'
import { VisitedCharts } from './visited-charts'

export function Dashboard() {
  const { data: amountProductsSold } = useQuery({
    queryKey: ['amountProductsSold'],
    queryFn: getMetricsProductsSold
  })
  const { data: amountProductsAvailable } = useQuery({
    queryKey: ['amountProductsAvailable'],
    queryFn: getMetricsProductsAvailable
  })
  const { data: amountMetricsViews } = useQuery({
    queryKey: ['amountMetricsViews'],
    queryFn: getMetricsViews
  })


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
              value={amountProductsSold?.amount}
              icon={<BadgeDollarSign className="text-blue-dark  w-12 h-12" />}
            />
            <CustomCard
              label="Produtos anunciados"
              value={amountProductsAvailable?.amount}
              icon={<Store className="text-blue-dark  w-12 h-12" />}
            />
            <CustomCard
              label="Pessoas visitantes"
              value={amountMetricsViews?.amount}
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
