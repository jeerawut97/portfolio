import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const UIAvatar: React.FC = () => (
  <Avatar
    size={{ xs: 70, sm: 70, md: 70, lg: 70, xl: 70, xxl: 70}}
    icon={<AntDesignOutlined />}
  />
);

export default UIAvatar;