"use client";

import { createComunity } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const initalState = {
    message: "",
    status: "",
};

export default function SubredditPage () {
    const [state, formAction] = useFormState(createComunity, initalState);
    const { toast } = useToast();

    useEffect(() => {
        if(state.status === 'error') {
        toast({
            title: 'Error',
            description: state.message,
            variant: "destructive",
        });
        }
    }, [state, toast]);
    return (
        <div className="max-w-[1100px] mx-auto flex flex-col mt-4">
            <form action={formAction}>
                <h1 className="text-3xl font-extrabold tracking-tight">
                    Crear Comunidad
                </h1>
                <Separator className="my-4" />
                <Label className="text-lg">Nombre</Label>
                <p className="text-muted-foreground">
                Aqui puedes Escribir el Titulo de tu Comunidad👨‍👨‍👦‍👦</p>

                <div className="relative mt-3">
                    <p className="absolute left-0 flex items-center justify-center h-full text-muted-foreground">
                    R/
                    </p>
                    
                    <Input
                    name="name"
                    required
                    className="pl-6"
                    minLength={2}
                    maxLength={21}
                    />
                    
                </div>
             <p className="mt-1 text-destructive">{state.message}</p>


                <div className="w-full flex mt-5 gap-x-5 justify-end">
                <Button variant="secondary" asChild>
                <Link href="/">
                    Cancelar
                </Link>    
                </Button>  
                
                <SubmitButton text="Create Community"/>
                </div>
            </form>
            
        </div>
    )
}