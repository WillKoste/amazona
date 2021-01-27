import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({color, rating, numberReviews}) => {
	return (
		<div className='ratings'>
			<span style={{color}}>
				<i style={{color}} className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
			</span>
			<span style={{color}}>
				<i style={{color}} className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
			</span>
			<span style={{color}}>
				<i style={{color}} className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
			</span>
			<span style={{color}}>
				<i style={{color}} className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
			</span>
			<span style={{color}}>
				<i style={{color}} className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
			</span>
			<p style={{marginTop: '.4rem'}}>
				<small>{numberReviews} Reviews</small>
			</p>
		</div>
	);
};

Rating.defaultProps = {
	color: '#f0c040'
};

Rating.propTypes = {
	color: PropTypes.string.isRequired
};

export default Rating;
