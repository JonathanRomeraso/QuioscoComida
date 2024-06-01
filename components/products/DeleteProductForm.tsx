"use client"
import { deleteProduct } from "@/actions/delete-product-action"
import { ProductSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function DeleteProductForm({children}: {children : React.ReactNode}) {
    const router = useRouter()
    const params = useParams()
    const id = +params.id!

    const [showConfirm, setShowConfirm] = useState(false)



    const handleDelete = async () => {
        const response = await deleteProduct(id)
        if (response.success) {
            toast.success('Producto eliminado correctamente')
            router.push('/admin/products')
        } else {
            toast.error(response.error)
        }
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            {children}
            <button
                onClick={() => setShowConfirm(true)}
                className="bg-red-600 hover:bg-red-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >
                Eliminar Producto
            </button>
            {showConfirm && (
                <div className="modal-overlay">
                <div className="confirmation-modal">
                    <p>¿Estás seguro de que deseas eliminar este producto?</p>
                    <button
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-800 text-white p-2 uppercase font-bold cursor-pointer"
                    >
                        Sí
                    </button>
                    <button
                        onClick={() => setShowConfirm(false)}
                        className="bg-gray-600 hover:bg-gray-800 text-white p-2 ml-3 uppercase font-bold cursor-pointer"
                    >
                        No
                    </button>
                </div>
            </div>
            )}
        </div>
    )
}
