// interface Props { }

import { Table, TableBody, TableHead, TableHeader } from "@/components/ui/table";
import { OrderTableRow } from "./orders/order-table-row";
import { OrderTableFilters } from "./orders/order-table-filters";
import Pagination from "@/components/pagination";

export default function Orders() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text 3xl font-bold tracking-tight">
                    Pedidos
                </h1>
            </div>

            <div className="space-y-2.5">
                <OrderTableFilters />

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableHead className="w-[64px]"></TableHead>
                            <TableHead className="w-[140px]">Id</TableHead>
                            <TableHead className="w-[140px]">Realizado há</TableHead>
                            <TableHead className="w-[180px]">Status</TableHead>
                            <TableHead >Cliente</TableHead>
                            <TableHead className="w-[140px]">Valor total</TableHead>
                            <TableHead className="w-[164px]"></TableHead>
                            <TableHead className="w-[132px]"></TableHead>
                        </TableHeader>
                        <TableBody>
                            <OrderTableRow />
                        </TableBody>
                    </Table>

                </div>

                <Pagination pageIndex={0} totalCount={105} itemsPerPage={5} />
            </div>
        </>
    )
}
