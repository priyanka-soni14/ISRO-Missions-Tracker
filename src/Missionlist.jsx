import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import react, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import SlicSlider from './SlicSlider';


const Missionlist=()=>{
    const [mission,setmission]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      const url=  "https://services.isrostats.in/api/spacecraft"
      fetch(url)
      .then(response => response.json())
      .then(data => setmission(data))

    },[])
    const Details = (mission) => {
        navigate('/missiondetails', { state: { mission } });
    };

    return  (
        <>
        <SlicSlider/>
       
        <div className='missionlist-div'>
            <Typography variant="h4" sx={{textAlign:"center", bgcolor:"black",color:"white"}}>Mission Details</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Mission</TableCell>
                            <TableCell align="center">Launch Date</TableCell>
                            <TableCell align="center">Mission status</TableCell>
                            <TableCell align="right">View Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            mission.map(mission=>(
                          <TableRow key={mission.uuid}>
                             <TableCell >{mission.name}</TableCell>
                             <TableCell sx={{textAlign:"center", width:"85px"}}>{mission.launchDate}</TableCell>
                             <TableCell sx={{textAlign:"center"}}>{mission.missionStatus}</TableCell>
                             <TableCell >
                               <Button className='viewlink-button' variant="contained" color="success"
                                 onClick={() => Details(mission)}>Viewlink
                               </Button>
                             </TableCell>
                           </TableRow> )
                           )
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
        </>
    )
}
export default Missionlist;