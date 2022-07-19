import { Grid } from "@mui/material";
import ChartColunm from "../../components/ChartColunm/ChartColunm";
import ChartVendasVendedores from "../../components/ChartColunm/ChartVendasVendedores";
function Vendedores(){

    return(
        <>
         <Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1  }}>
        <ChartVendasVendedores url={`${process.env.REACT_APP_BASE_URL}/vendas/vendedores`} color={''} title="Vendas por Vendedor" titulo={'vendedor'}></ChartVendasVendedores>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartColunm url={`${process.env.REACT_APP_BASE_URL}/upgrade/vendedor`} color={'green'} title="Upgrade por Vendedor" titulo={'vendedor'}></ChartColunm>
        </Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartColunm url={`${process.env.REACT_APP_BASE_URL}/migracoes/vendedores`} color={'#FFFF00'} title="Migrações por Vendedor" titulo={'vendedor'}></ChartColunm>
        </Grid>
        </Grid>
        </>
    )

}

export default Vendedores;