import React from 'react';

import { Content } from '../content/content.component'

import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div style={{ 
                backgroundImage: `url(${imageUrl})`
             }} className="background-image" />
            <Content title={ title }/>
        </div>
    );
};