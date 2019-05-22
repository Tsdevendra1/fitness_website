import * as React from 'react';

interface FooterProps {
    testString: string
}

export default function Footer({testString}: FooterProps) {

    return (
        <div className="nav-bar-wrapper">
            <h1>{testString}</h1>
            <h4>This is the Footer</h4>
        </div>
    )
}

