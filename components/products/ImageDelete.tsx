"use client"

import { useState } from 'react'
import { getImagePath } from '@/src/utils'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'


export default function ImageDelete({image} : {image: string | undefined}) {
    const [imageUrl, setImageUrl] = useState('')

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if(result.event === 'success') {
                    widget.close()
                    // @ts-ignore
                    setImageUrl(result.info?.secure_url)
                }
            }}
            uploadPreset='kqkyhg4s'
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (
                <>
                <div className='space-y-2'>
                    <label className='text-slate-800'>Imagen Producto</label>                  
                    <div className='relativ  p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'>                       
                            {image && !imageUrl && (
                                <div className='space-y-2'>
                                    <div className='relative w-64 h-64'>
                                        <Image
                                            fill
                                            src={getImagePath(image)}
                                            alt="Imagen Producto"
                                            style={{objectFit: 'contain'}}
                                        />
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
                </>
            )}
        </CldUploadWidget>
    )
}
