import React from 'react';

export const Content = ({ title }) => {
    return (
        <div className="content">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className ="subtitle">SHOP NOW</span>
        </div>
    );
};