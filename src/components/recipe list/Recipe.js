import React from 'react'


const Recipe = ({ name, image, author}) => {
    return (
        <div className="recipe">
            <div className="img">
                <img src={image} />
            </div>
            <div className="text">
                <div className='name'>{name}</div>
                <div className="author">{author}</div>
            </div>
        </div>
    )
}
export default Recipe