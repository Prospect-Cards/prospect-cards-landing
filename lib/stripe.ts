import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.stripePublicKey as string,
)

export default stripePromise