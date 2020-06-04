import { State, ItemType } from 'types';

export function getItemList(state: State): Array<ItemType> | null {
    return state.table.itemList || null;
}
