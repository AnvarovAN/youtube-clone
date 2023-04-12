import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import RestoreIcon from '@mui/icons-material/Restore';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Menu() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  

  return (
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'black' }}>
      <List sx={{position:"relative", left:"20px", top:"30px",}} component="nav" aria-label="main mailbox folders">
        <ListItemButton disablePadding sx={{ display:"flex"}} >
          <ListItemIcon>
            <HomeIcon  sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText  sx={{color:"white"}} primary="Home" />
        </ListItemButton>

        <ListItemButton  sx={{ display:"flex"}} >
          <ListItemIcon>
            <WhatshotIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white"}} primary="Trending" />
        </ListItemButton>

        <ListItemButton  sx={{ display:"flex", mb:"30px"}} >
          <ListItemIcon>
            <SubscriptionsIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white"}} primary="Subscriptions" />
        </ListItemButton>
      <Divider sx={{bgcolor:"#fff", width:"280px"}} />

        <ListItemButton sx={{ display:"flex", mt:"40px"}} >
          <ListItemIcon>
            <VideoLibraryIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white",}} primary="Library" />
        </ListItemButton>
        <ListItemButton  sx={{ display:"flex"}} >
          <ListItemIcon>
            <RestoreIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white",}} primary="History" />
        </ListItemButton>

        <ListItemButton  sx={{ display:"flex"}} >
          <ListItemIcon>
            <AccessAlarmIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white",}} primary="Watch later" />
        </ListItemButton>

        <ListItemButton  sx={{ display:"flex"}} >
          <ListItemIcon>
            <StarOutlineIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white",}} primary="Favourutes" />
        </ListItemButton>

        <ListItemButton  sx={{ display:"flex"}} >
          <ListItemIcon>
            <FavoriteBorderIcon sx={{color:"#fff"}}/>
          </ListItemIcon>
          <ListItemText sx={{color:"white",}} primary="Liked videos" />
        </ListItemButton>
        

      </List>

    </Box>
  );
}
export default Menu