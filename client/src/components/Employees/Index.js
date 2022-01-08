import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import moment from 'moment';
import { Typography, Paper, CardContent, Card, Divider, Box, Button } from '@mui/material';


import api from '../../api';

class EmployeesIndex extends Component {
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
                <Button variant="outlined" color="success" onClick={() => { alert('vai criar')}} >Cadastrar</Button>
                {employees?.map((employee) => (    
                    <Box component="span" sx={{ display: 'inline-block', mx: '6px' }} key={employee.id}>
                        <CardContent >
                            <Card >
                                <Typography variant="h5" >
                                    {employee.first_name} {employee.last_name}
                                </Typography>
                                <Divider />
                                <Typography align="left"  >
                                    Data de Nascimento:{moment(employee.birth_date).format("DD/MM/YYYY")}
                                </Typography>
                                <Typography align="left" >
                                    Adimissão: {moment(employee.admission_date).format("DD/MM/YYYY")}
                                </Typography>                                
                                <Typography align="left" >
                                    Salário: <InputMask mask="R$ 99.999.999,99" value={employee.salary}/>
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
                                    <Button variant="outlined" size="small" sx={{ '& button': { m: 1} }}
                                    onClick={() => { alert('vai editar')}}>
                                        Editar
                                    </Button>
                                    <Button variant="outlined" color="error" size="small" sx={{ '& button': { m: 1} }}
                                    onClick={() => { alert('vai deletar')}}>
                                        Excluir
                                    </Button>
                                </Card>
                            </Card>
                        </CardContent>                
                    </Box>
                ))}
            </Paper>
        );
    }
};

export default EmployeesIndex;
