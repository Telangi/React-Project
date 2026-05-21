import {formatDateToDDMMYYYY} from '../../../utils/formatdate'
import './Card.scss'

export const Card = ({children}) => {
  return (
    <div className='card'>
        {children}
      
    </div>
  )
}
export const CardTitle =({title}) =>{
    return(
        <div className='card-title'>
            {title}
        </div>

    )
}
export const CardImage =({src}) =>{
    return (
        <div className='card-image'>
            <img src={src} alt='movie poster' />
        </div>
    )

}
export const CardDescription=({description}) =>{
    return (
        <div className='card-description'>
            {description}
        </div>
    )
}
export const CardRating =({rating})=>{
    return (
        <div className='card-rating'>
            Rating:{rating}
        </div>
    )
}
export const CardReleaseDate = ({releaseDate})=>{
	return(
		<div className='card-release-date'>	
			Release Date: {formatDateToDDMMYYYY(releaseDate)}
		</div>
	)

}
