import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '33.33%',
  height: '15rem',
  textAlign: 'center',
};

const UICard: React.FC = () => (
  <Card>
    <Card.Grid style={gridStyle}>P1</Card.Grid>
    <Card.Grid style={gridStyle}>P2</Card.Grid>
    <Card.Grid style={gridStyle}>P3</Card.Grid>
    <Card.Grid style={gridStyle}>P4</Card.Grid>
    <Card.Grid style={gridStyle}>P5</Card.Grid>
    <Card.Grid style={gridStyle}>P6</Card.Grid>
    <Card.Grid style={gridStyle}>P7</Card.Grid>
    <Card.Grid style={gridStyle}>P8</Card.Grid>
    <Card.Grid style={gridStyle}>P9</Card.Grid>
  </Card>
);

export default UICard;