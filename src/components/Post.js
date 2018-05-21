// let's go!
import React from 'react';
import Flexbox from 'flexbox-react';


class Post extends React.Component {
    constructor() {
        super();
        this.getComments = this.getComments.bind(this);
      }
    
    getComments(){

    }
    render() {
        const {jdata} = this.props
        console.log(jdata)
        return (
        <div align="left">
            <Flexbox flexDirection="row"maxWidth="30px" >
                <Flexbox flexGrow={1}>
                    <img src={jdata.images.standard_resolution.url} alt="post"/>
                </Flexbox>
                <Flexbox flexGrow={1}>
                    <Flexbox flexDirection="column" with="50px" justifyContent='left' alignItems='left'>
                        <h2>{jdata.user.full_name}</h2>
                        <img src={jdata.user.profile_picture} alt={jdata.user.username} />
                        {jdata.caption.text}
                    </Flexbox> 
                </Flexbox>        

            </Flexbox>
        </div>
        );
    }
}

export default Post;