// let's go!
import React from 'react';
import { isNull } from 'util'

//import Billing from './Billing';
import ZipCheck from './ZipCheck';
import AddComments from './AddComments';
import ShowInstagram from './ShowInstagram';
import Post from './Post';

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
        const jdata = {
            "id": "1721945771974105449_311772",
            "user": {
                "id": "311772",
                "full_name": "Robert Nealan",
                "profile_picture": "https://scontent.cdninstagram.com/vp/16faccd485690cea60334b11b104df12/5B447851/t51.2885-19/s150x150/14052541_1401340249883168_1468310631_a.jpg",
                "username": "robertnealan"
            },
            "images": {
                "thumbnail": {
                    "width": 150,
                    "height": 150,
                    "url": "https://scontent.cdninstagram.com/vp/4db2d3ed166efcd6276c9ff7917e81fe/5B0D2E94/t51.2885-15/s150x150/e35/c135.0.809.809/27891413_1406171146161277_6757901461369126912_n.jpg"
                },
                "low_resolution": {
                    "width": 320,
                    "height": 239,
                    "url": "https://scontent.cdninstagram.com/vp/e7417b631c2ba8981f793e8a513e6715/5B0FC748/t51.2885-15/s320x320/e35/27891413_1406171146161277_6757901461369126912_n.jpg"
                },
                "standard_resolution": {
                    "width": 640,
                    "height": 479,
                    "url": "https://scontent.cdninstagram.com/vp/73ca69a6eee6c6e2b891687411caac7a/5B141805/t51.2885-15/s640x640/sh0.08/e35/27891413_1406171146161277_6757901461369126912_n.jpg"
                }
            },
            "created_time": "1519491953",
            "caption": {
                "id": "17899380421159973",
                "text": "Worked for our fresh tracks by hiking the far side of the Wave. #kirkwood #powderday",
                "created_time": "1519491953",
                "from": {
                    "id": "311772",
                    "full_name": "Robert Nealan",
                    "profile_picture": "https://scontent.cdninstagram.com/vp/16faccd485690cea60334b11b104df12/5B447851/t51.2885-19/s150x150/14052541_1401340249883168_1468310631_a.jpg",
                    "username": "robertnealan"
                }
            },
            "user_has_liked": false,
            "likes": {
                "count": 21
            },
            "tags": [
                "kirkwood",
                "powderday"
            ],
            "filter": "Normal",
            "comments": {
                "count": 0
            },
            "type": "image",
            "link": "https://www.instagram.com/p/BfllI5tAJlp/",
            "location": {
                "latitude": 38.684397057073,
                "longitude": -120.06787039506,
                "name": "Kirkwood Mountain Resort",
                "id": 218360
            },
            "attribution": null,
            "users_in_photo": []
        }
        console.log(jdata)
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
                <ul>
                    <Post jdata={jdata}/>
                    <Post jdata={jdata}/>
                </ul>
                <ZipCheck setZip={this.setZip}/>
                {instagram}
                {comments}           
            </div>
        )
    }
}

export default ReactForm;