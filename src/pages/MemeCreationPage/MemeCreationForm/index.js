import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid,
  TextField,
  Typography, 
  Select,
  MenuItem 
} from '@material-ui/core';
import clsx from 'clsx';

import MuButton from 'components/UI/Button/MuButton';

const useStyles = makeStyles(theme => ({
  formField: {
    margin: 0,
    width: '100%',
    marginBottom: theme.spacing(5),
    '& .MuiInputBase-root': {
      borderBottom: `1px solid ${theme.palette.primary.secondary}`,
      borderRadius: 0,
      padding: 0,
      '& input, textarea': {
        padding: theme.spacing(1.5, 0)
      }
    },
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
      color: theme.palette.primary.main
    },
    '& fieldset': {
      border: 'none'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  numberInput: {
    '& input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '& input::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    } 
  },
  helperText: {
    color: theme.palette.primary.main
  },
  formItem: {
    marginBottom: theme.spacing(3)
  },
  formLabel: {
    fontWeight: 'bold'
  },
  select: {
    '&.MuiInputBase-root': {
      borderBottom: `1px solid ${theme.palette.primary.secondary}`,

      '& svg': {
        color: theme.palette.text.primary
      },

      '&::before': {
        borderBottom: 'none !important'
      },
      '&::after': {
        borderBottom: 'none !important'
      }
    },
    marginBottom: theme.spacing(5),

    '&.MuiSelect-root': {
      padding: theme.spacing(1.5, 3, 1.5, 0),
      borderBottom: `1px solid ${theme.palette.primary.secondary}`,
    }
  },
  selectPaper: {
    background: theme.palette.primary.main
  }
}));

const MemeCreationForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Typography className={classes.formLabel}>Name</Typography>
        <TextField
          name="Name"
          variant="outlined"
          className={classes.formField}
          value={values.Name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Please input meme name'
          helperText={(errors.Name && touched.Name) && errors.Name}
          margin="normal" />
      </Grid>
      <Grid container>
        <Typography className={classes.formLabel}>Description</Typography>
        <TextField
          name='Description'
          variant="outlined"
          multiline
          className={classes.formField}
          value={values.Description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Please input meme description'}
          helperText={(errors.Description && touched.Description) && errors.Description}
          margin="normal" />
      </Grid>
      <Grid container>
        <Typography className={classes.formLabel}>Price</Typography>
        <Grid container wrap='nowrap'>

          <TextField
            name="Price"
            variant="outlined"
            type='number'
            className={clsx(classes.formField, classes.numberInput)}
            value={values.Price}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Please input meme price'
            helperText={(errors.Price && touched.Price) && errors.Price}
            margin="normal" />
            <Select 
              className={classes.select}
              name='PriceType'
              value={values.PriceType}
              onChange={handleChange}
              onBlur={handleBlur}
              MenuProps={{
                classes: {
                  paper: classes.selectPaper
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
              labelId="label" 
              id="price-selector">
              <MenuItem value="ETH">ETH</MenuItem>
              <MenuItem value="DANK">DANK</MenuItem>
            </Select>
        </Grid>
      </Grid>
      <Grid container>
        <MuButton 
          onClick={handleSubmit}
          variant="contained" 
          color="primary">
          Connect wallet and create
        </MuButton>
      </Grid>
    </>
  );
};

export default MemeCreationForm;