import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthlyCanceledOrders } from '@/api/get-monthly-canceled-orders'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import SkeletonCard from './skeleton-card'

export function MonthlyCanceledOrdersCard() {
  const { data: monthlyCanceledOrders } = useQuery({
    queryKey: ['metrics', 'monthly-canceled-orders'],
    queryFn: getMonthlyCanceledOrders,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyCanceledOrders ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyCanceledOrders.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyCanceledOrders.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthlyCanceledOrders.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthlyCanceledOrders.diffFromLastMonth}%
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
