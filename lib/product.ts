export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "UpsellIdeas",
  slug: "upsellideas",
  tagline: "Pair every product with its natural-plus.",
  description: "Given a product, get 3-5 cross-sell and upsell pairings with the reason each fits and ready-to-use sample copy.",
  toolTitle: "Find upsell pairs",
  resultLabel: "Your pairings",
  ctaLabel: "Find pairs",
  features: [
  "Cross-sell pairings",
  "Upsell ladder",
  "Reason per pair",
  "Sample copy"
],
  inputs: [
  {
    "key": "product",
    "label": "Your product",
    "type": "input",
    "placeholder": "e.g. ceramic pour-over coffee dripper"
  },
  {
    "key": "catalog",
    "label": "Other items you sell (optional)",
    "type": "textarea",
    "placeholder": "e.g. filters, mug, scale, beans"
  }
] as InputField[],
  systemPrompt: "You are a merchandising strategist. Given a product and an optional catalog, propose 3-5 cross-sell and upsell pairings, each with a one-line reason it fits the buyer and a short sample copy line. Prefer pairings that raise AOV without feeling pushy. In demo (mock) mode, return a realistic sample following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "8 products/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const p = (inputs['product'] || '').trim()
  const cat = (inputs['catalog'] || '').trim()
  if (!p) return 'Name your product to get upsell ideas.'
  let out = 'UPSELL PAIRS (for ' + p + ')\n\n'
  out += '1) Paper filters - natural add-on, low price, high attach. "Brew-ready bundle."\n'
  out += '2) Gooseneck kettle - upsell for control. "The upgrade pour-over fans ask for."\n'
  out += '3) Fresh beans - cross-sell replenishment. "Subscribe and never run dry."\n'
  if (cat) out += '\nFrom your catalog we also matched: ' + cat.split(/[\n,]/)[0] + '.\n'
  out += '\n--- (Mock demo. Paste your product for tailored pairs.)'
  return out
}
}
