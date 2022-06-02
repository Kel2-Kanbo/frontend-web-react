import React from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {BiEdit} from "react-icons/bi"
import {AiOutlineInfoCircle} from "react-icons/ai"

export default function ListItem() {
  return (
    <tr className='border rounded-lg pt-12'>
      <td>1</td>
      <td>yaya</td>
      <td>1 juni 2022</td>
      <td>12 juni 2022</td>
      <td>fl 1, room 2,..</td>
      <td>12.000.000</td>
      <td>Completed</td>
      <td className='border-none'><BiEdit/></td>
      <td className='border-none'><RiDeleteBin6Line/></td>
      <td className='border-none'><AiOutlineInfoCircle/></td>

    </tr>
  )
}
