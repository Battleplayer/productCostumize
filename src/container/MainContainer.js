import React, {Component} from 'react'
import Image from '../components/Image';
import ColorPicker from '../components/ColorPicker';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tieColor: '#0000ff',
            patternScale: 1,
            patternRotate: 0,
            patternX: 30,
            patternY: 70,
            patternColor: '#aaaa0a',
            imgRotateAngle: 0,
            imgX: 270,
            imgY: 400,
            imgScale: 1,
            image: ''
        };
    }

    //Tie Color
    colorPickerHandler = (color) =>
        this.setState({
            tieColor: color.hex
        });

    // Load Image, set styles and save pic
    imageSetHandler = () => {
        let filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
            let fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                document.getElementById("imgTest").setAttribute('xlink:href', fileLoadedEvent.target.result);
            };
            fileReader.readAsDataURL(filesSelected[0]);
        }
    };
    saveTieHandler = () => {
        let textToWrite = document.getElementById('image-wrapper').innerHTML;
        let textFileAsBlob = new Blob([textToWrite], {type: 'image/svg+xml'});
        let fileNameToSaveAs = "tie";
        let downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.URL != null) {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        }
        else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    };
    setImgRotateAngleHandler = ({target: {value}}) => {
        this.setState({
            imgRotateAngle: parseInt(value)
        });
    };
    setImgXHandler = ({target: {value}}) => {
        this.setState({
            imgX: parseInt(value)
        });
    };
    setImgYHandler = ({target: {value}}) => {
        this.setState({
            imgY: parseInt(value)
        });
    };
    setImgScaleHandler = ({target: {value}}) => {
        this.setState({
            imgScale: parseFloat(value)
        });
    };

    /// Pattern
    patternScaleHandler = ({target: {value}}) => {
        this.setState({
            patternScale: value
        });
    };
    patternRotateHandler = ({target: {value}}) => {
        this.setState({
            patternRotate: value
        });
    };
    patternXHandler = ({target: {value}}) => {
        this.setState({
            patternX: value
        });
    };
    patternYHandler = ({target: {value}}) => {
        this.setState({
            patternY: value
        });
    };
    patternColorHandler = (color) => {
        this.setState({
            patternColor: color.hex
        });
    };

    render() {
        const mainStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        };
        return (
            <div style={mainStyle}>
                <Image tieColor={this.state.tieColor}
                       image={this.state.image}
                       patternScale={this.state.patternScale}
                       patternRotate={this.state.patternRotate}
                       patternX={this.state.patternX}
                       patternY={this.state.patternY}
                       patternColor={this.state.patternColor}
                       imgRotateAngle={this.state.imgRotateAngle}
                       imgScale={this.state.imgScale}
                       imgX={this.state.imgX}
                       imgY={this.state.imgY}
                       saveTieHandler={this.saveTieHandler}
                />
                <ColorPicker tieColor={this.state.tieColor}
                             colorPickerHandler={this.colorPickerHandler}
                             patternScaleHandler={this.patternScaleHandler}
                             patternRotateHandler={this.patternRotateHandler}
                             patternXHandler={this.patternXHandler}
                             patternYHandler={this.patternYHandler}
                             patternColorHandler={this.patternColorHandler}
                             patternColor={this.state.patternColor}
                             setImgRotateAngle={this.setImgRotateAngleHandler}
                             setImgXHandler={this.setImgXHandler}
                             setImgYHandler={this.setImgYHandler}
                             setImgScale={this.setImgScaleHandler}
                             imageSetHandler={this.imageSetHandler}
                />
            </div>
        )
    }
}

export default MainContainer;