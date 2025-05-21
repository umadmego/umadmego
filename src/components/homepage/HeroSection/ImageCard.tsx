'use server'

import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
    image: any
}

function ImageCard(props: ImageCardProps) {
    const {image} = props

    'use cache'

    return (
        <Image
            src={image}
            alt=''
            className={'w-[243px] min-h-[331px] object-cover h-auto'}
            placeholder='blur'
            priority
        />
    );
}

export default ImageCard;
