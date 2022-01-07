import React from 'react';
import { Grid, Paper, Box, Typography, Table, TableBody, TableHead, TableRow, TableCell, CardContent } from '@mui/material';

const Occupation = ({ occuppation }) => {

  return (
      <Card >
        <CardContent>
          <Typography> { occupation.description } </Typography>
          <Typography> { occupation.activity } </Typography>
        </CardContent>
      </Card>
    );
};
export default Occupation;