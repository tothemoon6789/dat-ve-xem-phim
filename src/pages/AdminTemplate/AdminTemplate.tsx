import React, { useState } from 'react';
import { Affix, Button, Divider, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import { PoweroffOutlined } from '@ant-design/icons';
import FooterLeftNavBar from './_components/Navbar/FooterLeftNavBar';
import { AdminHeader } from './_components/Header/AdminHeader';
import { HeaderLeftNavBar } from './_components/Navbar/HeaderLeftNavBar';
import { MenuLeftNavBar } from './_components/Navbar/MenuLeftNavBar';
import AnchorTop from './_components/AnchorTop/AnchorTop';

const { Content, Footer, Sider } = Layout;


const AdminTemplate: React.FC = () => {
console.log('I AM IN ADMINTEMPLATE');

    const [loadings, setLoadings] = useState<boolean[]>([]);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        
        <Layout >
            <Affix >
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{ paddingTop: '20px', height: '100vh', position: 'relative' }}
                >
                    <div className="logo" />
                    <HeaderLeftNavBar />
                    <Divider orientation="left" plain>
                        Left Text
                    </Divider>
                    <MenuLeftNavBar />
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                        <h6>Admin</h6>
                        <div className='d-flex justify-content-end'>
                            <FooterLeftNavBar />
                            {/* icon={<PoweroffOutlined />} */}
                            <Button type="primary" icon={<PoweroffOutlined />} danger />
                        </div>
                    </div>
                </Sider>
            </Affix>
            <Layout>
                <AdminHeader />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>

                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Designed By Linh Pham</Footer>
            </Layout>
        </Layout>
    );
};
export default AdminTemplate;
