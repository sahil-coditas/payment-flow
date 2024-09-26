import { Box, Popover, styled } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import CalenderIcon from '@mui/icons-material/CalendarToday';
import { colors } from '../../utils/theme/colors';
import { returnStyleForTag } from '../../utils/common/helper/utils';

export const CustomPopover = styled(Popover)`
  .MuiPaper-root {
    border-radius: 1rem;
    box-shadow: none;
  }
`;

export const StyledCalendarIcon = styled(CalenderIcon)`
  font-size: 2rem;
  color: #59587e;
  background-color: ${colors.white};
  border-radius: 10%;
  padding: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const CustomCalendar = styled(DateCalendar)(({ theme }) => ({
  '.MuiDayCalendar-slideTransition': {
    minHeight: '223px',
  },
  '.MuiPickersCalendarHeader-root': {
    padding: 0,
  },
  '.MuiPickersCalendarHeader-label': {
    ...returnStyleForTag('h4', theme),
    color: colors.black,
  },
  '.MuiDayCalendar-weekContainer': {
    borderTop: `1px solid ${colors.grayColor}`,
    borderLeft: `1px solid ${colors.grayColor}`,
    borderRight: `1px solid ${colors.grayColor}`,
    margin: 0,

    '&:last-child': {
      borderBottom: `1px solid ${colors.grayColor}`,
    },
  },
  '.MuiDayCalendar-weekDayLabel': {
    ...returnStyleForTag('h5', theme),
    color: colors.black,
    width: '3rem',
  },
  '.MuiPickersDay-root': {
    borderRadius: 0,
    borderRight: `1px solid ${colors.grayColor}`,
    width: '3rem',
    height: '2.7rem',
    margin: 0,

    '&:hover': {
      backgroundColor: colors.hoverBackground,
    },

    '&:last-child': {
      borderRight: 'none',
    },

    '.Mui-selected': {
      backgroundColor: colors.primary,
      color: colors.white,
    },
  },
  '.MuiPickersDay-dayOutsideMonth': {
    background: colors.dayOutsideMonth,
  },
}));

export const CalendarContainer = styled(Box)`
  background-color: ${colors.grayColor};
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
