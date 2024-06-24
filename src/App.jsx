import { useState } from 'react'
import './App.css'
import { ContactCard } from './ContactCard'
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { Contacts } from './Contacts'
import { ВusinessСard } from './ВusinessСard'
import { WebEngineer } from './WebEngineer'

const components = {
  "businessCard": <ВusinessСard/>,
  "contactCard": <ContactCard/>,
  "webEngineer": <WebEngineer/>,
  "contacts": <Contacts/>,
}

function App() {
  const [selectedPage, setSelectedPage] = useState("businessCard")

  return (
    <div style={{backgroundColor: "rgba(246, 246, 246, 1.00)"}}>
      <Box sx={{ flexGrow: 1 }}  style={{marginBottom: "75px"}}>
        <AppBar>
          <Toolbar>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("businessCard")}>Визитка</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("contacts")}>Контакты</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("contactCard")}>Карточка контакта</Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => setSelectedPage("webEngineer")}>Веб-инженер</Button>
          </Toolbar>
        </AppBar>
      </Box>
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
