import React, {useState} from 'react';
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

export default () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  }

  const handleSearchBtnClick = () => alert('Hiciste click en buscar');

  const handleCleanBtnClick = () => alert('Hiciste click en limpiar');

  console.log(searchText)

  return (
    <Container>
      <Card>
        <Grid container>
          <Typography>Bienvenido!</Typography>
        </Grid>
        <Grid container>
          <label>Icono</label>
        </Grid>
        <TextField value={searchText} placeholder="Buscar..." onChange={handleSearchTextChange} />
        <Grid container>
          <Button  color="secondary" onClick={handleSearchBtnClick}>Limpiar</Button>
          <Button variant="contained" color="primary" onClick={handleCleanBtnClick}>Buscar</Button>
        </Grid>
      </Card>
    </Container>
  );
};
