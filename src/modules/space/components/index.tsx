import React from 'react';

type SpaceProps = {
    height: number;
};

export default function Space(props: SpaceProps) {
    return <div style={{ height: props.height }}></div>;
}
