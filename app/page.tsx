import { Card } from "@/components/ui/card";
import Image from "next/image";
import Banner from '../public/VzlaSocial.gif'
import HelloImage from '../public/bird.png'
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<div className="max-w-[1000px] mx-auto flex gap-x-10 mt-4">
  

  <div className="w-[65%] flex flex-col gap-y-5]">
   <h1>Hola desde el Lado izquierdo</h1>
  </div>

  <div className="w-[35%]">
  <Card>
  <Image 
   src={Banner}
   alt="Banner"
   width={350}
   height={300}
  />
  <div className="p-2">
    <div className="flex items-center">
    <Image  src={HelloImage} alt="Hello Image" className="w-20 h-20 -mt-5"/>
    <h1 className="font-extrabold pl-3 ">Vzla-Social</h1>
    </div>
    <p className="text-sm text-muted-foreground pt-2">Ver La pantalla Principal y Ver LAs demas Publicaciones</p>

    <Separator className="my-5" />

  <div className="flex flex-col gap-y-3">
  <Button>
      Crear Post
    </Button>
    <Button>
      Crear Comunidad
    </Button>
  </div>

  </div>
  </Card>
  </div>
</div>
  );
}
