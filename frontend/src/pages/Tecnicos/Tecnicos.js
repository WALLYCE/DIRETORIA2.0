
import ChartOSTecnicos from '../../components/ChartColunm/ChartOSTecnicos'
import {Grid} from "@mui/material";
import ChartOSTipo from '../../components/ChartColunm/ChartOSTipo';
import ChartOSCidade from '../../components/ChartColunm/ChartOSCidade';
export default function Tecnicos(){
   return (
   <>
     <Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1  }}>
        <ChartOSTecnicos/>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1, marginTop: 2 }}>
            <ChartOSCidade/>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1, marginTop: 2 }}>
            <ChartOSTipo/>
        </Grid>
    </Grid>
   
   </>
   
   )
}