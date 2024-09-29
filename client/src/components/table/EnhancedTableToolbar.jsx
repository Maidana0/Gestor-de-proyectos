import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Tooltip, IconButton, Toolbar, Typography } from '@mui/material';
import deleteIcon from "@assets/icons/delete.svg"
import filterIcon from "@assets/icons/filter_list.svg"

export default function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        bgcolor: "var(--background-color)",
        color: "var(--white-color)",
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} seleccionado(s)
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Proyectos
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <img src={deleteIcon} alt="delete" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <img src={filterIcon} alt="filter" />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
