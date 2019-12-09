import React from 'react';
import PreviewCollection from '../../Components/Preview-collection/PreviewCollection';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


const Preview = ({collections}) => {
    console.log([collections])
    return (
        <div className="preview-container">
            {collections.map(({id, ...others}) => (
                <PreviewCollection key={id} {...others}/>
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(Preview);
