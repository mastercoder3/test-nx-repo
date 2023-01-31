// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CardDetail from '../views/CardDetail';
import Card from '../views/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import data from '../utils/data.json';
import axios from '../utils/axios';

const textStyle = {whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}

export function App() {

  const [selectedCardDetails, setSelectedCardDetails] = useState(null);
  const [dataToMap, setDataToMap] = useState([...data]);

  async function handleSubmit() {
    const request = await axios.post('/test');
    console.log(request);
  }

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Grid container justifyContent='space-evenly'>
        {
          selectedCardDetails &&         <Grid item md={7}>
          <CardDetail title="Details" sx={{ wdith: '100%', height: '100%' }}>
            <Box mt={10} ml={3} mr={3} mb={10}>
              <Typography variant='h6' ml={1}>Real Name: {selectedCardDetails?.name}</Typography>
              <Typography variant='h6' ml={1}>Player Name: {selectedCardDetails?.player}</Typography>
              <Typography variant='h6' ml={1}>Assets: {selectedCardDetails?.asset}</Typography>
            </Box>
          </CardDetail>
        </Grid>
        }
        <Grid item></Grid>
        <Grid item md={4}>
          <CardDetail title="Controls" sx={{ wdith: '100%', height: '100%' }}>
            <Box mt={10} ml={3} mr={3} mb={10}>
              <Stack direction="row" justifyContent="space-around">
                <Button disabled={!selectedCardDetails} onClick={() => setDataToMap([...data]?.sort((a, b) => a?.name.localeCompare(b?.name)))}>SORT ASC</Button>
                <Button disabled={!selectedCardDetails} onClick={() => setDataToMap([...data]?.sort((a, b) =>  b?.name.localeCompare(a?.name)))}>SORT DESC</Button>
              </Stack>
              <Stack direction="row" justifyContent="space-around">
                <Button variant='contained' disabled={!selectedCardDetails} onClick={handleSubmit}>Submit</Button>
              </Stack>
            </Box>
          </CardDetail>
        </Grid>
      </Grid>
      <Grid container justifyContent='space-evenly' mt={12}>
        {
          dataToMap?.map(item =>
            <Grid item m={1} md={3} sx={{cursor: 'pointer'}} onClick={() => setSelectedCardDetails(item)}>
              <Card>
                <Typography variant='h6' ml={1} sx={textStyle}>Real Name: {item?.name}</Typography>
                <Typography variant='h6' ml={1} sx={textStyle}>Player Name: {item?.player}</Typography>
                <Typography variant='h6' ml={1} sx={textStyle}>Assets: {item?.asset}</Typography>
              </Card>
            </Grid>
          )
        }

      </Grid>
    </Box>
  );
}

export default App;
