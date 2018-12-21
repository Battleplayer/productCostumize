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
        this.backgroundScale = this.backgroundScale.bind(this);
        this.backgroundRotate = this.backgroundRotate.bind(this);
    }

    onClick = (e) => {
        this.setState({
            TieColor: e.target.style.backgroundColor,
        });
    };
    onChange = ({target: {value}}) =>
        this.setState({
            TieColor: value,
            bcgScale: 0.5,
            bcgRotate: 180
        });
    onImageSet = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    };
    backgroundScale = ({target: {value}}) => {
        this.setState({
            bcgScale: value
        });
    };
    backgroundRotate = ({target: {value}}) => {
        this.setState({
            bcgRotate: value
        });
    };

    render() {
        let isImported = false;
        console.log(this.state);
        if (this.state.image) {
            isImported = true
        }
        const mainStyle = {
            display: 'flex',
            flexDirection: 'row'
        };
        return (
            <div style={mainStyle}>
                <Image color={this.state.TieColor}
                       image={this.state.image}
                       bcgScale = {this.state.bcgScale}
                       bcgRotate = {this.state.bcgRotate}

                />
                <ColorPicker TieColor={this.state.TieColor}
                             onImageSet={this.onImageSet}
                             onClick={this.onClick}
                             onChange={this.onChange}
                             getScale={this.backgroundScale}
                             getRotate = {this.backgroundRotate}
                             isImported={isImported}
                />
            </div>
        )
    }
}

export default MainContainer;