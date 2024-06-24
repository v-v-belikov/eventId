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
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const WebEngineer = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto', padding: 2 }}>
      <CardContent>
        <Button
          variant="contained"
          startIcon={<Save />}
          fullWidth
          sx={{ marginBottom: 2, backgroundColor: 'red' }}
          style={{ backgroundColor: "rgba(202, 11, 52, 1.00)"}}
        >
          Загрузить книгу контактов
        </Button>
        <Button
          variant="contained"
          startIcon={<MailOutline />}
          fullWidth
          sx={{ marginBottom: 2, backgroundColor: 'red' }}
          style={{ backgroundColor: "rgba(202, 11, 52, 1.00)"}}
        >
          Сгенерировать визитные карты
        </Button>
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          fullWidth
          sx={{ marginBottom: 2, backgroundColor: 'red' }}
          style={{ backgroundColor: "rgba(202, 11, 52, 1.00)"}}
        >
          Сохранить файл
        </Button>
      </CardContent>
    </Card>
  );
};