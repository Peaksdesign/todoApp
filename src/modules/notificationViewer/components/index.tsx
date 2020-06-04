import React from 'react';
import { Notification } from 'react-notification-system';
import Notifications from 'react-notification-system-redux';

type NotificationType = {
    notifications: Notification[];
};

export default function NotificationViewer(props: NotificationType) {
    const { notifications } = props;

    return <Notifications notifications={notifications} />;
}
