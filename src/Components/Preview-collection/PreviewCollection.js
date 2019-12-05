import React from 'react';
import "./PreviewCollection.scss";
import Button from '../button/Button';
import Imagecollection from '../ImageCollection/Imagecollection';

const PreviewCollection = ({title, items}) => {
    return (
        <div className="previewcollection-container">
            <div className="container">
                <div className="title">
                    <div className="heading">{title.toUpperCase()}</div>
                    <Button color="white" text="view all"/>
                </div>
                <div className="preview">
                        {items.filter((item, idx) => idx < 4).map(item => (
                            <div className="preview-items" key={item.id}>
                                <Imagecollection item ={item}/>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default PreviewCollection;
