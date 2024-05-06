'use client'

import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import UICarousel from './components/ant/Carousel';
import UIDescriptions from './components/ant/Descriptions';
import UIFlex from './components/ant/Flex';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
        <Layout style={{backgroundColor: '#A0A0A0', width: '80%', margin: 'auto', paddingTop: '25px'}}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <Header style={{
              margin: 'auto',
              width: '100%',
              backgroundColor: '#A0A0A0',
              borderTop: '2px solid white',
              borderBottom: '2px solid white',
              height: '6rem',
              alignContent: 'center'
            }}>
            <UIFlex />
          </Header>
          <Content style={{ padding: '0 48px' }}>
              <Breadcrumb style={{ margin: '16px 0' }} />
              <UICarousel /> 
          </Content>  
          <Content style={{ padding: '0 48px' }}>
              <Breadcrumb style={{ margin: '16px 0' }} />
              <div
              style={{
                  padding: 24,
                  minHeight: 'auto',
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
              }}
              >
              <UIDescriptions />
              </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#A0A0A0', color: 'white'}}>
              Jeerawut ©{new Date().getFullYear()}
          </Footer>
        </Layout>
    </>
  );
};

export default App;

