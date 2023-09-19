import React from 'react';
import FontRed from './FontRed';
type csProps = {
    src: string,
    str: string,
    str2?: string,
}
const PlayBanner = ({ src, str, str2 }: csProps) => {
    return (
        <li>
            <div>
                <FontRed str={str} /><br />
                {str2}
            </div>
        </li>
    );
};

export default PlayBanner;