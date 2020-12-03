import React, {useState} from 'react'
import {
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Grid
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'

const AVERAGE_FEE = 1.003
const TITLE_FONT = 16
const TITLE_FONT_WEIGHT = 500

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 8,
  },
  titleStyle: {
    fontSize: TITLE_FONT,
    fontWeight: TITLE_FONT_WEIGHT,
    opacity: 0.7,
  },
  closeButton: {
    position: 'absolute',
    right: 3,
    top: 3,
    // color: theme.palette.grey[500],
    padding: 4,
  },

}))

const averageCalculator = (pq, pp, cq, cp) => {
    const tempPq = Number(pq)
    const tempPp = Number(pp)
    const tempCq = Number(cq)
    const tempCp = Number(cp)

    const newPrice = AVERAGE_FEE * (((tempPq*tempPp)+(tempCq*tempCp))/(tempPq+tempCq))
    if(newPrice){
      return newPrice
    } else {
      return (
        'Check for Invalid Input'
      )
    }
}

const AvarageDownUpPage = (props) => {
  const {
    id,
    title,
    open,
    onClose,
    onSave,
    ...others
  } = props

  const classes = useStyles()

  const [prevQuantity, setPrevQuantity] = useState(0)
  const [prevPrice, setPrevPrice] = useState(0)
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(0)

  const [newPrice, setNewPrice] = useState(0)

  const onCancel = () => {
    onClose()
  }

  const onCalculate = () => {
    setNewPrice(averageCalculator(prevQuantity, prevPrice, currentQuantity, currentPrice))
  }

  return (
    <Dialog
      id={id}
      data-cid={'AvarageDownUpPage-root'}
      disableEscapeKeyDown
      aria-labelledby='average-down-up-title'
      open={open}
      {...others}
    >
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant='body1' className={classes.titleStyle}>
          {(title)}
        </Typography>
        {onClose ? (
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={onCancel}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        ) : null}
      </MuiDialogTitle>

      <DialogContent>
        <DialogContentText component={'span'} id='AvarageDownUpPage-DialogContentText'>
          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <TextField
                variant={'outlined'}
                label={'Previous Shares'}
                value={prevQuantity}
                onChange={(event) => setPrevQuantity(event.target.value)}
                size={'small'}
                type={'number'}
              />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <TextField
                variant={'outlined'}
                label={'Previous Price'}
                value={prevPrice}
                onChange={(event) => setPrevPrice(event.target.value)}
                size={'small'}
                type={'number'}
              />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <TextField
                variant={'outlined'}
                label={'Current Shares'}
                value={currentQuantity}
                onChange={(event) => setCurrentQuantity(event.target.value)}
                size={'small'}
                type={'number'}
              />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <TextField
                variant={'outlined'}
                label={'Current Price'}
                value={currentPrice}
                onChange={(event) => setCurrentPrice(event.target.value)}
                size={'small'}
                type={'number'}
              />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <Grid container>
                <Grid item lg={6} sm={6} xl={6} xs={12}>
                  {`New Price: `}
                </Grid>
                <Grid item lg={6} sm={6} xl={6} xs={12}>
                  {newPrice}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
      <Button
        id='Button-Cancel'
        variant='outlined'
        onClick={() => onCancel()}
        size='small'
        // className={classes.cancelButtonStyle}
      >
        {`Cancel`}
      </Button>
      <div style={{ flex: '1 0 0' }} />
      <Button
        id='Button-Done'
        variant='outlined'
        onClick={() => onCalculate()}
        autoFocus
        size='small'
        // className={classes.doneButtonStyle}
      >
        {`Calculate`}
      </Button>
    </DialogActions>
    </Dialog>
  )

}

// AvarageDownUpPage.propTypes = propTypes

// AvarageDownUpPage.defaultProps = defaultProps

export default AvarageDownUpPage