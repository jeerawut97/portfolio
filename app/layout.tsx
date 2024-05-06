import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" style={{backgroundColor: '#A0A0A0'}}>
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;