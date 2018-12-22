import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import './ColorPicker.css';


const colors = ['#382E2C', '#545876', '#53565A', '#C1A0DA', '#857874', '#A51890', '#CA005D', '#C4D600', '#007681', '#0df', ''];

export default (props) => {
    const {
        isImported, TieColor,
        setTieColorHandler, pickTieColorHandler, imageSetHandler,
        bcgXHandler, bcgYHandler, backgroundScaleHandler, backgroundRotateHandler,
        setImgXHandler, setImgYHandler, setImgRotateAngle, setImgScale
    } = props;
    // console.log(this.props);
    return (
        <div>
            <div id="image-wrapper">
                <h3>Design your tie</h3>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Control pattern</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div>
                                <label htmlFor="scale">Scale</label>
                                <input type="range" name="scale"
                                       min="0" max="3" defaultValue={1} step='0.2'
                                       onChange={backgroundScaleHandler}/>
                            </div>
                            <div>
                                <label htmlFor="Rotate">Rotate</label>
                                <input type="range" name="Rotate"
                                       min="-180" max="180" defaultValue={0} step='1'
                                       onChange={backgroundRotateHandler}/>
                            </div>
                            <div>
                                <label htmlFor="Horizontal">Horizontal</label>
                                <input type="range" name="Horizontal"
                                       min="0" max="70" defaultValue={30} step='10'
                                       onChange={bcgXHandler}/>

                            </div>
                            <div>
                                <label htmlFor="Vertical">Vertical</label>
                                <input type="range" name="Vertical"
                                       min="0" max="100" defaultValue={50} step='7'
                                       onChange={bcgYHandler}/>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Apply Base Color</h3>
                            <div>Some colors</div>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul className='colorlist'>
                                {colors.map(color => (
                                    <li key={color}>
                                        <span style={{backgroundColor: color}} onClick={pickTieColorHandler}> </span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                <input type="color" value={TieColor} onChange={setTieColorHandler}/>
                            </p>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Tie textures</h3>
                            <p>empty</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div>enter something</div>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Upload your image</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p><input type="file" accept="image/*" id='inputFileToLoad' onChange={imageSetHandler}/></p>
                            {isImported ?
                                <div>
                                    <div>
                                        <label htmlFor="ScaleImg">Scale</label>
                                        <input type="range" name="ScaleImg"
                                               min="0" max="2" defaultValue={1} step='0.1'
                                               onChange={setImgScale}/>
                                    </div>
                                    <div>
                                        <label htmlFor="RotateImg">Rotate</label>
                                        <input type="range" name="RotateImg"
                                               min="0" max="360" defaultValue={180} step='18'
                                               onChange={setImgRotateAngle}/>
                                    </div>
                                    <div>
                                        <label htmlFor="HorizontalImg">Horizontal</label>
                                        <input type="range" name="HorizontalImg"
                                               min="-100" max="700" defaultValue={270} step='15'
                                               onChange={setImgXHandler}/>
                                    </div>
                                    <div>
                                        <label htmlFor="VerticalImg">Vertical</label>
                                        <input type="range" name="VerticalImg"
                                               min="0" max="1400" defaultValue={400} step='75'
                                               onChange={setImgYHandler}/>
                                    </div>
                                </div> : ''}
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

