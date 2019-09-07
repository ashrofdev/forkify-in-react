import React from 'react'


const Recipe = ({ name, image, author, click}) => {
    
    return (
        <div className="recipe" onClick={click}>
            <div className="img">
                <img src={image} alt="recipe img"/>
            </div>
            <div className="text">
                <div className='name'>{`${name.slice(0,17)}...`}</div>
                <div className="author">{author}</div>
            </div>
        </div>
    )
}
export default Recipe