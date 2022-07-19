import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ModalGrafico from "../ModalGrafico/ModalGrafico";
import Typography from '@mui/material/Typography';

function ChartColunm(props) {
    const [menuRapido, setMenuRapido] = React.useState('hoje');
    const [dataInicial, setDataInicial] = React.useState(new Date().toLocaleString("en-US", {timeZone: 'America/Sao_Paulo'}));
    const [dataFinal, setDataFinal] = React.useState(new Date().toLocaleString("en-US", {timeZone: 'America/Sao_Paulo'}));
    const [dados, setDados] = React.useState([])
    const [grafico, setGrafico] = React.useState(null)
    const [backdrop, setBackdrop] = React.useState(false)
    const [quantidade, setQuantidade] = React.useState(0);


    useEffect( ()=>{
      async function jsons(){
        const counts=[];
        (dados && dados.forEach((x) => {
          counts.push([x.cidade, parseInt(x.quantidade), x.quantidade, 'blue']);
        }))
        return counts;
    }
        if(Object.keys(dados).length > 0){  
        jsons().then(async (counts)=> {
          counts.unshift(['Cidade', "Quantidade", { role: "annotation", type: "string" }, {role: "style" }])
          setQuantidade(Object.keys(dados).length)
          return counts;
        }).then((result) =>  {
        setGrafico(result)});
        setBackdrop(!backdrop)
        console.log(grafico)
        }else{
        console.log('vazio')
          const vazio = [['sem dados','sem dados'],[0,0]];
          setGrafico(vazio)
          setQuantidade(0)
          setBackdrop(!backdrop)
     }
     
    },[dados])

    useEffect(()=> {
       setBackdrop(!backdrop)
      
      fetch('http://192.168.88.88:5000/cliente_servico/valor/cidade', {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
       }).then(res => res.json())
        .then(result => {
           setDados(result);
           });
        }, [])

 

    const options = {
        title:
        'Serviços por Cidade',
        legend: {
            position: "none"
        },
            chartArea:{ 
              width: '90%'
      }
      };


/*       const chartEvents = [
        {
          eventName: "select",
          callback({ chartWrapper }) {
            console.log("Selected ", chartWrapper.getChart().getSelection()[0].row);
            const itemSelected = grafico[chartWrapper.getChart().getSelection()[0].row + 1][0]
            chartWrapper.getChart().setSelection(null,null);
            
           var modal = []; 
            dados.map((element)=>{
             if(Object.values(element)[0] === itemSelected){
              const minimodal = Object.keys(element).map(function(key) {
                return  element[key];
              }); 
              modal.push(minimodal) 
            }      
            })

            const cabecalho = Object.keys(dados[0])
            setLabelModal(cabecalho);
            setDadosModal(modal);
            setModalStats(true);
          }
        }
      ]; */

  return (
      <>
    {grafico && (
      
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={grafico && grafico}
      options={options}

    />
   
  )}

       <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
     
   </>
  );
}
export default ChartColunm;