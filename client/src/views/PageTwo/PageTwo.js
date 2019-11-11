import React from 'react';
import DisplayItem from '../../components/PageTwo/DisplayItem.js';


class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageType: 'tshirt',
            apparelMode: true,
            clicked: true
        };

        this.updateType = this.updateType.bind(this);
        this.updateMode = this.updateMode.bind(this);
    }

    updateType(imgType){ //from child to parent
        this.setState({
            imageType: imgType
        })
    }
    updateMode(mdType){ //from child to parent
        this.setState({
            apparelMode: mdType
        })
    }

    displayFunc() {
      return <DisplayItem updateDisplay={this.updateType}/>;
    }


    render(){
        return (
            <div>
            {this.displayFunc()}
            </div>
        );
    }

}




export default PageTwo;
