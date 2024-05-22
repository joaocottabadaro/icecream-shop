// interface Props { }

import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonCard() {
  return (
    <>
      <Skeleton className="h-7 w-24" />
      <Skeleton className="h-4 w-52" />
    </>
  )
}
