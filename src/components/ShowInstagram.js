import React from 'react';

class ShowInstagram extends React.Component {
    selectpost(e) {
        e.preventDefault()    
        this.props.setPostId("dfslkfjioe89324jkdkskdf")
    }
    render() {
        return (<div>
        <form className = "ZipCheck" onSubmit={(e) => this.selectpost(e)}  > 
                <button type="submit">Test select post</button>            
        </form>
        </div>)        
    }
}

export default ShowInstagram;
