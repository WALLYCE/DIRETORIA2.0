import { Grid } from "@mui/material";
import ChartBarBalance from "../../components/ChartBalance/ChartBalance";
import ChartVendasCidade from "../../components/ChartColunm/ChartVendasCidade";
import ChartCancelamentosCidade from "../../components/ChartColunm/ChartCancelamentosCidade";
import ChartGoal from "../../components/ChartGoal/ChartGoal";
import ChartColunm from "../../components/ChartColunm/ChartColunm"
function Hdtvs(){
    return (
        <Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1  }}>
          <ChartColunm url={`${process.env.REACT_APP_BASE_URL}/hdtv/cidade`} color={''} title="Instalações de HDTV por cidade" titulo={'cidade'}></ChartColunm>
        </Grid>
        
        </Grid>
    )
}
export default Hdtvs;