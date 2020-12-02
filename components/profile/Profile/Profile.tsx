import { Tab, Tabs } from '@material-ui/core'
import { useRouter } from 'next/router'
import AccountDetails from 'components/profile/AccountDetails'
import AddPayment from 'components/account/AddPayment'
import EmailPreferences from 'components/profile/EmailPreferences'
import React, { ChangeEvent, useState } from 'react'
import useStyles from './styles'

type TabName = 'details' | 'payment' | 'preferences';

const Profile = (): JSX.Element => {
  const classes = useStyles()
  const router = useRouter()
  const { tab } = router.query
  let tabName
  if (typeof tab === 'string') {
    tabName = tab
  } else {
    tabName = tab[0]
  }
  const [value, setValue] = useState<TabName>(tabName || 'details')

  const handleChange = (event: ChangeEvent<unknown>, newValue: TabName) => {
    setValue(newValue)
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
  }

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props

    return (
      <div
        role='tabpanel'
        hidden={ value !== index }
        id={ `profile-tabpanel-${index}` }
        aria-labelledby={ `profile-tab-${index}` }
        className={ classes.panel }
        { ...other }
      >
        {value === index && children}
      </div>
    )
  }

  return (
    <div className={ classes.root }>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={ value }
        onChange={ handleChange }
        aria-label='Profile tabs'
        className={ classes.tabs }
      >
        <Tab label='Account Details' value='details' />
        <Tab label='Payment Method' value='payment' />
        <Tab label='Email Preferences' value='preferences' />
      </Tabs>

      <TabPanel value={ value } index='details'>
        <AccountDetails />
      </TabPanel>
      <TabPanel value={ value } index='payment'>
        <AddPayment />
      </TabPanel>
      <TabPanel value={ value } index='preferences'>
        <EmailPreferences />
      </TabPanel>
    </div>
  )
}

export default Profile
