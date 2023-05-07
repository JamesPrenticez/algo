import React, { type ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {IData} from '../data/Idata'
import Link from "next/link";

const Card = ({ item }: { item: IData}): ReactElement => {
  const { id, title, img, difficulty, slug } = item;
  return (
    <Link href="/problems/two-number-sum">
      <motion.li 
        className="relative rounded-md cursor-pointer select-none border-2 border-sky-500"
        tabIndex={0}
        layoutId={id}
      >
        <div className="flex items-center h-full w-full rounded-md px-2 space-x-5">
          <h1 className="flex-grow truncate">{id}. {title}</h1>
          <div 
            className={`
              rounded-full
              h-2
              w-2
              ${difficulty === 'easy' ? 'bg-green-500' :
              difficulty === 'medium' ? 'bg-orange-500'
              : 'bg-red-500'}
              justify-self-end
            `}/>
        </div>
      </motion.li>
    </Link>
  )
};

export default Card