import { heroData } from './hero'
import { featuresData } from './features'
import { engineeringData } from './engineering'
import { processData } from './process'
import { contactData } from './contact'
import { footerData } from './footer'
import { headerData } from './header'

export const siteData = {
  hero: heroData,
  features: featuresData,
  engineering: engineeringData,
  process: processData,
  contact: contactData,
  footer: footerData,
  header: headerData,
}

export type SiteData = typeof siteData

