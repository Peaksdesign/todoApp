import * as api from 'api/APIUtils';
import { success, error } from 'react-notification-system-redux';

export function loadList() {
    return async (dispatch) => {
        dispatch({
            type: 'LOAD_LIST_START',
        });
        try {
            const payload = await api.getList();
            dispatch({
                type: 'LOAD_LIST_FINISH',
                payload,
            });
        } catch (serverError) {
            dispatch({
                type: 'LOAD_LIST_FINISH',
                payload: null,
                serverError,
            });
        }
    };
}

export function deleteItem(itemId: number) {
    return async (dispatch) => {
        dispatch({
            type: 'DELETE_ITEM_START',
        });
        try {
            const response = await api.deleteItem();
            dispatch({
                type: 'DELETE_ITEM_FINISH',
                itemId,
                status: response.status,
            });
            dispatch(
                success({
                    message: 'Item deleted successfully!',
                    position: 'tc',
                }),
            );
        } catch (serverError) {
            console.log(serverError.message);
            dispatch({
                type: 'DELETE_ITEM_ERROR',
                status: null,
                serverError,
            });
            dispatch(
                error({
                    message: serverError.message,
                    position: 'tc',
                }),
            );
        }
    };
}

export function createItem(description: string) {
    return async (dispatch) => {
        dispatch({
            type: 'CREATE_ITEM_START',
        });
        try {
            const payload = await api.createItem(description);
            dispatch({
                type: 'CREATE_ITEM_FINISH',
                payload,
            });
            dispatch(
                success({
                    message: 'Item created successfully!',
                    position: 'tc',
                }),
            );
        } catch (serverError) {
            dispatch({
                type: 'CREATE_ITEM_ERROR',
                serverError,
            });
            dispatch(
                error({
                    message: serverError.message,
                    position: 'tc',
                }),
            );
        }
    };
}
