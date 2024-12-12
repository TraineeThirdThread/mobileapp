import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function AppIcon() {
    return (<Svg width="25%" height="20%" viewBox="0 0 24 24" fill="none" >
        <Path d="M3 6.29999V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.29999H3Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
        <Path d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
    );
}
