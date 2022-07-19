import { Grid } from "@mui/material";
import ChartColunm from '../../components/ChartColunm/ChartColunm';

function Ligacoes(){
    return (
    
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1  }}>
         <ChartColunm color={''} title="Ligações realizadas por Ramal" titulo={'Ramal'}></ChartColunm> 
        </Grid>
       
    )
}
export default Ligacoes;