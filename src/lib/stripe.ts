import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SCRET_KEY, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'Ignight Shop'
  }
})