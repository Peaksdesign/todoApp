import React from 'react';
import type { SpaceProps } from 'types';

export default function Space(props: SpaceProps) {
    return <div style={{ height: props.height }}></div>;
}
