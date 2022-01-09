import React, { Component } from 'react';
import { Box, Paper, Typography, TextField, FormControl, Select, MenuItem, InputLabel, Button, Card } from '@mui/material';

import api from '../../api';

class EmployeeNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: '',
            occupations: [],
            occupation_id: '',
            first_name: '',
            last_name: '',
            birth_date: '',
            admission_date: '',
            salary: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ occupation: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    async componentDidMount(){
        const response = await api.get('occupations/');
        this.setState({ occupations: response.data });
    }
    
    render(){        
        const { occupations, first_name, last_name, occupation_id, birth_date, admission_date, salary } = this.state;        
        return (
            <Paper align='center'>
                <Typography>
                    Cadastrar Funcionário
                </Typography>
                <FormControl>                            
                    <Box   component="form" noValidate autoComplete="off"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '250px' }, }} >
                        <FormControl >
                            <TextField required size="small" id="outlined-required" label="Required" defaultValue="Nome" values={first_name} />
                            <TextField required size="small" id="outlined-required" label="Required" defaultValue="Sobrenome" values={last_name} />
                            <TextField required size="small" id="outlined-required" label="Required" defaultValue="Data de Nascimento" values={birth_date} />
                            <TextField required size="small" id="outlined-required" label="Required" defaultValue="Data de Admissão" values={admission_date} />
                            <TextField required size="small" id="outlined-required" label="Required" defaultValue="Salário" values={salary} />

                            <FormControl>
                                <InputLabel id="occupation" >Cargo</InputLabel>
                                <Select labelId="occupation" size="small" id="outlined-required" label="Cargo" value="" >
                                    {occupations?.map((occupation) => (
                                        <MenuItem value={occupation_id} key={occupation.id} > { occupation.description } </MenuItem>
                                        ))}
                                </Select >
                            </FormControl>
                        </FormControl>
                        <Card>
                            <Button variant="outlined" size="small" sx={{ '& button': { m: 1} }} href="/employees" >
                                Voltar
                            </Button>
                            <Button variant="outlined" color="success" size="small" sx={{ '& button': { m: 1} }}
                            onClick={ () => { alert('vai salvar')}} >
                                Salvar
                            </Button>
                        </Card>
                    </Box>
                </FormControl>
            </Paper>

        )
    }
}

export default EmployeeNew;