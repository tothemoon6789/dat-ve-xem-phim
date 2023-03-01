import { Image, Row } from 'antd';
import * as React from 'react';

export interface IHeaderLeftNavBarProps {
}

export function HeaderLeftNavBar(props: IHeaderLeftNavBarProps) {
    return (
        <Row align={'middle'} style={{ display: 'flex', justifyContent: 'center' }}>
            <Image style={{ borderRadius: '50%' }} src='https://i.pravatar.cc/' width={60} />
        </Row>
    );
}
