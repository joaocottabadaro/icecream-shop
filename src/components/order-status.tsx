export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  let statusColor = 'bg-slate-400'

  console.log(orderStatusMap[status])

  if (status === 'pending') {
    statusColor = ' bg-slate-400'
  } else if (status === 'canceled') {
    statusColor = ' bg-rose-400'
  } else if (status === 'delivered') {
    statusColor = ' bg-emerald-400'
  } else if (status === 'delivering' || status === 'processing') {
    statusColor = ' bg-amber-500'
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${statusColor}`} />

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
