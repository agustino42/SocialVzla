"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import bird from '../../../../public/bird.png'
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Speech, Text, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TipTapEditor } from "@/app/components/TipTapEditor";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { UploadDropzone } from "@/app/components/Uploadthing";
import { useState } from "react";
import { createPost } from "@/app/actions";
import { JSONContent } from "@tiptap/react";

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


export default function CreatePostRoute({
    params,
}: {
    params: { id: string };
}) {
    const [imageUrl, setImageUrl] = useState<null | string>(null);
    const [json, setJson] = useState<null | JSONContent>(null);
    const [title, setTitle] = useState<null | string>(null);

    const createPostReddit = createPost.bind(null, { jsonContent: json });
    return (
        <div className="max-w-[1000px] mx-auto flex gap-x-10 mt-4">

            <div className="w-[65%] flex flex-col gap-y-5">
                <h1 className="font-semibold">Nombre de la Comunidad: <Link href={`/r/${params.id}`} className="text-primary"> r/{params.id}</Link></h1>

                <Tabs defaultValue="post" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="post">
                            <Text className="h-4 w-4 mr-2" />
                            Publicaciones
                        </TabsTrigger>
                        <TabsTrigger value="image">
                            <Video className="h-4 w-4 mr-2" />
                            Imagenes Y Videos
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="post">
                        <Card>
                            <form action={createPostReddit}>
                                <input
                                 type="hidden" 
                                 name="imageUrl" 
                                 value={imageUrl ?? undefined} 
                             
                                 />

                                 <input type="hidden" name="subName" value={params.id} />
                                <CardHeader>
                                    <Label>Titulo</Label>
                                    <Input 
                                    required name="title" 
                                    placeholder="Titulo"
                                    value={title ?? undefined}
                                    onChange={(e) => setTitle(e.target.value)}
                                    />

                                    <TipTapEditor setJson={setJson} json={json} />
                                </CardHeader>

                                <CardFooter>
                                    <SubmitButton text="Crear Publicacion" />
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                    {/**Parte de la imagenes */}
                    <TabsContent value="image">
                        <Card>
                            <CardHeader>
                            <UploadDropzone 
                            className="ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-label:text-primary ut-button:ut-uploading:bg-primary/50 ut-button:ut-uploading:after:bg-primary"
                            endpoint="imageUploader" 
                            onClientUploadComplete={(res) => {
                                setImageUrl(res[0].url);
                            }}
                            onUploadError={(error: Error) => {
                                alert('Error')
                            }} />
                            </CardHeader>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="w-[35%]">
                <Card className="flex flex-col p-4">
                    <div className="flex items-center gap-x-2">
                        <Image className="h-16 w-11" src={bird} alt="bird" />
                        <h1 className="font-extrabold text-primary">Escribir un Post</h1>
                    </div>
                    <Separator className="mt-2" />

                    <div className="flex flex-col gap-y-5 mt-5 font-extrabolds">
                        {rules.map((item) => (
                            <div key={item.id}>
                                <p className="font-mono font-semibold">{item.id}. {item.text}</p>
                                <Separator className="mt-2" />

                            </div>
                        ))}
                    </div>
                </Card>

            </div>
        </div>
    )
}