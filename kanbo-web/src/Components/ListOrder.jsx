import React from 'react'
import ListItem from './ListItem'

export default function ListOrder() {
  return (
    <div>
      <table cellPadding="10px" className='m-auto border-collapse table-auto w-full' >
            <thead className='bg-gray-400 font-bold' >
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Order date</td>
                    <td>Rent date</td>
                    <td>Building</td>
                    <td>Price</td>
                    <td>Status</td>
                    <td className='border-none'></td>
                    <td className='border-none'></td>
                    <td className='border-none'></td>
                </tr>
            </thead>
            <tbody>
              <ListItem/>
            </tbody>
        </table>
    </div>
  )
}
