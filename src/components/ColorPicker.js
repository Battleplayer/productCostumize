import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import './ColorPicker.css';


const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff8800', '#eeff00'];

// class ColorPicker extends Component {
//
//     render() {
export default (props) => {
        const {onChange, onClick, TieColor, onImageSet, getScale, getRotate, isImported} = props;
        // console.log(this.props);
        return (
            <div style={{flex: 1}}>
                <h3>Design your tie</h3>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h3>Control pattern</h3>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div>
                                <input type="range" name="scale"
                                       min="0" max="1" defaultValue={0.5} step='0.1'
                                       onChange={getScale}/>
                                <label htmlFor="scale">Scale</label>
                            </div>
                            <div>
                                <input type="range" name="Rotate"
                                       min="0" max="360" defaultValue={180} step='18'
                                       onChange={getRotate}/>
                                <label htmlFor="Rotate">Rotate</label>
                            </div>
                            <div>
                                <input type="range" name="Horizontal"
                                       min="0" max="100" defaultValue={50} step='10'/>
                                <label htmlFor="Horizontal">Horizontal</label>
                            </div>
                            <div>
                                <input type="range" name="Vertical"
                                       min="0" max="50" defaultValue={25} step='7'/>
                                <label htmlFor="Vertical">Vertical</label>
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
                                        <span style={{backgroundColor: color}} onClick={onClick}> </span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                <input type="color" value={TieColor} onChange={onChange}/>
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
                            <p><input type="file" accept="image/*" onChange={onImageSet}/></p>
                            {isImported ?
                                <div>
                                    FINISH WITH PIC
                                    <div>
                                        <input type="range" name="Rotate"
                                               min="0" max="360" defaultValue={180} step='18'
                                               onChange={getRotate}/>
                                        <label htmlFor="Rotate">Rotate</label>
                                    </div>
                                    <div>
                                        <input type="range" name="Horizontal"
                                               min="0" max="100" defaultValue={50} step='10'/>
                                        <label htmlFor="Horizontal">Horizontal</label>
                                    </div>
                                    <div>
                                        <input type="range" name="Vertical"
                                               min="0" max="50" defaultValue={25} step='7'/>
                                        <label htmlFor="Vertical">Vertical</label>
                                    </div>
                                </div> : ''}
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

            </div>
        )
    // }
}

// export default ColorPicker;