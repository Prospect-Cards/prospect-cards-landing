import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLIC_KEY as string,
)

export default stripePromise