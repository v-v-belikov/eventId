import React from 'react';
import { Box, Tabs, Tab, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Pagination, Card, Select, FormControl, MenuItem, FormHelperText, InputLabel } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import avatar from "./assets/avatar.png";
import "./Contacts.css";

export const Contacts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }} style={{backgroundColor: "white", padding: "25px 45px"}}>
      <h2>Мои контакты</h2>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="contacts tabs" 
        centered
        // textColor="black"
        // indicatorColor="secondary"
        style={{
          marginBottom: "25px"
        }}
      >
        <Tab label="Компании" style={{marginRight: "40px"}} color="black"/>
        <Tab label="Посетители" />
      </Tabs>
      <div style={{display: "flex", justifyContent: "space-between", height: "75px"}}>
        <div style={{display: "flex", width: "48%", flexDirection: "column"}}>
          <Box style={{display: "flex"}}>
            <FormControl style={{width: "40%", marginRight: "10px", height: "20px", fontSize: "10px"}}>
              <InputLabel style={{ fontSize: "10px", top: '-5px', left: "-5px"}} id="demo-simple-select-helper-label">Сортировать</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value=""
                label="Сортировать"
                onChange={handleChange}
                sx={{ height: 40 }}
                style={{fontSize: "12px"}}
              >
                <MenuItem value="">
                  <em>10</em>
                </MenuItem>
                <MenuItem value={10}>25</MenuItem>
                <MenuItem value={20}>50</MenuItem>
                <MenuItem value={30}>100</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{width: "40%", marginRight: "10px", height: "20px", fontSize: "10px"}}>
              <InputLabel style={{ fontSize: "10px", top: '-5px', left: "-5px"}} id="demo-simple-select-helper-label">Сортировать</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value=""
                label="Сортировать"
                onChange={handleChange}
                sx={{ height: 40 }}
                style={{fontSize: "12px"}}
              >
                <MenuItem value="">
                  <em>10</em>
                </MenuItem>
                <MenuItem value={10}>25</MenuItem>
                <MenuItem value={20}>50</MenuItem>
                <MenuItem value={30}>100</MenuItem>
              </Select>
            </FormControl>
            {/* <Select>Сортировать по</Select> */}
          </Box>
        </div>
        <div style={{display: "flex", width: "48%", flexDirection: "column"}}>
          <Button variant="contained" startIcon={<EmailOutlinedIcon />} style={{height: "37.5px", fontSize: "10px"}}>
            Экспортировать контакты
          </Button>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", width: "48%", flexDirection: "column"}}>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
        </div>
        <div style={{display: "flex", width: "48%", flexDirection: "column"}}>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
          <Paper style={{display: "flex", alignItems: "center", padding: "10px", marginBottom: "10px"}} elevation={3} square={false} >
            <div style={{marginRight: "25px"}}>
              <div style={{fontSize: "12px", fontWeight: 600, textAlign: "left"}}>Харьковская Вероника</div>
              <div style={{fontSize: "10px", textAlign: "left"}}>Русский стандарт</div>
            </div>
            <div style={{marginRight: "15px"}}>
              <div style={{fontSize: "10px"}}>21.06.2022</div>
              <div style={{fontSize: "10px"}}>14:30</div>
            </div>
            <img src={avatar} width="40px" style={{}}/>
          </Paper>
        </div>
      </div>

        
      {/* <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                  <br />
                  {row.company}
                </TableCell>
                <TableCell>
                  {row.date}
                  <br />
                  {row.time}
                </TableCell>
                <TableCell>
                  <Avatar alt={row.name} src={row.avatar} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination count={5} />
      </Box>
    </Box>
  );
}