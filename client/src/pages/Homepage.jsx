import React, { useEffect } from 'react'
import {useProductStore} from "../store/useProductStore"
import { Loader2, PlusCircleIcon, RefreshCwIcon } from 'lucide-react'
import ProductCard from '../components/ProductCard'

const Homepage = () => {
  const {products, productsLoading, fetchProducts} = useProductStore()

  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex items-center justify-between mb-8'>
        <button className='btn rounded-sm glass btn-primary'>
          <PlusCircleIcon size={20}/>
          Add Product
        </button>

        <button className='btn btn-ghost btn-circle' onClick={fetchProducts}>
          <RefreshCwIcon size={20}/>
        </button>
      </div>

      <div>
        {productsLoading ? (
          <Loader2 className='animate-spin' size={40}/>
        ) : (
          <div>
            {products.length > 0 ? 
            (
              products.map(product => (
                <div key={product.id} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  <ProductCard key={product.id} product={product} />
                </div>
              ))
            ) : 
            (
              <div className='text-4xl text-pretty'>No Products Found</div>
            )
          }
          </div>
        )}
      </div>
    </div>
  )
}

export default Homepage