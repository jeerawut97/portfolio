'use client'

import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import UICarousel from './components/ant/Carousel';
import UIDescriptions from './components/ant/Descriptions';
import UIFlex from './components/ant/Flex';

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
        <Layout style={{backgroundColor: '#435585', width: '80%', margin: 'auto', paddingTop: '25px'}}>
          <UIFlex />
          <Content>
              <Breadcrumb style={{ margin: '16px 0' }} />
              <UICarousel /> 
          </Content>  
          <Content>
              <Breadcrumb style={{ margin: '16px 0' }} />
              <div
              style={{
                  minHeight: 'auto',
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  outlineColor: '#9290C3'
              }}
              >
              <UIDescriptions />
              </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#435585', color: 'white'}}>
              Jeerawut ©{new Date().getFullYear()}
          </Footer>
        </Layout>
    </>
  );
};

export default App;

