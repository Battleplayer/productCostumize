import React, {Component} from 'react'
import Image from '../components/Image';
import ColorPicker from '../components/ColorPicker';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TieColor: 'blue'
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onImageSet = this.onImageSet.bind(this);
    }
    onClick = (e)=> {
        this.setState({
            TieColor: e.target.style.backgroundColor,
        });
    };
    onChange = ({target: {value}}) =>
        this.setState({
            TieColor: value,
        });
    onImageSet = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };
    render() {
        console.log(this.state);
        const mainStyle = {
            display: 'flex',
            flexDirection: 'row'
        };
        return (
            <div style={mainStyle}>
                <Image color = {this.state.TieColor}
                    image = {this.state.image}
                />
                <ColorPicker TieColor={this.state.TieColor}
                             onImageSet = {this.onImageSet}
                             onClick={this.onClick}
                             onChange={this.onChange}/>
            </div>
        )
    }
}

export default MainContainer;