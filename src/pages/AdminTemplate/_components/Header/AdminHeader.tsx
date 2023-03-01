import { Affix, Alert, Button, theme, Tooltip } from 'antd';
import * as React from 'react';
import { Layout } from 'antd'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import Search from './_components/Search';




const { Header } = Layout
export interface IHeaderProps {
}

export function AdminHeader(props: IHeaderProps) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Affix>
            <Header style={{ padding: '0 10px 0 10px', background: colorBgContainer, display:'flex', alignItems:'center', justifyContent:'space-between' }} >
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                    <Tooltip title="Film Homepage!">
                            <Button
                                style={{
                                    border: 'none',
                                    display:'flex',
                                    justifyItems:'center',
                                    alignItems:'center'
                                }}
                                type='dashed'
                                
                                icon={<HomeIcon />} >Film Homepage</Button>
                        </Tooltip>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                        <Search />
                        <Tooltip title="Nothing to show!">
                            <Button
                                style={{
                                    border: 'none'
                                }}
                                icon={<AccountCircleIcon />} />
                        </Tooltip>
                        <Tooltip title="How can we help ?">
                            <Button
                                style={{
                                    border: 'none'
                                }}
                                icon={<HelpIcon />} />
                        </Tooltip>
                        <Tooltip title="Nothing to show!">
                            <Button
                                style={{
                                    border: 'none'
                                }}
                                icon={<NotificationsIcon />} />
                        </Tooltip>
                    </div>
            </Header>
        </Affix>
    );
}
