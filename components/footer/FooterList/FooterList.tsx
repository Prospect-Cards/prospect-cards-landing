import { List, ListItem } from '@material-ui/core'
import ButtonLink from 'components/common/ButtonLink'
import React from 'react'
import useStyles from './styles'

export interface FooterListItem {
  label: string;
  path: string;
}

interface Props {
  items: FooterListItem[];
}

const FooterList = ({ items }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <List>
      {items.map((item) => (
        <ListItem className={ classes.listItem } key={ item.label }>
          <ButtonLink className={ classes.link } href={ item.path }>
            {item.label}
          </ButtonLink>
        </ListItem>
      ))}
    </List>
  )
}

export default FooterList
