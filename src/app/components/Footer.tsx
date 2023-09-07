import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto p-12 flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
        </Link>
        <p className="text-slate-600">Vinicius Rubia</p>
      </div>
    </footer>
  )
}
