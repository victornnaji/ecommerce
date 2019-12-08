import React from 'react';
import PreviewCollection from '../../Components/Preview-collection/PreviewCollection';
import { selectCollections } from '../../redux/shop/shop.selector';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


const Preview = ({collections}) => {
    return (
        <div className="preview-container">
            {collections.map(({id, ...others}) => (
                <PreviewCollection key={id} {...others}/>
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

export default connect(mapStateToProps)(Preview);
