import React from 'react';

type csProps = {
    str:string,
    size?:number
}

const FontRed = ({str,size}:csProps) => {
    return (
        <span className='spanRed'
        style={{
            fontSize:`${size}px`
        }}>
            {str}
        </span>
    );

};


export default FontRed;