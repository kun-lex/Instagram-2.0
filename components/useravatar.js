import React from 'react'
import faker from '@faker-js/faker';

 
const Useravatar = () => {
    const imageUrl = faker.image.avatar();
    return <img src={imageUrl} alt="Avatar" />;
};


export default Useravatar;