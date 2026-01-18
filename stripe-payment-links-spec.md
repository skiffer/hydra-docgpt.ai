# Stripe Payment Links Specification for QR Code Generator

## Product Name: QR Code Generator for Google Sheets™, Docs™, Forms™

### Monthly Plans

1. **QR Code Generator - Starter (Monthly)**
   - Price: $7.99/month
   - Features: 2000 QR codes and Barcodes per month
   - Billing: Recurring monthly
   - Description: Perfect for individuals and small projects
   - Product ID: `qr_generator_starter_monthly`

2. **QR Code Generator - Professional (Monthly)**
   - Price: $15.99/month
   - Features: Unlimited QR codes and Barcodes
   - Billing: Recurring monthly
   - Description: Best for professionals and growing businesses
   - Product ID: `qr_generator_professional_monthly`
   - Badge: POPULAR

3. **QR Code Generator - Organization (Monthly)**
   - Price: $499/month
   - Features: Unlimited QR codes + Domain-wide license
   - Billing: Recurring monthly
   - Description: Enterprise solution for entire organizations
   - Product ID: `qr_generator_organization_monthly`

### Annual Plans

4. **QR Code Generator - Business (Annual)**
   - Price: $69.99/year (Save 30% - ~$5.99/month)
   - Features: 3000 QR codes and Barcodes per month
   - Billing: Recurring annually
   - Description: Best value for small businesses
   - Product ID: `qr_generator_business_annual`

5. **QR Code Generator - Enterprise (Annual)**
   - Price: $143.99/year (Save 30% - ~$11.99/month)
   - Features: Unlimited QR codes and Barcodes
   - Billing: Recurring annually
   - Description: Maximum value for power users
   - Product ID: `qr_generator_enterprise_annual`
   - Badge: BEST VALUE

6. **QR Code Generator - Organization (Annual)**
   - Price: $4188/year (Save 30% - ~$349/month)
   - Features: Unlimited QR codes + Domain-wide license
   - Billing: Recurring annually
   - Description: Enterprise annual plan with maximum savings
   - Product ID: `qr_generator_organization_annual`

### Lifetime Plan

7. **QR Code Generator - Lifetime Access**
   - Price: $249 (one-time payment)
   - Features: Unlimited QR codes and Barcodes forever
   - Billing: One-time payment
   - Description: Lifetime access with all features included
   - Product ID: `qr_generator_lifetime`

## Stripe CLI Commands to Create Products and Payment Links

### Create Products
```bash
# Starter Monthly
stripe products create \
  --name="QR Code Generator - Starter (Monthly)" \
  --description="2000 QR codes and Barcodes per month for Google Sheets, Docs, and Forms"

# Professional Monthly
stripe products create \
  --name="QR Code Generator - Professional (Monthly)" \
  --description="Unlimited QR codes and Barcodes for Google Sheets, Docs, and Forms"

# Organization Monthly
stripe products create \
  --name="QR Code Generator - Organization (Monthly)" \
  --description="Unlimited QR codes with domain-wide license for Google Workspace"

# Business Annual
stripe products create \
  --name="QR Code Generator - Business (Annual)" \
  --description="3000 QR codes per month with 30% annual savings"

# Enterprise Annual
stripe products create \
  --name="QR Code Generator - Enterprise (Annual)" \
  --description="Unlimited QR codes with 30% annual savings"

# Organization Annual
stripe products create \
  --name="QR Code Generator - Organization (Annual)" \
  --description="Domain-wide license with 30% annual savings"

# Lifetime
stripe products create \
  --name="QR Code Generator - Lifetime Access" \
  --description="Lifetime unlimited access to QR Code Generator"
```

### Create Prices
```bash
# Monthly Plans
stripe prices create \
  --product="PRODUCT_ID_STARTER_MONTHLY" \
  --unit-amount=799 \
  --currency=usd \
  --recurring[interval]=month

stripe prices create \
  --product="PRODUCT_ID_PROFESSIONAL_MONTHLY" \
  --unit-amount=1599 \
  --currency=usd \
  --recurring[interval]=month

stripe prices create \
  --product="PRODUCT_ID_ORGANIZATION_MONTHLY" \
  --unit-amount=49900 \
  --currency=usd \
  --recurring[interval]=month

# Annual Plans
stripe prices create \
  --product="PRODUCT_ID_BUSINESS_ANNUAL" \
  --unit-amount=6999 \
  --currency=usd \
  --recurring[interval]=year

stripe prices create \
  --product="PRODUCT_ID_ENTERPRISE_ANNUAL" \
  --unit-amount=14399 \
  --currency=usd \
  --recurring[interval]=year

stripe prices create \
  --product="PRODUCT_ID_ORGANIZATION_ANNUAL" \
  --unit-amount=418800 \
  --currency=usd \
  --recurring[interval]=year

# Lifetime Plan
stripe prices create \
  --product="PRODUCT_ID_LIFETIME" \
  --unit-amount=24900 \
  --currency=usd
```

### Create Payment Links
```bash
# Create payment links for each price
stripe payment_links create \
  --line-items[0][price]="PRICE_ID" \
  --line-items[0][quantity]=1 \
  --after-completion[type]=redirect \
  --after-completion[redirect][url]="https://docgpt.ai/thank-you"
```

## Integration Notes

1. Replace all Paddle product IDs with corresponding Stripe payment link URLs
2. Update the JavaScript to handle Stripe payment links instead of Paddle checkout
3. Consider adding metadata to track conversions and analytics
4. Set up webhooks for payment confirmations
5. Configure tax settings if needed
6. Set up customer portal for subscription management