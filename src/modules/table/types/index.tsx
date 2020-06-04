export type ItemType = {
    id: number;
    description: string;
    created_at: string;
    done: boolean;
};

export type TableType = {
    itemList: Array<ItemType>;
};
