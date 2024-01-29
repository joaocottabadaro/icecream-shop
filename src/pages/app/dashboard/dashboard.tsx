import { MonthCanceledOrdersAmountCard } from './canceled-orders-card'
import { DayOrdersAmountCard } from './day-orders-card'
import { MonthOrdersAmountCard } from './orders-card'
import { PopularProductsChart } from './products-chart'
import { RevenueChart } from './revenue.chart'
import { MonthRevenueCard } from './revenue-card'

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
