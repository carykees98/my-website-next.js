import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { StringLiteral } from 'typescript'



export default function Home() {
  let currentPage: string = 'Home'

  return (
    <>
      <Head>
        <title>{currentPage}</title>
      </Head>

      <div className="bg-slate-800">
        <div className="flex text-white">

        </div>
      </div>
    </>
  )
}
