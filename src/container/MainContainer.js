import React, {Component} from 'react'
import Image from '../components/Image';
import ColorPicker from '../components/ColorPicker';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TieColor: 'blue',
            bcgScale: 1,
            bcgRotate: 0,
            tieX: 30,
            tieY: 70,
            imgRotate: 0,
            imgX: 270,
            imgY: 400,
            imgScale: 1,
            image: ''
        };
    }

    //Tie Color
    pickTieColorHandler = (e) => {
        this.setState({
            TieColor: e.target.style.backgroundColor,
        });
    };
    setTieColorHandler = ({target: {value}}) =>
        this.setState({
            TieColor: value
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
        let fileNameToSaveAs = "svg";
        console.log(textToWrite);

        let downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.URL != null) {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        }
        else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            //   downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    };
    setImgRotateAngleHandler = ({target: {value}}) => {
        this.setState({
            imgRotate: parseInt(value)
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
    /// NEW
    backgroundScaleHandler = ({target: {value}}) => {
        this.setState({
            bcgScale: value
        });
    };
    backgroundRotateHandler = ({target: {value}}) => {
        this.setState({
            bcgRotate: value
        });
    };
    bcgXHandler = ({target: {value}}) => {
        this.setState({
            tieX: value
        });
    };
    bcgYHandler = ({target: {value}}) => {
        this.setState({
            tieY: value
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
            flexDirection: 'row',
            justifyContent: 'space-around'
        };
        return (
            <div style={mainStyle}>
                <Image color={this.state.TieColor}
                       image={this.state.image}
                       bcgScale={this.state.bcgScale}
                       bcgRotate={this.state.bcgRotate}
                       tieX={this.state.tieX}
                       tieY={this.state.tieY}
                       imgRotate={this.state.imgRotate}
                       imgScale={this.state.imgScale}
                       imgX={this.state.imgX}
                       imgY={this.state.imgY}
                       saveTieHandler={this.saveTieHandler}
                />
                <ColorPicker TieColor={this.state.TieColor}
                             imageSetHandler={this.imageSetHandler}
                             pickTieColorHandler={this.pickTieColorHandler}
                             setTieColorHandler={this.setTieColorHandler}
                             backgroundScaleHandler={this.backgroundScaleHandler}
                             backgroundRotateHandler={this.backgroundRotateHandler}
                             bcgXHandler={this.bcgXHandler}
                             bcgYHandler={this.bcgYHandler}
                             setImgRotateAngle={this.setImgRotateAngleHandler}
                             setImgXHandler={this.setImgXHandler}
                             setImgYHandler={this.setImgYHandler}
                             setImgScale={this.setImgScaleHandler}

                             isImported={!isImported}
                />
            </div>
        )
    }
}

export default MainContainer;