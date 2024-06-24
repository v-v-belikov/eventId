import { useState } from 'react'
import './App.css'
import { ContactCard } from './ContactCard'
import { Box, Typography, AppBar, Toolbar, Button, useMediaQuery, IconButton } from '@mui/material'
import { Contacts } from './Contacts'
import { ВusinessСard } from './ВusinessСard'
import { WebEngineer } from './WebEngineer'
import MenuIcon from '@mui/icons-material/Menu';

const components = {
  "businessCard": <ВusinessСard/>,
  "contactCard": <ContactCard/>,
  "webEngineer": <WebEngineer/>,
  "contacts": <Contacts/>,
}

function App() {
  const [selectedPage, setSelectedPage] = useState("businessCard")
  const [isOpened, setIsOpened] = useState(false)
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div style={{backgroundColor: "rgba(246, 246, 246, 1.00)"}}>
      <Box sx={{ flexGrow: 1 }}  style={{marginBottom: "75px"}}>
      {

      }
      <AppBar style={{display: isSmallScreen && isOpened ? "none" : "inherit"}}>
        <Toolbar>
          {
              isSmallScreen && !isOpened && (
                  <>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsOpened(true)}>
                      <MenuIcon /> 
                    </IconButton>
                  </>
                )
          }
          { !isSmallScreen && (
            <>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("businessCard")}>Визитка</Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("contacts")}>Контакты</Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("contactCard")}>Карточка контакта</Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("webEngineer")}>Веб-инженер</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      </Box>
     
    {isSmallScreen && isOpened
      ? (
        <div style={{position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgb(25, 118, 210)", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setIsOpened(false)}>Закрыть меню</Button>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("businessCard")}>Визитка</Button>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("contacts")}>Контакты</Button>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("contactCard")}>Карточка контакта</Button>
          <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("webEngineer")}>Веб-инженер</Button>
        </div>
      ): null}
      <Box sx={{ textAlign: 'center', marginBottom: 5, marginTop: "35px"}}>
        <Typography variant="body2" style={{color: "rgba(202, 11, 52, 1.00)", fontSize: "20px", fontWeight: 600}}>
          A5000
        </Typography>
      </Box>
      {components[selectedPage]}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="body2" style={{fontSize: "20px", fontWeight: 600}}>
          EVENTID
        </Typography>
      </Box>
    </div>
  )
}

export default App
