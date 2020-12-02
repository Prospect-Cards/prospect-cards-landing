import { useSaveProfilePictureMutation } from 'types/graphql'
import Dumb from './ProfilePicture'
import React from 'react'

interface Props {
  profilePictureUrl: string;
}

const ProfilePicture = ({ profilePictureUrl }: Props): JSX.Element => {
  const [savePhoto, { loading }] = useSaveProfilePictureMutation()

  return (
    <Dumb
      savePhoto={ savePhoto }
      loading={ loading }
      profilePictureUrl={ profilePictureUrl }
    />
  )
}

export default ProfilePicture
