import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthlyOrders } from '@/api/get-monthly-orders'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import SkeletonCard from './skeleton-card'

export function MonthlyOrdersCard() {
  const { data: monthlyOrders } = useQuery({
    queryKey: ['metrics', 'monthly-orders'],
    queryFn: getMonthlyOrders,
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyOrders ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyOrders.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyOrders.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyOrders.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyOrders.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <SkeletonCard />
        )}
      </CardContent>
    </Card>
  )
}
