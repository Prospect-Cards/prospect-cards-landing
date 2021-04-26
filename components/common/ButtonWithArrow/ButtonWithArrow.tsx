import {
  Box,
  Button,
  ButtonProps,
  Theme,
  createStyles,
  useTheme,
  withStyles,
} from '@material-ui/core'
import { StyleRules, makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import React from 'react'
import RightArrow from 'assets/svg/RightArrow'

interface Props extends ButtonProps {
  children: string;
  loading?: boolean;
}

const useStyles = makeStyles(
  ({ palette }: Theme): StyleRules =>
    createStyles({
      buttonProgress: {
        color: palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
    }),
)

const StyledButton = withStyles(({ palette, shadows }: Theme) =>
  createStyles({
    root: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 74,
      paddingRight: 74,
      backgroundColor: palette.text.primary,
      borderRadius: 50,
      '&:hover': {
        boxShadow: shadows[6],
        backgroundColor: palette.text.primary,
      },
    },
    label: {
      fontSize: '0.875rem',
      lineHeight: 1,
      fontWeight: 600,
    },
  }),
)(Button)

const ButtonWithArrow = ({
  children,
  loading,
  ...props
}: Props): JSX.Element => {
  const { palette } = useTheme()
  const classes = useStyles()

  return (
    <StyledButton variant='contained' color='default' { ...props }>
      {children}
      <Box ml={ 1 }>
        <RightArrow color={ palette.primary.main } />
        {loading && (
          <CircularProgress size={ 24 } className={ classes.buttonProgress } />
        )}
      </Box>
    </StyledButton>
  )
}

export default ButtonWithArrow
