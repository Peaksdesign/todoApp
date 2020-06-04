export type TableProps = {
    itemList: Array<ItemType>;
    loadList: () => void;
    deleteItem: (itemId: number) => void;
    createItem: (description: string) => void;
};

export type TableState = {
    description: string;
};

export type ItemType = {
    id: number;
    description: string;
    created_at: string;
    done: boolean;
};

export type TableType = {
    itemList: Array<ItemType>;
};
