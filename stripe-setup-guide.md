# Stripe Payment Links Setup Guide

## Overview
The QR Code Generator pricing page has been updated to use Stripe payment links instead of Paddle. The following changes have been made:

### Changes Made:
1. Removed Paddle SDK integration
2. Added Stripe payment link buttons
3. Updated JavaScript to handle email prefilling and tracking parameters
4. Added analytics tracking for checkout events

## Stripe Payment Links Needed

You need to create the following payment links in your Stripe dashboard:

### Monthly Plans:
1. **Starter Monthly** - $7.99/month
   - URL placeholder: `https://buy.stripe.com/qr-generator-starter-monthly`
   
2. **Professional Monthly** - $15.99/month  
   - URL placeholder: `https://buy.stripe.com/qr-generator-professional-monthly`
   
3. **Organization Monthly** - $499/month
   - URL placeholder: `https://buy.stripe.com/qr-generator-organization-monthly`

### Annual Plans:
4. **Business Annual** - $69.99/year
   - URL placeholder: `https://buy.stripe.com/qr-generator-business-annual`
   
5. **Enterprise Annual** - $143.99/year
   - URL placeholder: `https://buy.stripe.com/qr-generator-enterprise-annual`
   
6. **Organization Annual** - $4188/year
   - URL placeholder: `https://buy.stripe.com/qr-generator-organization-annual`

### One-time:
7. **Lifetime** - $249 (one-time)
   - URL placeholder: `https://buy.stripe.com/qr-generator-lifetime`

## How to Create Payment Links in Stripe:

1. Log into your Stripe Dashboard
2. Go to "Payment Links" section
3. Click "Create payment link"
4. For each plan:
   - Add the product name (e.g., "QR Code Generator - Starter Monthly")
   - Set the price
   - For subscriptions, choose the billing interval
   - Enable "Collect customer details"
   - Set up the success page redirect
   - Save and get the payment link URL

## Update the Code:

Once you have the actual Stripe payment links, replace the placeholder URLs in the file:

1. Open `qr-code-generator-pricing.html`
2. Find each occurrence of `https://buy.stripe.com/qr-generator-*`
3. Replace with your actual Stripe payment link URLs

## Features Implemented:

1. **Email Prefilling**: If a user arrives with `?email=user@example.com`, the email will be prefilled in Stripe checkout
2. **Tracking Parameters**: All URL parameters are passed to Stripe as metadata
3. **Analytics Integration**: Button clicks trigger `stripe_checkout_started` events for Google Analytics
4. **Auto-redirect**: If email parameter is present, users are auto-redirected to the Business Annual plan

## Testing:

1. Test the toggle between monthly/annual plans
2. Test with URL parameter: `?email=test@example.com`
3. Verify analytics events are firing
4. Check that all payment links work correctly

## Next Steps:

1. Create the actual payment links in Stripe
2. Replace placeholder URLs with real ones
3. Set up webhook handling for payment confirmations
4. Configure success/cancel redirect URLs
5. Test the complete payment flow