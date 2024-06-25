import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import {LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components'

interface iAppProps {
    userImage: string | null;
}

export function UserDropdown({ userImage }: iAppProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

           <img
           src={userImage ?? 
            "https://www.vecteezy.com/vector-art/5176777-user-avatar-line-style"}
          alt="logo" 
           className="rounded-full h-8 w-8 hidden lg:block"
           />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                   <Link className="w-full" href="/r/create">
                    Crea Tu Comunidad 📋
                   </Link> 
                </DropdownMenuItem>
                <DropdownMenuItem>
                   <Link className="w-full" href="/crear">
                    Crea Un Post💬
                   </Link> 
                </DropdownMenuItem>
                <DropdownMenuItem>
                   <Link className="w-full" href="/settings">
                    Configuracion⚙
                   </Link> 
                </DropdownMenuItem>
  {/**Separador activo .. pendiente perro caliente  */}
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <LogoutLink className="w-full">
                        Cerrar Seccion ❌
                    </LogoutLink>

                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}