import React from 'react';
import { Button, Flex } from 'antd';
import UIModal from './Modal';
import Link from 'next/link';

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 6,
};

const UIFlex: React.FC = () => {
  return (
    <Flex gap="middle" align="start" vertical>
      <Flex style={boxStyle} justify={'space-between'} align={'center'}>
        Hello EIEI!
        {/* <Link href="contact-us" rel="noopener noreferrer">Contact Us</Link> */}
        <UIModal />
      </Flex>
    </Flex>
  );
};

export default UIFlex;