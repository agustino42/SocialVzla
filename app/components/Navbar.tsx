import React from 'react'
import Image from 'next/image'
import Logosocial from "../../public/logo1-sinbg.png";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './Themetoggle';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { UserDropdown } from './UserDropdown';


export async function Navbar() {
   const {getUser} = getKindeServerSession()
   const user = await getUser()
  return (
   <nav className='h-[17vh] w-full flex items-center border-b px-5 lg:px-25 justify-between'>
     <Link href="/" className='flex items-center gap-x-3'>
        <Image 
        src={Logosocial}
        alt='Logo de la red social vzla-activa'
        className='align-top'
        width={360}
        height={360}
        />
     </Link>

     <div className='justify-center '>
 
<div className='flex items-center gap-x-4'>
   <ThemeToggle />
   {user ? (
<UserDropdown userImage={user.picture}/>
   ): (
     <div className='flex items-center gap-x-4'>
       <Button variant='outline' asChild>
      <RegisterLink>
      Sign Up
      </RegisterLink>
      </Button>

   <Button asChild>
      <LoginLink>
         Log in
      </LoginLink>
   </Button>
     </div>
   )}
  
</div>


    </div>

    
   </nav>
  );
}
