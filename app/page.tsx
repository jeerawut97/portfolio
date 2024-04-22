'use client'

import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import UICarousel from './components/ant/Carousel';
import UICard from './components/ant/Card';
import UIDescriptions from './components/ant/Descriptions';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
        <Layout style={{backgroundColor: '#79AFFF'}}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <Header style={{
            margin: 'auto',
            width: '95%',
            backgroundColor: '#79AFFF',
            borderTop: '2px solid white',
            borderBottom: '2px solid white',
            height: '6rem',
            alignContent: 'center'
          }}>
            <h1>Hello</h1>
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
                  minHeight: 380,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
              }}
              >
              <UIDescriptions />
              </div>
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
              <UICard />
              </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#79AFFF', color: 'white'}}>
              Ant Design ©{new Date().getFullYear()}
          </Footer>
        </Layout>
    </>
  );
};

export default App;

