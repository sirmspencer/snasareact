import React from 'react';

class Billing extends React.Component {
    render() {
        console.log("render billing")
        console.log(this.props.activezip)
        return (
            <form className = "Billing"> 
                <input  type="text" placeholder="Address" />
                <input  type="text" value={this.props.activezip} disabled/>
                <button type="submit">+ Add Item</button>
            </form>

        )
    }
}

export default Billing;