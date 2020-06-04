import Notification from 'react-notification-system';
import type { TableType } from 'types';

export type State = {
    table: TableType;
    notifications: Array<Notification>;
};

export type ValidateError = {
    message: string;
};
