import React from 'react'

export default function LinkOut({link, cls, children}) {
    return (
        <a 
            href={link} 
            className={cls} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}
