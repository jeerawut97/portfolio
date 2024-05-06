import React from 'react';
import Link from 'next/link';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Portfolio',
    children: 'Tic Tac Toe',
  },
  {
    key: '2',
    label: 'URL',
    children: <Link href="www.google.com" rel="noopener noreferrer" target="_blank">https://localhost:3000</Link>,
  },
  {
    key: '3',
    label: 'Status',
    span: 3,
    children: <Badge status="processing" text="Running" />,
  }
];

const UIDescriptions: React.FC = () => (
  <Descriptions layout="vertical" bordered items={items} />
);

export default UIDescriptions;