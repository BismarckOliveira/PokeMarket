import React from 'react';
import { CardActionArea, Card, CardMedia } from '@material-ui/core';
import { useStyles } from './style';

const CardBox: React.FC = () => {
  const { cardStyle, media } = useStyles();

  return (
    <Card className={cardStyle}>
      <CardActionArea>
        <CardMedia className={media} />
      </CardActionArea>
    </Card>
  );
};

export default CardBox;
