import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import { TableHead, Box, Checkbox, TableCell, TableRow, TableSortLabel } from "@mui/material"
import { alpha } from '@mui/material/styles';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Framework',
  },
  {
    id: 'language',
    numeric: false,
    disablePadding: false,
    label: 'Lenguaje',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Descripcion',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Tipo',
  },
  {
    id: 'state',
    numeric: false,
    disablePadding: false,
    label: 'Estado',
  },
];



export default function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{
      // bgcolor: (theme) => alpha(theme.palette.secondary.main, theme.palette.action.activatedOpacity),
      bgcolor: alpha("#000", 0.75),
    }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            sx={{ color: (theme) => theme.palette.secondary.light }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontWeight: '600', color: "var(--white-color)",
                ":hover": { color: (theme) => theme.palette.secondary.light },
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
