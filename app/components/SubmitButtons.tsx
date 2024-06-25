"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton({ text }: {text: string}) {
    const {pending} = useFormStatus()
    return (
       <>
       {pending ? (
        <Button disabled>
            <Loader2  className="mr-2 w-4 h-4 animate-spin"/>
            Por favor Espere 5 Segundos
        </Button>
       ): (
        <Button type="submit">{text}</Button>
       )}
       </>
    )
}

export function SaveButton() {
 const {pending} = useFormStatus()  
 return (
    <>
    {pending ? 
    <Button size="sm" className="mt-2 w-full" disabled>
        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
        Por Favor Espere 5 Segundos!!🕑
    </Button> 
    : 
    <Button size="sm" className="mt-2 w-full" type="submit">Guardar</Button>   
    }
    </>
 ) 
}
