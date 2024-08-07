"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { Prisma } from "@prisma/client";
import { JSONContent } from "@tiptap/react";


export async function updateUsername(prevState: any, formData: FormData) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user) {
        return redirect("/api/auth/login");
    }

    const username = formData.get('username') as string;

    try {
        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                userName: username,
            },
        });

        return {
            message: "Cambio de Nombre Exitoso..✅",
            status: "green",
        };
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return {
                    message: 'Ya Otro Usuario Tiene ese Titulo,Cambialo por otro Diferente ❌',
                    status: "error",
                };
            }
        }
        throw e;
    }
}

export async function createComunity(prevState: any, formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/login");
    }

    try {
        const name = formData.get('name') as string;

        const data = await prisma.subreddit.create({
            data: {
                name: name,
                userId: user.id,
            },
        });

        return redirect("/");
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return {
                    message: 'Ya Otro Usuario Tiene ese Titulo,Cambialo por otro Diferente, 🚨🚨 ',
                    status: "error",
                };
            }
        }
        throw e;
    }
}

export async function UpdateSubDescription(prevState: any, formData: FormData) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user) {
        return redirect("/api/auth/login");
    }

    try {
        const subName = formData.get('subName') as string;
        const descripcion = formData.get('descripcion') as string;

        await prisma.subreddit.update({
            where: {
                name: subName,
            },
            data: {
                description: descripcion,
            },
        });

        return {
            status: "green",
            message: "Cambio realizado a tu Biblografia 🎉🎉",

        };

    } catch (e) {
        return {
            status: "error",
            message: "Algo a Fallado, Vuelve a Intentar!"
        }
    }
}

export async function createPost(
    { jsonContent }: { jsonContent: JSONContent | null },
     formData: FormData
    ) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/login");
    }

    const title = formData.get("title") as string;
    const imageUrl = formData.get("imageUrl") as string | null;
    const subName = formData.get("subName") as string;


    await prisma.post.create({
        data: {
            title: title,
            imageString: imageUrl ?? undefined,
            subName: subName,
            userId: user.id,
            textContent: jsonContent ?? undefined,
        },
    });

    return redirect("/");
}