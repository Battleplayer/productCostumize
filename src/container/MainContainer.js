import React, {Component} from 'react'
import Image from '../components/Image';
import ColorPicker from '../components/ColorPicker';

import html2canvas from 'html2canvas';

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
            imgX: 280,
            imgY: 1000,
            imgScale: 1
        };
        this.onChange = this.onChange.bind(this);
        this.onColorPickerClick = this.onColorPickerClick.bind(this);
        this.onImageSet = this.onImageSet.bind(this);
        this.backgroundScale = this.backgroundScale.bind(this);
        this.backgroundRotate = this.backgroundRotate.bind(this);
        this.setTieX = this.setTieX.bind(this);
        this.setTieY = this.setTieY.bind(this);
        this.imgRotate = this.imgRotate.bind(this);
        this.imgX = this.imgX.bind(this);
        this.imgY = this.imgY.bind(this);
        this.imgScale = this.imgScale.bind(this);
        this.saveTie = this.saveTie.bind(this);
    }

    onColorPickerClick = (e) => {
        this.setState({
            TieColor: e.target.style.backgroundColor,
        });
    };
    onChange = ({target: {value}}) =>
        this.setState({
            TieColor: value
        });
    onImageSet = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
        // let reader = new FileReader();
        // reader.readAsDataURL(URL.createObjectURL(event.target.files[0]));
        // reader.onloadend = function() {
        //     base64data = reader.result;
        //     console.log(base64data);
        // }
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
    setTieX = ({target: {value}}) => {
        this.setState({
            tieX: value
        });
    };
    setTieY = ({target: {value}}) => {
        this.setState({
            tieY: value
        });
    };
    imgRotate = ({target: {value}}) => {
        this.setState({
            imgRotate: parseInt(value)
        });
    };
    imgX = ({target: {value}}) => {
        this.setState({
            imgX: parseInt(value)
        });
    };
    imgY = ({target: {value}}) => {
        this.setState({
            imgY: parseInt(value)
        });
    };
    imgScale = ({target: {value}}) => {
        this.setState({
            imgScale: parseFloat(value)
        });
    };
    saveTie = () => {
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
        // this.generateScreenshot()
    };

    generateScreenshot() {
        html2canvas(document.getElementById('tie'), {
            width: 260,
            height: 565,
            scale: 10,
            logging: true,
            profile: true,
            useCORS: true
        }).then(function (canvas) {
            //setDPI(canvas, 600);
            console.log(canvas);
            var data = canvas.toDataURL('image/png', 0.1);
            // console.log(data);
            var src = encodeURI(data);
            // document.getElementById('screenshot').src = src;
            document.getElementById('size').innerHTML = src.length + ' bytes';
            document.getElementById('test').href = data;
            document.getElementById('test').download = 'atkinsons_' + new Date().toLocaleString() + '.png';
        });
    }

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
                       saveTie={this.saveTie}
                />
                <ColorPicker TieColor={this.state.TieColor}
                             onImageSet={this.onImageSet}
                             onClick={this.onColorPickerClick}
                             onChange={this.onChange}
                             getScale={this.backgroundScale}
                             getRotate={this.backgroundRotate}
                             getTieX={this.setTieX}
                             getTieY={this.setTieY}
                             imgRotate={this.imgRotate}
                             imgX={this.imgX}
                             imgY={this.imgY}
                             imgScale={this.imgScale}

                             isImported={isImported}
                />
            </div>
        )
    }
}

export default MainContainer;