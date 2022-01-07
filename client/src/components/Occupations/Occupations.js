import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Occupation from './Occupation/Occupation';

const Occupations = () => {
    const { occupations } = useSelector((state) => state.occupations);
    console.log("aqui");
    console.log(occupations);
    return(
        <Grid >
            {occupations?.map((occupation) => (            
                <Grid key={occupation._id} item xs={12} sm={12} md={6} lg={6}>
                    <Occupation occupation={occupation} />
                </Grid>
            ))}
        </Grid>
    )
};
export default Occupations;
