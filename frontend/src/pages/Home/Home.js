import { Grid} from '@mui/material';
import Clients from '../../components/Card/Clients';
import Cancellations from '../../components/Card/cancellations';
import Sales from '../../components/Card/Sales';
import Hdtvs from '../../components/Card/hdtvs';
import AllCities from '../../components/ChartColunm/AllCities';

 function Home  (props) {
return (
        
            <Grid container spacing={2}>
                <Grid  item xs={12} md={3} sm={3}>
                    <Clients/>
                </Grid>
                <Grid  item xs={12} md={3} sm={3}>
                    <Hdtvs/>
                </Grid>
                <Grid  item xs={12} md={3} sm={3}>
                    <Cancellations/>
                </Grid>
                <Grid  item xs={12} md={3} sm={3}>
                    <Sales/>
                </Grid>
                
                <Grid  item xs={12} md={12} sm={12}>
                    <AllCities/>
                </Grid>
                
                
            </Grid>
     

);
        }export default Home;