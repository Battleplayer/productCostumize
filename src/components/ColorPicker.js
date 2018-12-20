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

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scaleValue: props.scaleValue,
            rotateValue: props.rotateValue,
            horValue: props.horValue,
            vertValue: props.vertValue,
        };
    }

    render() {
        const {onChange, onClick, TieColor, onImageSet} = this.props;
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
                                       min="0" max="0" value={this.scaleValue} step='0.1'
                                onChange={console.log('1')}/>
                                <label htmlFor="scale">Scale</label>
                            </div>
                            <div>
                                <input type="range" name="Rotate"
                                       min="0" max="10" value={this.rotateValue} step='1'/>
                                <label htmlFor="Rotate">Rotate</label>
                            </div>
                            <div>
                                <input type="range" name="Horizontal"
                                       min="0" max="10" value={this.horValue} step='1'/>
                                <label htmlFor="Horizontal">Horizontal</label>
                            </div>
                            <div>
                                <input type="range" name="Vertical"
                                       min="0" max="10" value={this.vertValue} step='1'/>
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
                            <input type="file" accept="image/*" onChange={onImageSet}/>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

            </div>
        )
    }
}

export default ColorPicker;