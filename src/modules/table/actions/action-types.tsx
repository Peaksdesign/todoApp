import type { ItemType, ValidateError } from 'types';

export type loadListFinish = {
    type: 'LOAD_LIST_FINISH';
    payload: Array<ItemType> | undefined;
    serverError?: ValidateError;
};

export type deleteItemFinish = {
    type: 'DELETE_ITEM_FINISH';
    status: number | undefined;
    itemId: number | undefined;
    serverError?: ValidateError;
};

export type createItemFinish = {
    type: 'CREATE_ITEM_FINISH';
    payload: ItemType | undefined;
    serverError?: ValidateError;
};

export type Action =
    | loadListFinish
    | deleteItemFinish
    | createItemFinish;
