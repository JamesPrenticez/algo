import React, {useState, type ReactNode} from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronDown } from "react-icons/hi";

interface CollapsibleProps {
  title: string;
  difficulty: "easy" | "medium" | "hard"
  children: ReactNode
}

const Collapsible = ({title, difficulty, children}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div>

        <div className="p-3 bg-gray-200 grid grid-cols-3 items-center w-full">
          <h1 className='text-3xl'>{title}</h1>
          <h1 className='text-2xl font-medium ml-auto'>{difficulty}</h1>
          <div className='ml-auto'>
            {isOpen ?
              <HiOutlineChevronDown onClick={() => setIsOpen(false)} className='h-12 w-12 cursor-pointer transform transition-all hover:scale-125 duration-150 ease-in-out select-none'/>
              :
              <HiOutlineChevronLeft onClick={() => setIsOpen(true)} className='h-12 w-12 cursor-pointer transform transition-all hover:scale-125 duration-150 ease-in-out select-none'/>
            }
          </div>
        </div>

      {isOpen &&
        <div>
            <div className="p-3 bg-gray-100 flex justify-between items-center">
              {children}
            </div>
        </div>
      }

      </div>
  )
}

export default Collapsible
//https://medium.com/edonec/build-a-react-collapsible-component-from-scratch-using-react-hooks-typescript-73dfd02c9208
