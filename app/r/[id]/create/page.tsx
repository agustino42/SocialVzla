import { Card } from "@/components/ui/card";
import Image from "next/image";
import bird from '../../../../public/bird.png'
import { Separator } from "@/components/ui/separator";
import { text } from "stream/consumers";

const rules = [
    {
        id: 1,
        text: "Publica Tus Mejores Ideas y Compartelas",
    },
    {
        id: 2,
        text: "100% Confiable para ti ",
    },
    {
        id: 3,
        text: "Todos Los Derechos De autor Reservados",
    },
    {
        id: 4,
        text: "Publica y Vende En Cambalache Online"
    },
    {
        id: 5,
        text: "Busca Las mejores Comunidades para Compartir Airdrops"
    },
]


export default function CreatePostRoute() {
    return (
        <div className="max-w-[1000px] mx-auto flex gap-x-10 mt-4">
           
            <div className="w-[65%] flex flex-col gap-y-5">
                 <h1>Aqui ira LA seccion 1</h1>
            </div>

            <div className="w-[35%]">
            <Card className="flex flex-col p-4">
                <div className="flex items-center gap-x-2">
                <Image className="h-16 w-11" src={bird} alt="bird" />
                <h1 className="font-extrabold">Escribir un Post</h1>
                </div>
                <Separator className="mt-2" /> 

                <div>
                    {rules.map((item) => (
                        <div key={item.id}>
                       <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Card> 

            </div>
        </div>
    )
}