
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const columns = [
  { field: 'id', headerName: 'Código', width: 100},
  { field: 'nome', headerName: 'Nome', width: 300},
  { field: 'plano', headerName: 'Plano', width: 300},
  { field: 'cidade', headerName: 'Cidade', width: 200},
  { field: 'faturas', headerName: 'Faturas', width: 100},
  { field: 'tempo', headerName: 'tempo', width: 100 },
  { field: 'valor', headerName: 'Valor', width: 100 },
  { field: 'status', headerName: 'Status', width: 200}
];
    







export default function DataTable() {

    const [backdrop, setBackdrop] = useState(false);
    const [minimoFaturas, setMinimoFaturas] = useState(2);
    const [labels, setLabels] = useState([]);
    const [dados, setDados] = useState([])
 
    useEffect(()=>{
        setBackdrop(true)
        handleGetDados();
      },[])
     
      const handleGetDados = () =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/clientes_inadimplentes`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({minimo: minimoFaturas})
         }).then(res => res.json())
          .then(result => { 
    
            if(result.length=== 0){
              setLabels(['dados']);
              setDados([])
            }else{
            setLabels(Object.keys(result[0]));
            setDados(result)
            console.log(result)
            }
            setBackdrop(false)
          })
        }

        const handleChangeOS = (event) =>{
            const value = event.target.value;
            setMinimoFaturas(value);
           }
          
           const handleClickFiltrar = () =>{
            setBackdrop(true)
            handleGetDados()
           }

  return (
    <>
    <Typography variant="h3">Clientes em inadimplência</Typography>
    <Grid container mt={2} spacing={2}>
    
      <Grid item xs={12} md={2} sm={2}>
           <TextField id="outlined-basic" sx={{width: '100%'}} type="number" value={minimoFaturas} onChange={handleChangeOS} label="Nº mínimo de faturas" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={2} sm={2}>
        <Button sx={{height: '100%'}} onClick={handleClickFiltrar} variant="contained">Filtrar</Button>          
      </Grid>
<Grid item xs={12} md={12} sm={12}>
    <div style={{ height: 1080, width: '100%' }}>
      <DataGrid
        rows={dados && dados}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[2]}
      />
    </div>
    </Grid>
    </Grid>
</>
  );
}
