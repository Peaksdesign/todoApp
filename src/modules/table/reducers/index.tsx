import type { ItemType, TableReduxActions } from 'types';

export type State = {
    itemList: Array<ItemType>;
};

export const initialState = {
    itemList: null,
};

export default function table(
    state: State = initialState,
    action: TableReduxActions,
): State {
    switch (action.type) {
        case 'LOAD_LIST_FINISH':
            return {
                ...state,
                itemList: action.payload,
            };
        case 'DELETE_ITEM_FINISH': {
            return {
                ...state,
                itemList: state.itemList.filter(
                    (item) => item.id != action.itemId,
                ),
            };
        }
        case 'CREATE_ITEM_FINISH':
            return {
                ...state,
                itemList: [...state.itemList, action.payload],
            };
        default:
            return state;
    }
}
