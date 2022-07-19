import { Grid } from "@mui/material";
import ChartColunm from "../../components/ChartColunm/ChartColunm";
import ChartTodasRenovacoes from "../../components/ChartColunm/ChartTodasRenovacoes";
function Contratos(){
    return (
        <Grid>
        <Grid item xs={12} md={12} sm={12} sx={{ borderBottom: 1  }}>
        <ChartColunm url={`${process.env.REACT_APP_BASE_URL}/upgrade/cidade`} color={'green'} title="(Upgrade de Plano com renovação de Contrato) por Cidade" titulo="cidade"></ChartColunm>
        </Grid>

        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartColunm url={`${process.env.REACT_APP_BASE_URL}/renovacoes/cidade`} color={'blue'} title="(Somente Renovação de contrato) por Cidade" titulo="cidade"></ChartColunm>
        </Grid>

        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartColunm url={`${process.env.REACT_APP_BASE_URL}/migracoes/cidade`} color={'#FFFF00'} title="(Migrações de Tecnologia com renovação de Contrato) por Cidade" titulo="cidade"></ChartColunm>
        </Grid>


        <Grid item xs={12} md={12} sm={12} sx={{ marginTop: 10, borderBottom: 1  }}>
        <ChartTodasRenovacoes color={'purple'} title="(Migrações + Renovações + Upgrade)" titulo="cidade"></ChartTodasRenovacoes>
        </Grid>
        </Grid>
    )
}
export default Contratos;