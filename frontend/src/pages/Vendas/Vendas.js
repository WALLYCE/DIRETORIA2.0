import { Grid } from "@mui/material";
import ChartBarBalance from "../../components/ChartBalance/ChartBalance";
import ChartVendasCidade from "../../components/ChartColunm/ChartVendasCidade";
import ChartCancelamentosCidade from "../../components/ChartColunm/ChartCancelamentosCidade";
import ChartGoal from "../../components/ChartGoal/ChartGoal";
import {ModalMetasContextProvider} from '../../context/ModalMetasContext'
function Vendas(){
    return (
        <Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1  }}>
        <ChartVendasCidade color={''} title="Vendas por Cidade" titulo={'cidade'}></ChartVendasCidade>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartCancelamentosCidade color={'#FF0000'} title="Cancelamentos por Cidade" titulo={'cidade'}></ChartCancelamentosCidade>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartBarBalance></ChartBarBalance>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ModalMetasContextProvider>
         <ChartGoal/>
        </ModalMetasContextProvider>   
        </Grid>
        </Grid>
    )
}
export default Vendas;