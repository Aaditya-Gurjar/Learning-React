import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'

function Pagination() {
  const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center'>
      <div className=' flex w-11/12 max-w-[550px] justify-between '>
      <div className='flex gap-3'>
      { page > 1 &&
        (<button className='rounded border text-xs font-bold border-gray-300 bg-gray-200 p-1.5' onClick={()=> handlePageChange(page-1)}>Previous</button>)
      }

      {
        page < totalPages &&
        (<button className='rounded border text-xs font-bold  border-gray-300 bg-gray-200 p-1.5'  onClick={()=> handlePageChange(page+1)}>Next</button>)
      }
      </div>

      <p className='font-bold text-sm '>{page} of {totalPages} </p>
      </div>
    </div>
  )
}

export default Pagination