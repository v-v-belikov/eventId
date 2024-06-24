import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
  Grid,
} from '@mui/material';
import { Save, MailOutline, Phone, Email, LocationOn, Language, Telegram} from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const ContactCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{fontWeight: 600}}>
          Иван Иван Отчество
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }} style={{fontWeight: 600}}>
          руководитель
        </Typography>
        <Button
          variant="contained"
          startIcon={<Save />}
          fullWidth
          sx={{ marginBottom: 1, backgroundColor: 'red' }}
          style={{ backgroundColor: "rgba(202, 11, 52, 1.00)"}}
        >
          Сохранить в контакты
        </Button>
        <Button
          variant="contained"
          startIcon={<MailOutline />}
          fullWidth
          sx={{ marginBottom: 2, backgroundColor: 'red' }}
          style={{ backgroundColor: "rgba(202, 11, 52, 1.00)"}}
        >
          Отправить на почту
        </Button>
        <Button
          variant="contained"
          startIcon={<LocalPhoneOutlinedIcon sx={{ color: "rgba(202, 11, 52, 1.00)"}}/>}
          fullWidth
          sx={{ marginBottom: 2, borderColor: "#f6f6f6", backgroundColor: 'white', color: "black" }}
          style={{backgroundColor: 'white', display: "inline-flex", justifyContent: "space-between"}}
        >
          <Typography variant="body2">+79999999111</Typography>
          <ArrowForwardIosIcon sx={{ color: "#e0e0e0"}}/>
        </Button>
        <Button
          variant="contained"
          startIcon={<EmailOutlinedIcon sx={{ color: "rgba(202, 11, 52, 1.00)"}}/>}
          fullWidth
          sx={{ marginBottom: 2, borderColor: "#f6f6f6", backgroundColor: 'white', color: "black" }}
          style={{backgroundColor: 'white', display: "inline-flex", justifyContent: "space-between"}}
        >
          <Typography variant="body2">test@test.ru</Typography>
          <ArrowForwardIosIcon sx={{ color: "#e0e0e0"}}/>
        </Button>

        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <IconButton color="primary" aria-label="telegram">
            <Telegram />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};