import React from 'react';

class Billing extends React.Component {
    render() {
        return (
            <form className = "Billing"> 
                <input  type="text" placeholder="Address" />
                <button type="submit">+ Add Item</button>
            </form>

        )
    }
}

export default Billing;