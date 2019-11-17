import React from 'react';
import "./GoBack.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {withRouter} from "react-router-dom";

class GoBack extends React.Component {
    render() {
        return (
            <div className="goback" style={{cursor: "pointer"}} onClick={this.props.history.goBack}>
                <ArrowBackIcon /> <span>Go Back</span>
            </div>
        )
    }
}

export default withRouter(GoBack);
