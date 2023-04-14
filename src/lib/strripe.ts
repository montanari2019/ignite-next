import Stripe from "stripe";

const secretStripe = process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : ""

export const stripe = new Stripe(secretStripe,{
    apiVersion: "2022-11-15",
    appInfo:{
        name:"Ignite Shop"
    }
})