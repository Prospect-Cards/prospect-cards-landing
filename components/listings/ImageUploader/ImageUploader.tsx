import * as Sortable from 'react-sortable-hoc'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Scalars } from 'types/graphql'
import { acceptedFormats } from 'lib/image'
import { toast } from 'react-toastify'
import { useField } from 'formik'
import Dropzone from 'react-dropzone'
import NewListingThumb from 'components/listings/NewListingThumb'
import NewListingThumbs from '../NewListingThumbs'
import React from 'react'
import useStyles from './styles'

interface Props {
  images: Scalars['Upload'][];
  onSortEnd: Sortable.SortEndHandler;
}

const ImageUploader = ({ images }: Props): JSX.Element => {
  const dropzoneDisabled = images.length >= 8
  const [, meta, helpers] = useField('listing.images')
  const classes = useStyles()
  const handleDelete = (documentName: string): (() => void) => (): void => {
    const newAtts = images.filter(
      (img): boolean => img.document.name !== documentName,
    )
    helpers.setValue(newAtts)
  }

  const hasError = Boolean(meta.touched && meta.error)

  return (
    <div>
      <Dropzone
        maxSize={ 5000000 }
        disabled={ dropzoneDisabled }
        accept={ acceptedFormats }
        onDrop={ (newImages): void => {
          if (newImages.length === 0) {
            return
          }

          if (newImages.length + newImages.length > 8) {
            toast.error('Sorry. Maximum of 8 images...')
            return
          }

          helpers.setValue(
            images.concat(
              newImages.map((img): Scalars['Upload'] => ({
                document: img,
                preview: URL.createObjectURL(img),
              })),
            ),
          )
        } }
      >
        {({ getRootProps, getInputProps, isDragActive }): JSX.Element => (
          <Card className={ classes.dropzone }>
            <CardContent
              { ...getRootProps() }
              className={ classes.dropzoneContent }
            >
              <input { ...getInputProps() } />
              {images.length ? (
                <NewListingThumb
                  key={ images[0].document.name }
                  image={ images[0] }
                  handleDelete={ handleDelete }
                  index={ 0 }
                  thumbIndex={ 0 }
                />
              ) : dropzoneDisabled ? (
                <Typography variant='body2' className={ classes.disabled }>
                  Maximum number of images reached...
                </Typography>
              ) : isDragActive ? (
                <Typography variant='body2'>Drop your images here!</Typography>
              ) : (
                <Typography variant='body2'>
                  Drag and drop a document here, or click to select files.
                </Typography>
              )}
            </CardContent>
          </Card>
        )}
      </Dropzone>
      <NewListingThumbs images={ images.slice(1) } handleDelete={ handleDelete } />
      {hasError ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default Sortable.SortableContainer(ImageUploader)
