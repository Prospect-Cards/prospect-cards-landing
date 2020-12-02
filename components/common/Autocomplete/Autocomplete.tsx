import { useField } from 'formik'
import CircularProgress from '@material-ui/core/CircularProgress'
import MuiAutocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import confirm from 'lib/confirm'
import useStyles from './styles'

interface TagOption {
  name: string;
  id?: string;
  inputValue?: string;
}

interface Props {
  label: string;
  values?: { name: string; id: string }[];
  setOpen: (open: boolean) => void;
  open: boolean;
  loading: boolean;
  handleChange: (name: string) => void;
  handleInputChange: (name: string) => void;
  handleFocus: VoidFunction;
  value: string;
  name: string;
  placeholder?: string;
}

const confirmNewTag = (label: string, value: string) =>
  confirm(
    `Did we not have your item in our list? Feel free to add it! Keep in mind that matching existing tags will help you match search results. Add "${value}" anyway?`,
    `Add new ${label}?`,
    `Add ${label}`,
  )

const Autocomplete = ({
  label,
  values,
  setOpen,
  open,
  loading,
  handleChange,
  handleInputChange,
  handleFocus,
  value,
  name,
  placeholder,
}: Props): JSX.Element => {
  const classes = useStyles()
  const [, meta] = useField(name)
  const options = values || []

  const [inputValue, setInputValue] = useState(value)
  const hasError = Boolean(meta.error && meta.touched)
  const filter = createFilterOptions<TagOption>()

  const updateValue = async(value: string): Promise<void> => {
    const resp = await confirmNewTag(label, value)
    if (resp) {
      handleChange(value)
      setInputValue(value)
    } else {
      handleChange('')
      setInputValue(value)
    }
  }
  return (
    <div className={ classes.root }>
      <MuiAutocomplete<TagOption, false, false, true>
        style={ { width: 300 } }
        open={ open }
        freeSolo
        selectOnFocus
        handleHomeEndKeys
        onOpen={ () => {
          setOpen(true)
        } }
        onClose={ () => {
          setOpen(false)
        } }
        getOptionSelected={ (option, value) => option.name === value.name }
        options={ options }
        value={ { name: inputValue } }
        loading={ loading }
        onInputChange={ (_e, value) => {
          handleInputChange(value)
          setInputValue(value)
        } }
        onChange={ async(event, newValue): Promise<void> => {
          if (typeof newValue === 'string') {
            updateValue(newValue)
          } else if (newValue && newValue.inputValue) {
            updateValue(newValue.inputValue)
          } else {
            handleChange(newValue?.name || '')
            setInputValue(newValue?.name || '')
          }
        } }
        filterOptions={ (options, params) => {
          const filtered = filter(options, params)

          // Suggest the creation of a new value if none present
          if (!loading && inputValue !== '' && !options.length) {
            filtered.push({
              inputValue,
              name: `Add "${inputValue}"`,
            })
          }

          return filtered
        } }
        getOptionLabel={ (option) => option.name }
        renderInput={ (params) => (
          <TextField
            error={ hasError }
            helperText={ hasError && meta.error }
            onFocus={ handleFocus }
            onBlur={ () => {
              // Using onInputChange breaks Autocompletes built in clearOnBlur
              // If no value has been saved on the form, then clear on blur
              if (inputValue.length && !value.length) {
                setInputValue('')
              }
            } }
            { ...params }
            label={ label }
            variant='outlined'
            placeholder={ placeholder }
            InputProps={ {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={ 20 } />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            } }
          />
        ) }
      />
    </div>
  )
}

export default Autocomplete
