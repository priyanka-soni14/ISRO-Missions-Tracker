import { Box } from '@mui/material';
import react from 'react'
import { useLocation } from 'react-router-dom';

const Feed=(props)=>{
  
        const location = useLocation();
        const { mission } = location.state;
    return (
        <>
            <Box 
            sx={{ 
                position: 'absolute', 
                left: '55%', 
                top: '50%', 
                transform: 'translate(-50%, -30%)', 
                width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' }, 
                bgcolor: 'background.paper', 
                boxShadow: 3, 
                p: 2, 
                borderRadius: 1 
            }}>
            <div className='mission-details'>
            <h2>Details</h2>
                <ul>
                    <li>UUID={mission.uuid}</li>
                    <li>Name={mission.name}</li>
                    <li>Serial Number={mission.serialNumber}</li>
                    <li>Launch Date={mission.launchdate}</li>
                    <li>Link: <a href={mission.link} target="_blank" rel="noopener noreferrer">Mission Link</a></li>
                    <li>Mission Status: {mission.missionStatus}</li>
                </ul>
            </div>
           
            </Box>
        </>
    )
}
export default Feed;