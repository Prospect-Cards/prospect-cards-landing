import { Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'

// import PrivateRoute from './PrivateRoute'
import AcceptInvitation from 'components/AcceptInvitation'
import AccountListings from 'components/listings/AccountListings'
import AddPayment from 'components/account/AddPayment'
import ConfirmEmail from 'components/ConfirmEmail'
import EmailPreferences from 'components/profile/EmailPreferences'
import FAQ from 'components/FAQ'
import Favorites from 'components/favorites/Favorites'
import ForgotPassword from 'components/ForgotPassword'
import Home from 'components/Home'
import Listing from 'components/listings/Listing'
import Login from 'components/Login'
import NewListing from 'components/listings/NewListing'
import NewMembership from 'components/memberships/NewMembership'
import NewReview from 'components/reviews/NewReview'
import PaymentAdded from 'components/account/PaymentAdded'
import PrivateRoute from 'components/Router/PrivateRoute'
import Profile from 'components/profile/Profile'
import Register from 'components/Register'
import ResetPassword from 'components/ResetPassword'
import SellerProfile from 'components/sellers/SellerProfile'
import SellerSetup from 'components/account/SellerSetup'
import StripeAccountVerification from 'components/account/StripeAccountVerification'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/c/:category' component={ Home } />
      <PrivateRoute exact path='/listings/new' component={ NewListing } />
      <PrivateRoute path='/items' component={ AccountListings } />
      <Route exact path='/listings/:id' component={ Listing } />
      <Route exact path='/sellers/:username' component={ SellerProfile } />

      <PrivateRoute exact path='/account/sell' component={ SellerSetup } />
      <PrivateRoute
        path='/account/add_payment/:price?'
        component={ AddPayment }
      />
      <PrivateRoute
        exact
        path='/account/payment_added'
        component={ PaymentAdded }
      />
      <PrivateRoute
        exact
        path='/account/verification'
        component={ StripeAccountVerification }
      />
      <PrivateRoute exact path='/membership/new' component={ NewMembership } />
      <PrivateRoute exact path='/profile/:tab?' component={ Profile } />
      <PrivateRoute exact path='/favorites' component={ Favorites } />

      <Route exact path='/faq' component={ FAQ } />

      <Route exact path='/login' component={ Login } />
      <Route exact path='/register' component={ Register } />
      <Route
        exact
        path='/accept-invitation/:token'
        component={ AcceptInvitation }
      />
      <Route exact path='/confirm/:token' component={ ConfirmEmail } />
      <Route exact path='/forgot-password' component={ ForgotPassword } />
      <Route exact path='/reset-password/:token' component={ ResetPassword } />
      <Route exact path='/review/:token' component={ NewReview } />
      <Route
        exact
        path='/email-preferences/:token'
        component={ EmailPreferences }
      />

      <Redirect to='/' />
    </Switch>
  )
}

export default Router
