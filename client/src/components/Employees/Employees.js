import React, { Component } from 'react';
import { Typography, Paper, CardContent, Card, Divider, Box } from '@mui/material';

import api from '../../api';

class Employees extends Component {
    state = {
        employees: [],
    }
    async componentDidMount(){
        const response = await api.get('/employees');

        this.setState({ employees: response.data });
    }
    
    render(){
        const { employees } = this.state;
        return (
            <Paper align='center'>
                <Typography variant="h3">
                    Funcionários
                </Typography>
                {employees?.map((employee) => (    
                    <Box component="span" sx={{ display: 'inline-block', mx: '6px' }} key={employee.id}>
                        <CardContent >
                            <Card spacing={6}>                            
                                <Typography variant="h5" >
                                    {employee.first_name} {employee.last_name}
                                </Typography>
                                <Divider />
                                <Typography align="left" >
                                    Data de Nascimento: {employee.birth_date}
                                </Typography>
                                <Typography align="left" >
                                    Adimissão: {employee.admission_date}
                                </Typography>
                                <Typography align="left" >
                                    Salário: {employee.salary}
                                </Typography>
                                <Card>
                                    <Typography variant="h6" align="left" >
                                        Cargo:
                                    </Typography>
                                    <Card >
                                        <Typography align="left" variant="subtitle1" >
                                            Descrição: {employee.occupation.description}
                                        </Typography>
                                        <Typography align="left" >
                                            Atividade: {employee.occupation.activity}
                                        </Typography>
                                    </Card>
                                </Card>
                            </Card>
                        </CardContent>                
                    </Box>
                ))}
            </Paper>
        );
    }
};

export default Employees;
