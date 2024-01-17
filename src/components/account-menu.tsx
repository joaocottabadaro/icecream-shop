// interface Props { }

import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function AccountMenu() {
    return (
        <DropdownMenu  >

            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none"> Icecream shop
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
                <DropdownMenuLabel className="flex flex-col">
                    <span> joao</span>
                    <span className="text-xs font-normal text-muted-foreground"> joao@gmail.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem >
                    <Building className="mr-2 h-4 w-4" />
                    <span> Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-primary dark">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span> Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
