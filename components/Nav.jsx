import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {motion} from 'framer-motion';
const Nav = ({linkStyles,underlineStyles,containerStyles}) => {
    const path=usePathname();
    const Links=[
        {
            title:'Home',
            path:'/'
        },
        {
         title:'portfolio',
         path:'/portfolio'
        },
        {
             title:'contact',
         path:'/contact'
        }
    ]
  return (
   <nav className={`${containerStyles}`}>
    {Links.map((link,i)=>(
        <Link
         href={link.path}
         key={i}
         className={`${linkStyles}`}
         >
            {link.path==path &&(<motion.span
            initial={{y:'-100%'}}
            animate={{y:0}}
            transition={{type:'tween'}}
            layoutId='underline'
            className={`${underlineStyles}`}

            >

            </motion.span>)}
            {link.title}
         </Link>
    ))
    }
   </nav>
  )
}

export default Nav