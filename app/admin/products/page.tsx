import { redirect } from 'next/navigation'
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';




export default async function ProductsPage({searchParams} : { searchParams: {page: string}}) {
  return (
      <>
          <Heading>Administrar Productos</Heading>

      </>
  )
}
