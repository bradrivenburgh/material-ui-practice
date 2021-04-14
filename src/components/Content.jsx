import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeeCard from './CoffeeCard';
import { coffeeMakers } from '../constants';

const Content = () => {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    return (
      <Grid item xs={12} md={4}>
        <CoffeeCard {...coffeeMakerObj} />{' '}
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {coffeeMakers.map((coffeeMakerObj) => getCoffeeMakerCard(coffeeMakerObj))}
    </Grid>
  );
};

export default Content;
