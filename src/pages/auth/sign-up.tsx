import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Link } from "react-router-dom";
const signUpForm = z.object({
    email: z.string().email(),
    restaurantName: z.string(),
    managerName: z.string(),
    telephone: z.string()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()



    function handleSignUp(data: SignUpForm) {
        console.log("🚀 ~ handleSignUp ~ data:", data)
        toast.success("Link enviado para o seu email!", {
            action: {
                label: "reenviar",
                onClick: () => handleSignUp(data)
            }
        })
    }


    return (
        <>


            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in">Fazer login</Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar conta
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro e acompanhe suas vendas!
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input id="restaurantName" type="restaurantName"  {...register("restaurantName")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu nome</Label>
                            <Input id="managerName" type="managerName"  {...register("managerName")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email"  {...register("email")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="telephone">Seu celular</Label>
                            <Input id="telephone" type="telephone"  {...register("telephone")} />
                        </div>

                        <Button className="w-full" type="submit" disabled={isSubmitting}>
                            Acessar painel
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você concorda com nossos{' '}
                            <a href="" className="underline underline-offset-4">
                                termos de serviço
                            </a>{' '}
                            e{' '}
                            <a href="" className="underline underline-offset-4">
                                políticas de privacidade.
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}