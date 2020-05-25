import React from 'react'
import Table from 'components/Table'
import NotificationSystem from 'react-notification-system';

function App() {
  const notificationSystem = React.createRef();

  return (
    <>
      <NotificationSystem ref={notificationSystem} />
      <Table notificationSystem={notificationSystem} />
    </>
  );
}

export default App
