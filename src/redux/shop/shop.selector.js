import {createSelector} from "reselect";


const COLLECTION_ID_MAP = {
    kids : 1,
    womens : 2,
    mens : 3,
    latest : 4
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)