import React from 'react'
import ListOrder from '../Components/ListOrder'
import FilterBar from '../Components/FilterBar'

export default function ManageCustOrder() {
  return (
    <div className='w-4/5 border absolute inset-y-0 right-0'>
        <h1 className='text-4xl text-left m-4'>Order</h1>
        <FilterBar />
        <ListOrder/>
    </div>
  )
}
