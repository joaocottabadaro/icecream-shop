import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Check, Search, X } from 'lucide-react'
import { DateTime } from 'luxon'
import { useState } from 'react'

import { approveOrder } from '@/api/approve-order'
import { cancelOrder } from '@/api/cancel-order'
import { deliverOrder } from '@/api/deliver-order'
import { dispatchOrder } from '@/api/dispatch-order'
import { GetOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { queryClient } from '@/lib/react-query'

import { OrderDetails } from './order-details'

interface OrderTableRowProps {
  orderId: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

export function OrderTableRow(order: OrderTableRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { orderId, total, status, createdAt, customerName } = order

  function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
    const OrdersListCached = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['orders'],
    })

    OrdersListCached.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status }
          }
          return order
        }),
      })
    })
  }
  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'canceled')
      },
    })

  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'processing')
      },
    })

  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivering')
      },
    })

  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivered')
      },
    })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button size="icon" variant="outline" title="Detalhes do pedido">
              <Search className="h-4 w-4" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails orderId={orderId} openModal={isModalOpen} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{orderId}</TableCell>
      <TableCell className="text-muted-foreground">
        {DateTime.fromISO(createdAt, {
          locale: 'pt',
        }).toRelative()}
      </TableCell>

      <TableCell>
        <OrderStatus status={status} />
      </TableCell>
      <TableCell className="font-medium">{customerName}</TableCell>

      <TableCell className="font-medium">
        {(total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: `BRL`,
        })}
      </TableCell>

      <TableCell>
        {order.status === 'pending' && (
          <Button
            variant="outline"
            disabled={isApprovingOrder}
            size="sm"
            onClick={() => approveOrderFn({ orderId: order.orderId })}
          >
            <Check className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant="outline"
            disabled={isDispatchingOrder}
            size="sm"
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Em entrega
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            variant="outline"
            disabled={isDeliveringOrder}
            size="sm"
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell>

      <TableCell>
        <Button
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isCancelingOrder
          }
          variant="ghost"
          size="sm"
          onClick={() => {
            cancelOrderFn({ orderId: order.orderId })
          }}
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
