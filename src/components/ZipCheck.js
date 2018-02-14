// let's go!
import React from 'react';

class ZipCheck extends React.Component {
/*     constructor() {
        super()
    } */
    state = {
       success: false,
       zip: 0  
    }

    checkzip(e) {
        e.preventDefault()       
        console.log(this.zipentered.value)
        if (this.zipentered.value>100){
            this.setState({success: true, zip:this.zipentered.vaue})

        }
    }
    
    clearzip(e) {
        e.preventDefault()    
        this.setState({success: false,zip:0})
    }

    render() {
        let successrender = null;
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
        <form className = "ZipCheck" onSubmit={(e) => this.checkzip(e)}> 
            <input  ref={(input) => this.zipentered = input} type="text" placeholder="Zip Code" />
            <button type="submit">Check Zip Code</button>
        </form>
            {successrender}
        </div>
        );
    }
}

export default ZipCheck;