"use server"

import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteProduct(id:number) {
    try {
        await prisma.product.delete({
            where: {
                id
            }
        })
        revalidatePath('/admin/products')
        return { success: true }
    } catch (error) {
        console.error("Error deleting product:", error)
        return { success: false, error: "Failed to delete product" }
    }
}