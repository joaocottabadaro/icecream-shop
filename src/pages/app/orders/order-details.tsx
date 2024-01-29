import { useQuery } from '@tanstack/react-query'
import { DateTime } from 'luxon'

// import { DateTime } from 'luxon'
import { getOrderDetails } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface OrderDetailsProps {
  orderId: string

  openModal: boolean
}
export function OrderDetails({ orderId, openModal }: OrderDetailsProps) {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: openModal,
  })
  console.log('🚀 ~ OrderDetails ~ order:', order)

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId}</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      {order ? (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <OrderStatus status={order.status} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telephone
                </TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.phone ?? 'Não informado'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  {order.customer.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex justify-end">
                  {DateTime.fromISO(order.createdAt, {
                    locale: 'pt',
                  }).toRelative()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order?.orderItems.map((orderItem) => {
                return (
                  <TableRow key={orderItem.id}>
                    <TableCell>{orderItem.product.name}</TableCell>
                    <TableCell className="text-right">
                      {orderItem.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {(orderItem?.priceInCents / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: `BRL`,
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {(
                        (orderItem.quantity * orderItem?.priceInCents) /
                        100
                      )?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: `BRL`,
                      })}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right font-medium">
                  {' '}
                  {(order.totalInCents / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: `BRL`,
                  })}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      ) : (
        <div> Loaidn</div>
      )}
    </DialogContent>
  )
}
