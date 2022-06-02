import React from 'react'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import styled from '@emotion/styled'

export default function FilterBar() {
  return (
    <FilterWrap className='flex justify-around mb-8 mt-4 items-center'>
      <ul  className='flex menu-filter'>
				<li><a href="#">All order</a></li>
				<li><a href="#">Completed</a></li>
				<li><a href="#">Pending</a></li>
		</ul>

		<div class="flex items-center">
			<div class="relative">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<BsFillCalendarDateFill class="h-5 w-5 text-gray-500" />
					</div>
					<input name="start" type="date" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"/>
				</div>
			<span class="mx-4 text-gray-500">to</span>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<BsFillCalendarDateFill class="h-5 w-5 text-gray-500" />
				</div>
				<input name="end" type="date" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"/>
			</div>
			</div>
		</FilterWrap>

  )
}

const FilterWrap = styled.div`
	.menu-filter{
		column-gap: 1rem;
	}
`
