import React, {useState} from 'react';
import SHOP_DATA from "../../pages/Shop/Shop.data";
import PreviewCollection from "../Preview-collection/PreviewCollection";

const Selected = () => {
    const [datas] = useState(SHOP_DATA);
    const data4 = datas[3];
    return (
        <div className="preview-container" style={{marginTop: "7rem"}}>
                <PreviewCollection key={data4.id} title="Selected just for you" items={data4.items} routeName={data4.routeName}/>
        </div>
    )
}

export default Selected;
