import { LocalizationProvider } from '@mui/x-date-pickers';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs from '../../utils/common/helper/dayJS';
import './Calender.scss';
import Box from '@mui/material/Box';
import {
  CalendarContainer,
  CustomCalendar,
  CustomPopover,
  StyledCalendarIcon,
} from './Calender.styled';
import Button from '../Button/Button';

function Calender() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateChange = (
    newDate: dayjs.Dayjs | null,
    event: string | undefined
  ) => {
    if (newDate) {
      setSelectedDate(newDate);
      if (event === 'finish') {
        handleClose();
      }
    }
  };
  const open = Boolean(anchorEl);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarContainer>
        <Box onClick={handleOpen}>
          <StyledCalendarIcon />
        </Box>

        <CustomPopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <div style={{ padding: '10px 20px' }}>
            <CustomCalendar
              showDaysOutsideCurrentMonth
              value={selectedDate}
              onChange={(date, event) => handleDateChange(date, event)}
              dayOfWeekFormatter={(weekday) => `${weekday.format('dd')}`}
              views={['year', 'month', 'day']}
            />
          </div>
        </CustomPopover>

        <Typography variant="h4">
          Selected Date: {selectedDate.format('YYYY-MM-DD')}
        </Typography>

        <Button variant="contained" color="info">
          Submit the form asap
        </Button>
      </CalendarContainer>
    </LocalizationProvider>
  );
}

export default Calender;
