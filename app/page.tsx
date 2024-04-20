'use client'

import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import UICarousel from './components/Carousel';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
        <Layout style={{backgroundColor: '#242424'}}>
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <div
            style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
            >
            Content
            </div>
        </Content>
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <UICarousel /> 
        </Content>
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <div
            style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
            >
            Content
            </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#242424', color: 'white'}}>
            Ant Design ©{new Date().getFullYear()}
        </Footer>
        </Layout>
    </>
  );
};

export default App;

