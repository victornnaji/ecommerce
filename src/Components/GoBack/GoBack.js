import React from 'react';
import "./GoBack.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {withRouter} from "react-router-dom";

const GoBack =({text, history}) => {
        return (
        <div className="goback" style={{cursor: "pointer"}} onClick={history.goBack}>
            <ArrowBackIcon /> <span>{text}</span>
        </div>
        )
}

export default withRouter(GoBack);
