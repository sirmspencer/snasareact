import React from 'react';

import Billing from './Billing';
import ZipCheck from './ZipCheck';
import Appointment from './Appointment';
import Storage from './Storage';


class ReactForm extends React.Component {
    state = {
        visible :{}
    }
    render() {
        return (
            <div className = "from">
                <ZipCheck/>
                <Storage/>
                <Appointment/>
                <Billing/>
            </div>
        )
    }
}

export default ReactForm;