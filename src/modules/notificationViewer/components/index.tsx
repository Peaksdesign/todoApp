import React from 'react';
import { Notification } from 'react-notification-system';
import Notifications from 'react-notification-system-redux';

type NotificationType = {
    notifications: Notification[];
};

export default class NotificationViewer extends React.Component<
    NotificationType,
    undefined
> {
    render() {
        const { notifications } = this.props;

        return <Notifications notifications={notifications} />;
    }
}
