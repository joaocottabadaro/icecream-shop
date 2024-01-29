import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagedRestaurantResponse,
} from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update-profile'
import { queryClient } from '@/lib/react-query'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1).nullable(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>
export function StoreProfileDialog() {
  const { mutateAsync: updateProfilefn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cachedData } = updateRestaurantCache({ name, description })

      return { previousProfile: cachedData }
    },
    onError(_, __variables, context) {
      if (context?.previousProfile)
        updateRestaurantCache(context?.previousProfile)
    },
  })

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function updateRestaurantCache({ name, description }: StoreProfileSchema) {
    const cachedData = queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managed-restaurant',
    ])

    if (cachedData) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cachedData,
          name,
          description,
        },
      )
    }

    return { cachedData }
  }

  async function handleProfileChange(data: StoreProfileSchema) {
    try {
      await updateProfilefn(data)
      toast.success('Dados atualizados com sucesso! ')
    } catch {
      toast.error('Falha ao atualizar perfil!')
    }
  }
  return (
    <DialogContent>
      <DialogHeader>Perfil de loja</DialogHeader>
      <DialogDescription>Atualizar dados da loja</DialogDescription>

      <form onSubmit={handleSubmit(handleProfileChange)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'ghost'} type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={isSubmitting} type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
