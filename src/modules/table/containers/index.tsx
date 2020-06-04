import { loadList, deleteItem, createItem } from '../actions';
import { getItemList } from '../selectors';
import Table from 'modules/table/components';
import { connect } from 'react-redux';
import type { State } from 'types';

const mapStateToProps = (state: State) => {
    return {
        itemList: getItemList(state),
    };
};
type DispatchProps = {
    loadList: () => void;
    deleteItem: (itemId: number) => void;
    createItem: (description: string) => void;
};

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        loadList: () => {
            dispatch(loadList());
        },
        deleteItem: (itemId) => {
            dispatch(deleteItem(itemId));
        },
        createItem: (description) => {
            dispatch(createItem(description));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
