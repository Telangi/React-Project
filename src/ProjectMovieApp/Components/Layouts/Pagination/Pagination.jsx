import React from 'react'
import  Button from '../../UI/Button/Button'
import './Pagination.scss'

const Pagination = ({handlePrev,handleNext,page}) => {
  return (
	<div className='pagination'>
	<Button title='Prev' onClick={handlePrev} disabled={page===1} />
		<span>{page}</span>
		<Button title='Next' onClick={handleNext} />
	</div>
  )
}

export default Pagination