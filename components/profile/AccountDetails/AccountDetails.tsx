import {
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core'
import { ProfileQuery } from 'types/graphql'
import AddressForm from 'components/profile/AddressForm'
import ProfilePicture from 'components/profile/ProfilePicture'
import React from 'react'
import useStyles from './styles'

interface Props {
  data: ProfileQuery;
}

const AccountDetails = ({ data: { viewer } }: Props): JSX.Element => {
  const classes = useStyles()
  const { profilePictureUrl, email } = viewer

  return (
    <div className={ classes.root }>
      <Typography variant='h5' component='h1' display='inline'>
        Account Details
      </Typography>
      <FormControlLabel
        labelPlacement='start'
        className={ classes.floatRight }
        control={
          <Switch
            size='small'
            checked={ false }
            // onChange={ toggleChecked }
          />
        }
        label='Vacation Mode'
      />
      <div className={ classes.content }>
        <div className={ classes.profilePictureWrapper }>
          <ProfilePicture profilePictureUrl={ profilePictureUrl } />
        </div>
        <TextField
          disabled
          fullWidth
          label='Email'
          variant='outlined'
          value={ email }
        />
        <AddressForm />
      </div>
    </div>
  )
}

export default AccountDetails
