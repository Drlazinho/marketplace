import { api } from '@/lib/axios'

export interface MetricsResponse {
    amount: number;
}

type viewsPerDayType = {
    date: string
    amount: number
}

export interface MetricsDaysResponse {
    viewsPerDay: viewsPerDayType[];
}

export async function getMetricsProductsSold() {
   const response = await api.get<MetricsResponse>('/sellers/metrics/products/sold')

    return response.data
}

export async function getMetricsProductsAvailable() {
   const response = await api.get<MetricsResponse>('/sellers/metrics/products/available')

    return response.data
}

export async function getMetricsViews() {
   const response = await api.get<MetricsResponse>('/sellers/metrics/views')

    return response.data
}

export async function getMetricsViewsDays() {
   const response = await api.get<MetricsDaysResponse>('/sellers/metrics/views/days')

    return response.data
}

