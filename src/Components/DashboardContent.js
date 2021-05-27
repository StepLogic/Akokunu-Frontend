import React, { Component } from 'react';
import "../Styles/bootstrap.css";
import "../Styles/index.css";
import DataCard from './DataCard';

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="col-lg-4">
                    <DataCard/>
                </div>
            </div>
         );
    }
}
 
export default DashboardContent;