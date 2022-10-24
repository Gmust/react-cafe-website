import React from 'react';
import {useWindowDimensions} from "../../hooks/react";

const Map = () => {

    const {height,width} = useWindowDimensions();

    return   <iframe scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas"
                     src="https://maps.google.com/maps?width=593&amp;height=469&amp;hl=en&amp;q=Bar%20Tylko%20u%20Nas%20Poznan+(Bar%20Tylko%20u%20Nas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                     width={width<500? "300" : "400"} height="400" frameBorder="0"></iframe>
};

export default Map;