import { getMetricsViewsDays } from "@/api/metrics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/data-range-picker";
import { dateFormatter } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
import { Users } from 'lucide-react'
import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { TooltipProps } from 'recharts';

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
      <p className="font-bold text-sm text-gray-800 uppercase">
        {label} {/* Esta será sua data formatada */}
      </p>
      <div className="flex items-center mt-1">
        <span className="mr-2"><Users color='#009CF0'/></span>
        <span className="text-blue-dark font-medium">
          {payload[0].value} visitantes
        </span>
      </div>
    </div>
  );
};

export function VisitedCharts() {
  const {
    data: dataMetricsView,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["amountMetricsViewsDays"],
    queryFn: getMetricsViewsDays,
  });

  const chartData = useMemo(() => {
    return dataMetricsView?.viewsPerDay.map((chartItem) => {
      return {
        date: dateFormatter(chartItem.date),
        amount: chartItem.amount,
      };
    });
  }, [dataMetricsView]);

  if (isLoading) {
    return (
      <Card className="border-none rounded-2xl">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Visitantes</CardTitle>
            <DatePickerWithRange className="border-none" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] flex items-center justify-center">
            Carregando dados...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-none rounded-2xl">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Visitantes</CardTitle>
            <DatePickerWithRange className="border-none" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] flex items-center justify-center text-red-500">
            Erro ao carregar dados
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none rounded-2xl">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Visitantes</CardTitle>
          {/* <DatePickerWithRange className="border-none" /> */}
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip
                content={<CustomTooltip />}
                // formatter={(value) => [`${value} visitas`]}
                wrapperStyle={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            {/* <Legend/> */}
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#009CF0"
              activeDot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
