import React from 'react';
import "./PreviewCollection.scss";
import Button from '../button/Button';
import Imagecollection from '../ImageCollection/Imagecollection';

const PreviewCollection = ({title, items}) => {
    return (
        <div className="previewcollection-container">
            <div className="container">
                <div className="title">
                    <h1>{title.toUpperCase()}</h1>
                    <Button color="white" text="view all"/>
                </div>
                <div className="preview">
                        {items.filter((item, idx) => idx < 4).map(item => (
                            <div key={item.id} className="preview-items">
                                <Imagecollection {...item}/>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default PreviewCollection;
