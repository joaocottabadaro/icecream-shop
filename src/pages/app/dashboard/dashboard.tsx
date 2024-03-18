import { DailyOrdersCard } from './daily-orders-card'
import { MonthlyCanceledOrdersCard } from './monthly-canceled-orders-card'
import { MonthlyOrdersCard } from './monthly-orders-card'
import { MonthlyRevenueCard } from './monthly-revenue-card'
import { PopularProductsChart } from './products-chart'
import { RevenueChart } from './revenue.chart'

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthlyRevenueCard />
          <MonthlyOrdersCard />
          <DailyOrdersCard />
          <MonthlyCanceledOrdersCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
