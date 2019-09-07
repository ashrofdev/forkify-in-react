import React from 'react'


const Recipe = ({key, name, image, author}) => {
    return (
        <div className="recipe">
            <img src={image} />
            <div className='name'>{name}</div>
            <div className="author">{author}</div>
        </div>
    )
}
export default Recipe