import React, {useState, useEffect} from 'react';
import SHOP_DATA from "../../pages/Shop/Shop.data";
import PreviewCollection from "../Preview-collection/PreviewCollection";
import { shuffle } from '../../util';

const Selected = () => {
    const [datas] = useState(SHOP_DATA);
    const data4 = datas.latest;
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(shuffle(data4.items))
    }, [data4]);

    return (
        <div className="preview-container" style={{marginTop: "7rem"}}>
            <PreviewCollection key={data4.id} title="Selected just for you" items={item} routeName={data4.routeName}/>
        </div>
    )
}

export default Selected;
