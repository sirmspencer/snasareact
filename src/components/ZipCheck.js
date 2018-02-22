// let's go!
import React from 'react';


class ZipCheck extends React.Component {
    constructor() {
        super();
    
        this.checkzip = this.checkzip.bind(this);
    
      }
    state = {
       success: false
    }

    checkzip(e) {
        e.preventDefault() 
        let thiszip = this.zipentered.value
        if (thiszip.length === 5 && !isNaN(parseFloat(thiszip)) && isFinite(thiszip)){
            this.setState({success: true})
            this.props.setZip(thiszip)
        }
    }
    
    clearzip(e) {
        e.preventDefault()    
        this.setState({success: false})
        this.props.setZip("")
    }

    render() {
        let successrender = null;
        const todisable = this.state.success ? 'disabled' : ''
        if (this.state.success) {
            successrender = (
                <form className = "success" onSubmit={(e) => this.clearzip(e)}>
                    <span>success<button type="submit">Clear</button> 
                    </span>
                </form>
                );
        }
        return (
        <div>
        <form className = "ZipCheck" onSubmit={(e) => this.checkzip(e)}  > 
                <input  ref={(input) => this.zipentered = input} type="text" placeholder="Zip Code" disabled={todisable}/>
                <button type="submit" disabled={todisable}>Check Zip Code</button>
            
        </form>
            {successrender}
        </div>
        );
    }
}

export default ZipCheck;