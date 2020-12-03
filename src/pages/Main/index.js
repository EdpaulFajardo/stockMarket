import React from 'react'
import AverageDownUpPage from '../AverageDownUp'
import {
  Button
} from '@material-ui/core'


const MainPage = (props) => {

  const [openDialog, setOpenDialog] = React.useState(false)

  const handleOpenDialog = (event) => {
    setOpenDialog(true)
  }

  const handleCloseDialog = (event) => {
    setOpenDialog(false)
  }  

  return (
    <div>
      <Button
        id='test-button-id'
        variant="contained" 
        color="secondary"
        onClick={handleOpenDialog}
        style={{margin: 32}}
      > 
        {`Average Down/Up`}
      </Button>

      <AverageDownUpPage
        title={'Average Down/Up'}
        open={openDialog}
        onClose={handleCloseDialog}
      />
    </div>
  )
}

// MainPage.propTypes = propTypes

// MainPage.defaultProps = defaultProps

export default MainPage