import * as Sortable from 'react-sortable-hoc'
import * as Yup from 'yup'
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core'
import { DateTime } from 'luxon'
import { Form, Formik } from 'formik'
import {
  ListingInput,
  SaveListingMutationFn,
  TagTypesEnum,
} from 'types/graphql'
import { NotRequiredArraySchema } from 'yup'
import { checkFileSize } from 'lib'
import { useRouter } from 'next/router'
import ConfirmEmailDialog from 'components/ConfirmEmailDialog'
import DollarInput from 'components/common/formFields/DollarInput'
import FormTextField from 'components/common/formFields/FormTextField'
import ImageUploader from 'components/listings/ImageUploader'
import LoadingButton from 'components/common/LoadingButton'
import NewListingTagField from 'components/listings/NewListingTagField'
import React from 'react'
import YearSelector from 'components/common/formFields/YearSelector'
import arrayMove from 'array-move'
import useStyles from './styles'

const imagesSchema: NotRequiredArraySchema<{ document: File }> = Yup.array<{
  document: File;
}>()
  .min(1, 'Must include at least 1 image.')
  .max(8, 'Maximum of 8 images')
  .test('is-big-file', 'VALIDATION_FIELD_FILE_SIZE', checkFileSize)

const listingInputSchema = Yup.object()
  .shape({
    // title: Yup.string()
    //   .min(5, 'Too Short!')
    //   .max(50, 'Too Long!')
    //   .required('Required'),
    description: Yup.string().min(10, 'Too Short!').required('Required'),
    images: imagesSchema,
    player: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    productType: Yup.string().required('Required'),
    manufacturer: Yup.string().required('Required'),
    setType: Yup.string().required('Required'),
    grader: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
  })
  .defined()

const ListingSchema = Yup.object()
  .shape({
    listing: listingInputSchema,
  })
  .defined()

interface Props {
  loading: boolean;
  saveListing: SaveListingMutationFn;
}

const title = ({
  year,
  manufacturer,
  setType,
  player,
  parallel,
}: ListingInput) => {
  return player?.length ?
    `${year} ${manufacturer} ${setType} ${player} ${parallel}` :
    ''
}

const NewListing = ({ saveListing, loading }: Props): JSX.Element => {
  const classes = useStyles()
  const router = useRouter()

  const initialValues: {
    listing: ListingInput;
    sellAnother: boolean;
  } = {
    listing: {
      // title: '',
      description: '',
      price: 10,
      year: DateTime.local().year,
      images: [],
      category: '',
      productType: '',
      manufacturer: '',
      setType: '',
      parallel: '',
      grader: '',
      player: '',
      rookie: false,
    },
    sellAnother: false,
  }

  return (
    <>
      <Card className={ classes.root }>
        <CardContent>
          <Formik
            validationSchema={ ListingSchema }
            initialValues={ initialValues }
            onSubmit={ (variables, { setSubmitting, resetForm }): void => {
              saveListing({ variables }).then(({ data }): void => {
                const newListingId = data?.saveListing?.newListingId

                setSubmitting(false)
                if (!variables.sellAnother && newListingId) {
                  resetForm()
                  router.push(`/items/listings/${newListingId}`)
                }
              })
            } }
          >
            {({ values, setFieldValue, handleChange }): JSX.Element => {
              const onSortEnd: Sortable.SortEndHandler = ({
                oldIndex,
                newIndex,
              }) => {
                setFieldValue(
                  'listing.images',
                  arrayMove(values.listing.images, oldIndex, newIndex),
                )
              }

              return (
                <Form>
                  <Grid container spacing={ 3 }>
                    <Grid
                      item
                      md={ 4 }
                      xs={ 12 }
                      className={ classes.dropzoneContainer }
                    >
                      <ImageUploader
                        onSortEnd={ onSortEnd }
                        axis='xy'
                        images={ values.listing.images }
                        distance={ 5 }
                      />
                    </Grid>
                    <Grid item md={ 8 } xs={ 12 }>
                      <Typography>{title(values.listing)}</Typography>
                      {/*<FormTextField*/}
                      {/*  margin='normal'*/}
                      {/*  name='listing.title'*/}
                      {/*  label='Title'*/}
                      {/*  variant='standard'*/}
                      {/*/>*/}
                      <FormTextField
                        margin='normal'
                        name='listing.description'
                        label='Description'
                        variant='standard'
                        fullWidth
                        multiline
                      />

                      <NewListingTagField
                        label='Player'
                        placeholder='LeBron James, Mike Trout, ...'
                        name='listing.player'
                        context={ TagTypesEnum.Player }
                      />

                      <NewListingTagField
                        label='Sport'
                        placeholder='Basketball, Baseball, Soccer, ...'
                        name='listing.category'
                        context={ TagTypesEnum.Category }
                      />

                      <YearSelector name='listing.year' />

                      <NewListingTagField
                        label='Card Type'
                        placeholder='Base, Insert, Patch Autograph, ...'
                        name='listing.productType'
                        context={ TagTypesEnum.ProductType }
                      />

                      <NewListingTagField
                        label='Manufacturer'
                        placeholder='Panini, Upper Deck, ...'
                        name='listing.manufacturer'
                        context={ TagTypesEnum.Manufacturer }
                      />

                      <NewListingTagField
                        label='Set Type'
                        placeholder='Prizm, Chrome, Optic, ...'
                        name='listing.setType'
                        context={ TagTypesEnum.SetType }
                      />

                      <NewListingTagField
                        label='Parallel'
                        placeholder='Silver, Holo, Gold /10, ...'
                        name='listing.parallel'
                        context={ TagTypesEnum.Parallel }
                      />

                      <NewListingTagField
                        label='Grader and Grade'
                        placeholder='PSA 10, CGC 9.5, (leave blank if none), ...'
                        name='listing.grader'
                        context={ TagTypesEnum.Grader }
                      />

                      <DollarInput
                        name='listing.price'
                        value={ values.listing.price }
                        textFieldProps={ { label: 'Buy Now Price' } }
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            name='listing.rookie'
                            checked={ Boolean(values.listing.rookie) }
                            onChange={ handleChange }
                          />
                        }
                        label='Rookie/First Year'
                      />
                      <br />

                      <FormControlLabel
                        control={
                          <Checkbox
                            name='sellAnother'
                            checked={ Boolean(values.sellAnother) }
                            onChange={ handleChange }
                          />
                        }
                        label='Sell another like this'
                      />
                      <LoadingButton
                        loading={ loading }
                        type='submit'
                        color='secondary'
                        variant='contained'
                      >
                        Save
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Form>
              )
            }}
          </Formik>
        </CardContent>
      </Card>
      <ConfirmEmailDialog />
    </>
  )
}

export default NewListing
