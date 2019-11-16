import React, { useState }  from 'react';
import SHOP_DATA from'../Shop/Shop.data';
import PreviewCollection from '../../Components/Preview-collection/PreviewCollection';


const Preview = () => {
    const [datas, setdatas] = useState(SHOP_DATA);
    let latest = datas.map(item => item.items.filter(x => x.newIn));
    latest = latest.reduce((acc, val) => acc.concat(val), []);

    const newCol = {
        id: 4,
        title:"latest-collection",
        routeName: "latest-collection",
        items: latest
    }

    datas.push(newCol);
    
    return (
        <div className="preview-container">
            {datas.map(({id, ...others}) => (
                <PreviewCollection key={id} {...others}/>
            ))}
        </div>
    )
}

export default Preview;
