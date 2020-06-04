import React, { Component } from 'react';
import type { SpaceProps } from 'types';

class Space extends Component<SpaceProps, unknown> {
    render() {
        return <div style={{ height: this.props.height }}></div>;
    }
}

export default Space;
