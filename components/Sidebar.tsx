import React from 'react'
import {
  PresentationChartBarIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
function Sidebar() {
  return (
    <div className="fixed top-0 z-[700] inline-block h-[100%] w-36 bg-[#373330]">
      <nav>
        <ul className="text-sm text-quick-silver">
          <li className="flex cursor-pointer flex-col items-center justify-center p-4 hover:bg-dark-puce hover:text-isabelline">
            Home
          </li>
          <hr className="m-auto  w-[60%] text-gray-500" />
          <li className="flex cursor-pointer flex-col items-center justify-center p-4 hover:bg-dark-puce hover:text-isabelline">
            <PresentationChartBarIcon className="h-14 w-14" />
            Dashboard
          </li>
          <li className="flex cursor-pointer flex-col items-center justify-center p-4 hover:bg-dark-puce hover:text-isabelline">
            <ShoppingCartIcon className="h-14 w-14" />
            Products
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
