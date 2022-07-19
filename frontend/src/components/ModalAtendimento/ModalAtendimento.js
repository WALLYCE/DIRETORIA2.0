import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Grid from  '@mui/material/Grid';
import Divider from  '@mui/material/Divider'

function ModalAtendimento(props) {
  
 const[descricaoAbertura, setDescricaoAbertura] = useState('');
 const[protocoloAtendimento, setProtocoloAtendimento] = useState('');
 const[usuarioAbertura, setUsuarioAbertura] = useState('');
 const[mensagens, setMensagens] = useState([]);
 



useEffect(()=>{
  if(props.protocolo != 0){
  setProtocoloAtendimento(props.protocolo)
  axios.post(`${process.env.REACT_APP_BASE_URL}/atendimento`, {protocolo: props.protocolo})
  .then((result)=>{
    if(result.data[0]['descricao_abertura']!= undefined){
     setDescricaoAbertura(result.data[0]['descricao_abertura'])
     setUsuarioAbertura(result.data[0]['name'])
     axios.post(`${process.env.REACT_APP_BASE_URL}/atendimento/mensagem`, {protocolo: props.protocolo})
     .then((resposta)=>{
        
        console.log(resposta.data)
        setMensagens(resposta.data)
     })
   }
   
  })
}
},[props.protocolo])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      



  return (
      <Dialog scroll={'body'} maxWidth={'lg'}  fullWidth={true} open={props.status} onClose={props.event}>
        <DialogTitle>Atendimento protocolo: {props.protocolo}</DialogTitle>
        <DialogContent  >
        <Grid container >
            <Grid item xs={12}>
                
              <Grid item xs={6}> Aberto por : {usuarioAbertura}</Grid>
                <TextField
                        id="outlined-multiline-static"
                        label="Descrição de abertura"
                        multiline
                        rows={4}
                        value={descricaoAbertura}                     
                        sx={{width: '100%', my: 2}}
                        disabled/>
              <Divider/>
             </Grid>
       {mensagens && mensagens.map((item)=>{
        return(
            <Grid item xs={12}>
            {item.name} - Mensagem:
            <TextField
                        id="outlined-multiline-static"
                        label="Descrição de abertura"
                        multiline
                        rows={4}
                        value={item.mensagem}                     
                        sx={{width: '100%', my: 2}}
                        disabled/>
            </Grid>
        )
       })}

        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.event}>Sair</Button>
        </DialogActions>
      </Dialog>
  );
}
export default ModalAtendimento;