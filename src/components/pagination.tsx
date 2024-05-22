import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  pageIndex,
  totalCount,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / itemsPerPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {' '}
        Total de {totalCount} items(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button
            className=" h-8 w-8 p-0"
            variant="outline"
            disabled={pageIndex === 0}
            onClick={() => onPageChange(0)}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only"> Primeira página</span>
          </Button>

          <Button
            className=" h-8 w-8 p-0"
            variant="outline"
            disabled={pageIndex === 0}
            onClick={() => onPageChange(pageIndex - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only"> Página anterior</span>
          </Button>
          <Button
            className=" h-8 w-8 p-0"
            variant="outline"
            disabled={pages <= pageIndex + 1}
            onClick={() => onPageChange(pageIndex + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only"> Próxima página</span>
          </Button>

          <Button
            className=" h-8 w-8 p-0"
            variant="outline"
            onClick={() => onPageChange(pages - 1)}
            disabled={pages <= pageIndex + 1}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only"> Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
