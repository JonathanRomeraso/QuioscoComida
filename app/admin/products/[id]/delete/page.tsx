import { useRouter } from 'next/router'
import DeleteProductForm from "@/components/products/DeleteProductForm"
import ProductFormDelete from "@/components/products/ProductFormForDelete"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import GoBackButton from "@/components/ui/GoBackButton"
import { notFound, redirect } from "next/navigation"

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if(!product) {
        notFound()
    }

    return product
}
export default async function DeleteProductsPage({ params }: { params: { id: string } }) {
    
    const product = await getProductById(+params.id)
    return (
        <>
            <Heading>Eliminar Producto: {product.name}</Heading>

            <GoBackButton />
            <DeleteProductForm>
                <ProductFormDelete 
                    product={product}
                />
            </DeleteProductForm>
        </>
    )
}