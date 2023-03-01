import React, { Component, useEffect, useState } from 'react';
import { NavLink, NavLinkProps, To } from 'react-router-dom';


interface IButtonNavlink {
    to: string,
    name: string,
    className: string,

}

const ButtonNavlink = ({ to, name, className }: IButtonNavlink) => {
    return (
        <NavLink
            to={to}>
            <button
                className={className}>
                {name}
            </button>
        </NavLink>
    );
    // 'btn btn-outline-primary ml-2'

}

export default ButtonNavlink;