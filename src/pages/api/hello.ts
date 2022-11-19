// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const checkoutSession = await stripe.checkout.sessions.create({

  })
 
}
