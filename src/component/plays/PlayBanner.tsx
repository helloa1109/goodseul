import React from 'react';
import FontRed from './FontRed';
type csProps = {
    src: string,
    str: string,
    order: number,
    str2?: string,
}
const PlayBanner = ({ src, str, str2, order }: csProps) => {
    return (
        <li style={{
            backgroundImage:
                order % 2 === 0
                    ? `linear-gradient(75deg,rgba(255,255,255,1) 25%,rgba(255,255,255,0) 65%),url(${src})`
                    : `linear-gradient(105deg,rgba(255,255,255,0) 25%,rgba(255,255,255,1) 65%),url(${src})`,
            backgroundPosition:
                order % 2 === 0
                    ? `right`
                    : `left`,
            alignItems:
                order % 2 === 0
                    ? `flex-start`
                    : `flex-end`,
        }}>
            <FontRed str={str} />
            {str2}
        </li>
    );
};

export default PlayBanner;