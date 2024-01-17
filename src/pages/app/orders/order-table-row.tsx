import { ArrowRight, Check, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrderDetails } from './order.details'

// interface OrderTableRowProps {}

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon" variant="outline" title="Detalhes do pedido">
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                1
            </TableCell>
            <TableCell className="text-muted-foreground">
                4 horas atras

            </TableCell>

            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-stone-500" />
                    <span className="font-medium text-muted-foreground">
                        Pendente
                    </span>

                </div>
            </TableCell>
            <TableCell className="font-medium">
                Geisa Nascimento da Silva
            </TableCell>

            <TableCell className="font-medium">
                R$ 500
            </TableCell>

            <TableCell >
                <Button variant="outline" size="sm">
                    <Check className="mr-2 h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>

            <TableCell >
                <Button variant="outline" size="sm">
                    <X className="mr-2 h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>

    )
}