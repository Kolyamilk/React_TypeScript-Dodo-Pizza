import React from 'react'

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, borderRadius: '22px'}}
            onClick={onClick}
        />
    );
}

export default SamplePrevArrow