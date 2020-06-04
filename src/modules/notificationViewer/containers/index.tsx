import NotificationViewer from 'modules/notificationViewer/components';
import { connect } from 'react-redux';
import type { State } from 'types';

const mapStateToProps = (state: State) => {
    return {
        notifications: state.notifications,
    };
};

export default connect(mapStateToProps, null)(NotificationViewer);
