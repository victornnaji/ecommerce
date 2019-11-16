import React, { useState }  from 'react';
import SHOP_DATA from'../Shop/Shop.data';
import PreviewCollection from '../../Components/Preview-collection/PreviewCollection';


const Preview = () => {
    const [datas] = useState(SHOP_DATA);

    return (
        <div className="preview-container">
            {datas.map(({id, ...others}) => (
                <PreviewCollection key={id} {...others}/>
            ))}
        </div>
    )
}

export default Preview;
