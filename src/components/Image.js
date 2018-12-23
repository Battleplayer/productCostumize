import React from 'react';
import Background from '../tie.png';
import './Image.css';


export default (props) => {
    const patternStyle = `matrix(${props.patternScale}, 0, 0, ${props.patternScale}, ${props.patternX},${props.patternY}) 
    rotate(${props.patternRotate} 1 1)` ;
    const imageStyle = {
        transform: `rotate(${props.imgRotateAngle}deg) scale(${props.imgScale})`,
        transformBox: 'fill-box'
    };
    const tieWrap = {background: `url(${Background}) center center no-repeat`};
    return (
        <div>
            <div id='image-wrapper'>
                <svg version="1.1" x="0px" y="0px" width="260" height="565"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 674 1466">
                    <pattern id="poupat" width="71.39" height="44.93" patternUnits="userSpaceOnUse"
                             patternContentUnits="objectBoundingBox"
                             patternTransform={patternStyle}
                             viewBox="0 0 71.39 44.93"
                             overflow="visible">
                        <g transform="translate(0,50)"
                           x='10'>
                            <path style={{fill: `${props.patternColor}`}}
                                  d="M20.71,0v-2.75H9.47v-0.08c1.28-1.09,2.19-2.45,2.6-4.07c0.34-1.36,0.26-2.79,0.15-4.22h5.09v-2.38h-5.39c-0.23-1.21-0.42-2.41-0.42-4.04c0-2.68,1.17-4.72,4.11-4.72c1.58,0,2.72,0.38,3.4,0.75l0.72-2.49c-0.79-0.49-2.15-0.94-4.11-0.94c-4.19,0-7.24,2.9-7.24,7.36c0,1.47,0.23,2.94,0.41,4.07H5.28v2.38h3.85c0.15,0.98,0.19,1.74,0.19,2.64c0,2.83-1.74,5.32-4.3,6.6V0H20.71z M20.71-44.93v-2.75H9.47v-0.08c1.28-1.09,2.19-2.45,2.6-4.07c0.34-1.36,0.26-2.79,0.15-4.22h5.09v-2.38h-5.39c-0.23-1.21-0.42-2.41-0.42-4.04c0-2.68,1.17-4.72,4.11-4.72c1.58,0,2.72,0.38,3.4,0.75l0.72-2.49c-0.79-0.49-2.15-0.94-4.11-0.94c-4.19,0-7.24,2.9-7.24,7.36c0,1.47,0.23,2.94,0.41,4.07H5.28v2.38h3.85c0.15,0.98,0.19,1.74,0.19,2.64c0,2.83-1.74,5.32-4.3,6.6v1.89H20.71z"/>
                            <path style={{fill: `${props.patternColor}`}}
                                  d="M56.41-22.47v-2.75H45.16v-0.08c1.28-1.09,2.19-2.45,2.6-4.07c0.34-1.36,0.26-2.79,0.15-4.22h5.09v-2.38h-5.39c-0.23-1.21-0.42-2.41-0.42-4.04c0-2.68,1.17-4.72,4.11-4.72c1.58,0,2.72,0.38,3.4,0.75l0.72-2.49c-0.79-0.49-2.15-0.94-4.11-0.94c-4.19,0-7.24,2.9-7.24,7.36c0,1.47,0.23,2.94,0.41,4.07h-3.51v2.38h3.85c0.15,0.98,0.19,1.74,0.19,2.64c0,2.83-1.74,5.32-4.3,6.6v1.89H56.41z"/>
                        </g>
                    </pattern>
                    <g id="myTie" fill={props.tieColor}>
                        <path
                            d="M472.1,1248.5c-0.6-16.6-1.2-33.1-1.8-49.7c-0.6-16.6-1.2-33.1-1.7-49.7c-0.6-16.6-1.2-33.2-1.7-49.8c-0.6-16.6-1.2-33.2-1.7-49.7c-0.6-16.6-1.2-33.1-1.8-49.7c-0.6-16.7-1.2-33.5-1.8-50.2c-0.6-16.4-1.2-32.8-1.8-49.1c-0.6-16.7-1.3-33.3-1.9-50c-0.6-16.6-1.3-33.1-1.9-49.7c-0.7-16.8-1.4-33.7-2.1-50.5c-0.7-16.7-1.4-33.5-2.1-50.2c-0.7-16.6-1.4-33.3-2.2-49.9c-0.7-16.7-1.5-33.3-2.3-50c-0.8-16.6-1.5-33.1-2.3-49.7c-0.8-16.4-1.8-32.8-3.3-49.1c-1.4-16.3-3.3-32.5-5.6-48.7c-2.3-16-5.1-31.9-8.4-47.7c-3.3-15.6-7.3-31.1-12-46.3c-4.8-15.4-10.3-30.6-16.8-45.4c-6.3-14.3-13.4-28.2-21-41.9c-3.5-6.4-7.1-12.7-10.4-19.1c1.3-0.2,1.5-1.4,1.7-2.5c0.4-1.6,0.8-3.2,1.3-4.8c0.8-2.9,1.7-5.8,2.7-8.6c2-5.8,4.3-11.5,6.9-17.1c5-10.9,10.6-21.5,15.7-32.4c5.2-11,10.1-22.2,14.5-33.5c0.1-0.2,0.5-0.9,0.4-1.1c-0.1-0.2-0.9-0.5-1-0.6c-0.7-0.4-1.3-0.8-2-1.2c-1.5-0.9-2.9-1.7-4.4-2.6c-2.7-1.5-5.4-3.1-8.2-4.5c-5.7-3.1-11.5-6-17.4-8.7c-11.6-5.4-23.6-10.1-35.8-13.9c-1.3-0.4-2.7-1-4.1-1.2c-1.2-0.2-2.8,0.6-4,0.9c-3.1,1-6.2,2-9.3,3c-5.9,2.1-11.8,4.3-17.6,6.8c-11.6,4.9-22.9,10.5-33.9,16.7c-2.9,1.6-5.7,3.3-8.5,4.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.4,0.1-0.5,0.3-0.2,0.6c0,0.3,0.3,0.8,0.4,1.1c0.3,0.7,0.6,1.4,0.9,2.2c0.6,1.5,1.2,3,1.8,4.5c2.3,5.7,4.8,11.4,7.4,17.1c10.3,22.7,23.4,44.4,29.9,68.6c0.4,1.4,0.7,2.8,1.1,4.2c0.2,0.9,0.5,1.7,1.6,1.9c-5.3,10.1-11,20.1-16.4,30.2c-5.4,10.1-10.4,20.4-15,30.9c-9.3,21.3-16.7,43.4-22.6,65.8c-6,22.9-10.5,46.1-14,69.5c-3.5,23.5-5.9,47.2-7.6,70.9c-1.7,24.2-2.6,48.4-3.8,72.6c-1.1,23.9-2.2,47.9-3.2,71.8c-1.1,24.2-2.1,48.4-3.1,72.5c-1,24.1-1.9,48.1-2.9,72.2c-0.9,24.1-1.8,48.1-2.7,72.2c-0.9,24-1.8,48.1-2.6,72.1c-0.9,24.2-1.7,48.5-2.5,72.7c-0.8,23.9-1.6,47.8-2.5,71.7c-0.8,24.4-1.7,48.8-2.5,73.1c-0.8,24.4-1.7,48.8-2.6,73.2c-0.1,3-0.2,6.1-0.3,9.1c-0.1,3-0.5,6.1-0.3,9.1c0.1,2.2,0.4,4.5,0.8,6.7c0.9,4.8,5.1,8.1,8.3,11.3c4,4,8,8,12.1,12.1c16.6,16.6,33.2,33.2,49.7,49.7c17.1,17.1,34.2,34.3,51.3,51.4c2.1,2.1,4.1,4.1,6.2,6.2c1.7,1.7,3.7,3,6.2,3.1c2.7,0.2,4.8-1.1,6.7-3c2.1-2.1,4.1-4.1,6.2-6.2c8.2-8.2,16.5-16.5,24.7-24.7c15.1-15.1,30.1-30.1,45.2-45.2c15.4-15.4,31-30.8,46.3-46.3c3-3.1,5.3-7.1,6.2-11.4c0.6-2.7,0.3-5.5,0.2-8.2C472.3,1254.5,472.2,1251.5,472.1,1248.5C472.1,1247.9,472.3,1253.1,472.1,1248.5z"/>
                        <path fill="url(#poupat)"
                              d="M472.1,1248.5c-0.6-16.6-1.2-33.1-1.8-49.7c-0.6-16.6-1.2-33.1-1.7-49.7c-0.6-16.6-1.2-33.2-1.7-49.8c-0.6-16.6-1.2-33.2-1.7-49.7c-0.6-16.6-1.2-33.1-1.8-49.7c-0.6-16.7-1.2-33.5-1.8-50.2c-0.6-16.4-1.2-32.8-1.8-49.1c-0.6-16.7-1.3-33.3-1.9-50c-0.6-16.6-1.3-33.1-1.9-49.7c-0.7-16.8-1.4-33.7-2.1-50.5c-0.7-16.7-1.4-33.5-2.1-50.2c-0.7-16.6-1.4-33.3-2.2-49.9c-0.7-16.7-1.5-33.3-2.3-50c-0.8-16.6-1.5-33.1-2.3-49.7c-0.8-16.4-1.8-32.8-3.3-49.1c-1.4-16.3-3.3-32.5-5.6-48.7c-2.3-16-5.1-31.9-8.4-47.7c-3.3-15.6-7.3-31.1-12-46.3c-4.8-15.4-10.3-30.6-16.8-45.4c-6.3-14.3-13.4-28.2-21-41.9c-3.5-6.4-7.1-12.7-10.4-19.1c1.3-0.2,1.5-1.4,1.7-2.5c0.4-1.6,0.8-3.2,1.3-4.8c0.8-2.9,1.7-5.8,2.7-8.6c2-5.8,4.3-11.5,6.9-17.1c5-10.9,10.6-21.5,15.7-32.4c5.2-11,10.1-22.2,14.5-33.5c0.1-0.2,0.5-0.9,0.4-1.1c-0.1-0.2-0.9-0.5-1-0.6c-0.7-0.4-1.3-0.8-2-1.2c-1.5-0.9-2.9-1.7-4.4-2.6c-2.7-1.5-5.4-3.1-8.2-4.5c-5.7-3.1-11.5-6-17.4-8.7c-11.6-5.4-23.6-10.1-35.8-13.9c-1.3-0.4-2.7-1-4.1-1.2c-1.2-0.2-2.8,0.6-4,0.9c-3.1,1-6.2,2-9.3,3c-5.9,2.1-11.8,4.3-17.6,6.8c-11.6,4.9-22.9,10.5-33.9,16.7c-2.9,1.6-5.7,3.3-8.5,4.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.4,0.1-0.5,0.3-0.2,0.6c0,0.3,0.3,0.8,0.4,1.1c0.3,0.7,0.6,1.4,0.9,2.2c0.6,1.5,1.2,3,1.8,4.5c2.3,5.7,4.8,11.4,7.4,17.1c10.3,22.7,23.4,44.4,29.9,68.6c0.4,1.4,0.7,2.8,1.1,4.2c0.2,0.9,0.5,1.7,1.6,1.9c-5.3,10.1-11,20.1-16.4,30.2c-5.4,10.1-10.4,20.4-15,30.9c-9.3,21.3-16.7,43.4-22.6,65.8c-6,22.9-10.5,46.1-14,69.5c-3.5,23.5-5.9,47.2-7.6,70.9c-1.7,24.2-2.6,48.4-3.8,72.6c-1.1,23.9-2.2,47.9-3.2,71.8c-1.1,24.2-2.1,48.4-3.1,72.5c-1,24.1-1.9,48.1-2.9,72.2c-0.9,24.1-1.8,48.1-2.7,72.2c-0.9,24-1.8,48.1-2.6,72.1c-0.9,24.2-1.7,48.5-2.5,72.7c-0.8,23.9-1.6,47.8-2.5,71.7c-0.8,24.4-1.7,48.8-2.5,73.1c-0.8,24.4-1.7,48.8-2.6,73.2c-0.1,3-0.2,6.1-0.3,9.1c-0.1,3-0.5,6.1-0.3,9.1c0.1,2.2,0.4,4.5,0.8,6.7c0.9,4.8,5.1,8.1,8.3,11.3c4,4,8,8,12.1,12.1c16.6,16.6,33.2,33.2,49.7,49.7c17.1,17.1,34.2,34.3,51.3,51.4c2.1,2.1,4.1,4.1,6.2,6.2c1.7,1.7,3.7,3,6.2,3.1c2.7,0.2,4.8-1.1,6.7-3c2.1-2.1,4.1-4.1,6.2-6.2c8.2-8.2,16.5-16.5,24.7-24.7c15.1-15.1,30.1-30.1,45.2-45.2c15.4-15.4,31-30.8,46.3-46.3c3-3.1,5.3-7.1,6.2-11.4c0.6-2.7,0.3-5.5,0.2-8.2C472.3,1254.5,472.2,1251.5,472.1,1248.5C472.1,1247.9,472.3,1253.1,472.1,1248.5z"/>
                    </g>
                    <g id="str301BRmaskG">
                        <defs>
                            <path id="str301BRmask"
                                  d="M472.1,1248.5c-0.6-16.6-1.2-33.1-1.8-49.7c-0.6-16.6-1.2-33.1-1.7-49.7c-0.6-16.6-1.2-33.2-1.7-49.8c-0.6-16.6-1.2-33.2-1.7-49.7c-0.6-16.6-1.2-33.1-1.8-49.7c-0.6-16.7-1.2-33.5-1.8-50.2c-0.6-16.4-1.2-32.8-1.8-49.1c-0.6-16.7-1.3-33.3-1.9-50c-0.6-16.6-1.3-33.1-1.9-49.7c-0.7-16.8-1.4-33.7-2.1-50.5c-0.7-16.7-1.4-33.5-2.1-50.2c-0.7-16.6-1.4-33.3-2.2-49.9c-0.7-16.7-1.5-33.3-2.3-50c-0.8-16.6-1.5-33.1-2.3-49.7c-0.8-16.4-1.8-32.8-3.3-49.1c-1.4-16.3-3.3-32.5-5.6-48.7c-2.3-16-5.1-31.9-8.4-47.7c-3.3-15.6-7.3-31.1-12-46.3c-4.8-15.4-10.3-30.6-16.8-45.4c-6.3-14.3-13.4-28.2-21-41.9c-3.5-6.4-7.1-12.7-10.4-19.1c1.3-0.2,1.5-1.4,1.7-2.5c0.4-1.6,0.8-3.2,1.3-4.8c0.8-2.9,1.7-5.8,2.7-8.6c2-5.8,4.3-11.5,6.9-17.1c5-10.9,10.6-21.5,15.7-32.4c5.2-11,10.1-22.2,14.5-33.5c0.1-0.2,0.5-0.9,0.4-1.1c-0.1-0.2-0.9-0.5-1-0.6c-0.7-0.4-1.3-0.8-2-1.2c-1.5-0.9-2.9-1.7-4.4-2.6c-2.7-1.5-5.4-3.1-8.2-4.5c-5.7-3.1-11.5-6-17.4-8.7c-11.6-5.4-23.6-10.1-35.8-13.9c-1.3-0.4-2.7-1-4.1-1.2c-1.2-0.2-2.8,0.6-4,0.9c-3.1,1-6.2,2-9.3,3c-5.9,2.1-11.8,4.3-17.6,6.8c-11.6,4.9-22.9,10.5-33.9,16.7c-2.9,1.6-5.7,3.3-8.5,4.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.4,0.1-0.5,0.3-0.2,0.6c0,0.3,0.3,0.8,0.4,1.1c0.3,0.7,0.6,1.4,0.9,2.2c0.6,1.5,1.2,3,1.8,4.5c2.3,5.7,4.8,11.4,7.4,17.1c10.3,22.7,23.4,44.4,29.9,68.6c0.4,1.4,0.7,2.8,1.1,4.2c0.2,0.9,0.5,1.7,1.6,1.9c-5.3,10.1-11,20.1-16.4,30.2c-5.4,10.1-10.4,20.4-15,30.9c-9.3,21.3-16.7,43.4-22.6,65.8c-6,22.9-10.5,46.1-14,69.5c-3.5,23.5-5.9,47.2-7.6,70.9c-1.7,24.2-2.6,48.4-3.8,72.6c-1.1,23.9-2.2,47.9-3.2,71.8c-1.1,24.2-2.1,48.4-3.1,72.5c-1,24.1-1.9,48.1-2.9,72.2c-0.9,24.1-1.8,48.1-2.7,72.2c-0.9,24-1.8,48.1-2.6,72.1c-0.9,24.2-1.7,48.5-2.5,72.7c-0.8,23.9-1.6,47.8-2.5,71.7c-0.8,24.4-1.7,48.8-2.5,73.1c-0.8,24.4-1.7,48.8-2.6,73.2c-0.1,3-0.2,6.1-0.3,9.1c-0.1,3-0.5,6.1-0.3,9.1c0.1,2.2,0.4,4.5,0.8,6.7c0.9,4.8,5.1,8.1,8.3,11.3c4,4,8,8,12.1,12.1c16.6,16.6,33.2,33.2,49.7,49.7c17.1,17.1,34.2,34.3,51.3,51.4c2.1,2.1,4.1,4.1,6.2,6.2c1.7,1.7,3.7,3,6.2,3.1c2.7,0.2,4.8-1.1,6.7-3c2.1-2.1,4.1-4.1,6.2-6.2c8.2-8.2,16.5-16.5,24.7-24.7c15.1-15.1,30.1-30.1,45.2-45.2c15.4-15.4,31-30.8,46.3-46.3c3-3.1,5.3-7.1,6.2-11.4c0.6-2.7,0.3-5.5,0.2-8.2C472.3,1254.5,472.2,1251.5,472.1,1248.5C472.1,1247.9,472.3,1253.1,472.1,1248.5z"/>
                        </defs>
                        <clipPath id="str301BRmask_1_">
                            <use xlinkHref="#str301BRmask" overflow="visible"/>
                        </clipPath>
                        <g clipPath="url(#str301BRmask_1_)">
                            <image width="128" height="146" clipPath="url(#myTie)"
                                   style={imageStyle} id="imgTest"
                                   x={props.imgX} y={props.imgY}
                                   xlinkHref=''/>
                        </g>
                    </g>
                </svg>
                <div id='tieWrap' style={tieWrap}/>
            </div>
            <button onClick={props.saveTieHandler}>Save your tie</button>
        </div>
    )
}