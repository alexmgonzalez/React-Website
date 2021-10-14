import React from 'react'

function ProjectCardItem(props) {
    return (
        <>
            <li className='cards__items'>
                <a href={props.download} download={props.downloadLabel}>
                    <figure className = 'cards__item__pic-wrap' data-category={props.label}>
                        <img src = {props.src} alt='1st image' className = 'cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}

export default ProjectCardItem
