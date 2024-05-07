import React from 'react';
import { Flex } from 'antd';
import UIAvatar from './Avatar';


const boxStyle: React.CSSProperties = {
  width: '100%',
  borderTop: '2px solid white',
  borderBottom: '2px solid white',
  height: '6rem',
};
const UIFlex: React.FC = () => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Flex style={boxStyle} justify={'space-between'} align={'center'}>
        <UIAvatar />
      </Flex>
    </Flex>
  );
};

export default UIFlex;