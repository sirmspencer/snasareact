// let's go!
import React from 'react';
import { isNull } from 'util'

//import Billing from './Billing';
import ZipCheck from './ZipCheck';
import AddComments from './AddComments';
import ShowInstagram from './ShowInstagram';


class ReactForm extends React.Component {
    constructor() {
        super();
    
        this.setZip = this.setZip.bind(this);
        this.setPostId = this.setPostId.bind(this);
    
      }
    state = {
        visible :{},
        zip : "",
        postid : null
    }

    setZip(zip) {
        this.setState({zip})
    }

    setPostId(postid) {
        this.setState({postid})
    }

    render() {
        // console.log("render form")
        // console.log(this.state.zip)
        //<Billing activezip ={this.state.zip}/>
        let instagram = null
        let comments = null
        if (this.state.zip > 0) {
            instagram = <ShowInstagram setPostId={this.setPostId}/>
        }

        if (!isNull(this.state.postid)) {
            comments = <AddComments/>
        }
        return (
            <div className = "from">
                <ZipCheck setZip={this.setZip}/>
                {instagram}
                {comments}           
            </div>
        )
    }
}

export default ReactForm;