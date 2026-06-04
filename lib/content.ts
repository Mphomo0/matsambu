import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Matsambu Projects',
  shortName: 'Matsambu',
  tagline: 'We build structures. We build trust.',
  description:
    'Matsambu Projects is a trusted South African construction company specialising in building construction, general contracting, and rib-and-block supply and installation.',
  url: 'https://matsambu.co.za',
  phone: '+27 11 000 0000',
  phoneHref: '+27110000000',
  email: 'info@matsambu.co.za',
  address: {
    line1: '123 Construction Avenue',
    line2: 'Johannesburg, Gauteng, 2000',
    line3: 'South Africa',
  },
  hours: [
    { day: 'Mon – Fri', time: '07:30 – 17:00' },
    { day: 'Saturday', time: '08:00 – 13:00' },
    { day: 'Sunday', time: 'Closed' },
  ],
  social: {
    linkedin: 'https://linkedin.com/company/matsambu',
    facebook: 'https://facebook.com/matsambu',
    instagram: 'https://instagram.com/matsambu',
  },
} as const

export type ServiceCategory = 'construction' | 'contractor' | 'rib-block'

export type Service = {
  slug: ServiceCategory
  title: string
  short: string
  description: string
  bullets: string[]
  icon: 'building' | 'hardhat' | 'blocks'
  image: string
}

export const services: Service[] = [
  {
    slug: 'construction',
    title: 'Building Construction',
    short:
      'Turnkey construction of residential, commercial and industrial projects — from foundations to handover.',
    description:
      "We deliver new builds end-to-end. Our team handles everything from site preparation and foundations to the final finishes, coordinating every trade with a single point of accountability. Whether it's a family home, a retail development, or a multi-storey commercial block, we build to code, on schedule, and to the standard our clients expect.",
    bullets: [
      'Residential homes, townhouses and apartments',
      'Commercial offices, retail and showrooms',
      'Industrial warehouses and workshops',
      'Foundations, structural work and roofing',
      'Full finishing: plaster, paint, joinery, fittings',
    ],
    icon: 'building',
    image: '/images/building.jpg',
  },
  {
    slug: 'contractor',
    title: 'General Building Contractor',
    short:
      'Principal contracting, project management and trade coordination for owners and developers.',
    description:
      'As your general contractor, we take ownership of the entire build programme. We procure materials, schedule and manage specialised sub-trades, run quality and safety inspections, and keep you informed with clear, regular progress reporting. One contract, one accountable partner.',
    bullets: [
      'Principal contractor and programme management',
      'Procurement of materials and long-lead items',
      'Sub-trade coordination and site supervision',
      'Quality, safety and compliance inspections',
      'Transparent progress reporting and cost control',
    ],
    icon: 'hardhat',
    image: '/images/general.jpg',
  },
  {
    slug: 'rib-block',
    title: 'Rib & Block Supply & Installation',
    short:
      'We supply and install rib-and-block suspended floor systems — fast, strong and cost-effective.',
    description:
      'Rib-and-block is a proven suspended flooring method: pre-cast concrete ribs span between supports, with concrete blocks infilling the gaps and a structural concrete topping poured on top. The result is a rigid, monolithic slab that delivers excellent load capacity, sound insulation and fire resistance — ideal for multi-storey residential and commercial slabs.',
    bullets: [
      'Supply of certified rib-and-block components',
      'Professional installation by trained crews',
      'Suitable for multi-storey residential slabs',
      'Faster construction than in-situ concrete',
      'Improved thermal and acoustic performance',
    ],
    icon: 'blocks',
    image: '/images/block.jpg',
  },
]

export type ProjectCategory = 'residential' | 'commercial' | 'industrial'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  year: number
  location: string
  description: string
  overview: string
  highlights: string[]
  client?: string
  size?: string
  duration?: string
  services: ServiceCategory[]
  image: string
  gallery: string[]
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`

export const projects: Project[] = [
  {
    slug: 'rivonia-residences',
    title: 'Rivonia Residences',
    category: 'residential',
    year: 2024,
    location: 'Sandton, GP',
    client: 'Rivonia Developments (Pty) Ltd',
    size: '4 200 m² GLA · 24 units',
    duration: '18 months',
    services: ['construction', 'rib-block'],
    description:
      'A 24-unit luxury apartment block with rib-and-block suspended slabs, secure basement parking and a rooftop entertainment deck.',
    overview:
      'Rivonia Residences is a four-storey luxury apartment block in the heart of Sandton, comprising 24 two- and three-bedroom units above a single basement level of secure parking. We were appointed as principal contractor for the full structural package, including the rib-and-block suspended slabs across every floor, and ran a tightly-coordinated programme that handed the building over four weeks ahead of schedule.',
    highlights: [
      'Rib-and-block suspended slabs across four levels (3 800 m²)',
      'Single-level basement with 36 secure parking bays',
      'Rooftop entertainment deck with pool and braai pavilion',
      'Generator backup and full water-reticulation system',
      'Four-week early handover against contracted programme',
    ],
    image: img('photo-1545324418-cc1a3fa10c00'),
    gallery: [
      img('photo-1502672260266-1c1ef2d93688'),
      img('photo-1493809842364-78817add7ffb'),
      img('photo-1560448204-e02f11c3d0e2'),
    ],
  },
  {
    slug: 'linbro-park-office',
    title: 'Linbro Park Office Park',
    category: 'commercial',
    year: 2024,
    location: 'Midrand, GP',
    client: 'Linx Property Group',
    size: '3 800 m² GLA · 3 storeys',
    duration: '14 months',
    services: ['contractor', 'construction'],
    description:
      'Three-storey office park with curtain glazing, lift core and full tenant fit-out across 3 800 m².',
    overview:
      "Linbro Park Office Park is a three-storey grade-A commercial building with full curtain-wall glazing, a central lift core and end-of-trip facilities on each level. We acted as principal contractor — procuring long-lead items, managing a dozen specialised sub-trades, and delivering a base-build and Category-A fit-out that met the tenant's technical specifications on a fixed-price contract.",
    highlights: [
      'Full curtain-wall façade with double-glazed aluminium units',
      'Central lift core with 13-stop Schindler installation',
      'Category-A tenant fit-out across all three floors',
      'Back-up power, BMS and access-controlled parking',
      '4-star GBCSA design certification targeted',
    ],
    image: img('photo-1486406146926-c627a92ad1ab'),
    gallery: [
      img('photo-1497366754035-f200968a6e72'),
      img('photo-1497366811353-6870744d04b2'),
      img('photo-1568992687947-868a62a9f521'),
    ],
  },
  {
    slug: 'kya-sand-warehouse',
    title: 'Kya Sand Warehouse',
    category: 'industrial',
    year: 2023,
    location: 'Kya Sand, GP',
    client: 'Kya Sand Logistics (Pty) Ltd',
    size: '6 200 m² GLA',
    duration: '9 months',
    services: ['construction', 'contractor'],
    description:
      '6 200 m² clear-span warehouse with reinforced concrete columns, dock levellers and ESFR sprinkler system.',
    overview:
      'A 6 200 m² clear-span logistics warehouse built on a tight nine-month programme. The structure uses reinforced concrete columns at 24 m centres, an FM2 power-trowelled floor slab, and a full ESFR sprinkler system with eight dock levellers. We self-performed the civils and structural concrete package, and managed all specialist sub-trades to a single accountable contract.',
    highlights: [
      'Reinforced concrete columns at 24 m clear span',
      'FM2 power-trowelled floor slab (6 200 m²)',
      'Eight dock levellers with hydraulic dock seals',
      'Full ESFR sprinkler system with on-site pump house',
      '9-month construction programme, delivered on time',
    ],
    image: img('photo-1565793298595-6a879b1d9492'),
    gallery: [
      img('photo-1553413077-190dd305871c'),
      img('photo-1586528116311-ad8dd3c8310d'),
      img('photo-1601598851547-4302969d0614'),
    ],
  },
  {
    slug: 'morningside-villa',
    title: 'Morningside Villa',
    category: 'residential',
    year: 2023,
    location: 'Sandton, GP',
    client: 'Private homeowner',
    size: '720 m² under roof',
    duration: '11 months',
    services: ['construction'],
    description:
      'Bespoke 720 m² family home featuring double-volume living areas, a rim-flow pool and a fully fitted wine cellar.',
    overview:
      'A bespoke 720 m² family home built to the highest residential specification. The design centres on double-volume living and entertainment areas flowing onto a north-facing terrace and rim-flow pool, with a fully fitted wine cellar, home gym, and staff accommodation on the lower level. We worked to a tight architectural specification and managed a 30+ trade build with weekly client walk-throughs.',
    highlights: [
      'Double-volume living and entertainment areas',
      'Rim-flow pool with automated cover and heat pump',
      'Climate-controlled wine cellar (1 800 bottle capacity)',
      'Integrated home automation and full generator backup',
      'Bespoke joinery throughout, by specialist sub-trade',
    ],
    image: img('photo-1600585154340-be6161a56a0c'),
    gallery: [
      img('photo-1600596542815-ffad4c1539a9'),
      img('photo-1600566753190-17f0baa2a6c3'),
      img('photo-1600210491892-03d54c0aaf87'),
    ],
  },
  {
    slug: 'fourways-retail',
    title: 'Fourways Retail Centre',
    category: 'commercial',
    year: 2023,
    location: 'Fourways, GP',
    client: 'Fourways Retail Holdings',
    size: '12 500 m² GLA',
    duration: '16 months',
    services: ['construction', 'contractor'],
    description:
      'Mixed-use retail node with ground-floor shops, upper-level offices and a covered piazza linking 1 200 parking bays.',
    overview:
      'A mixed-use retail and office node centred on a covered piazza that links two retail wings and the upper-level office floors. The ground level accommodates 38 retail tenants, with 4 200 m² of grade-A offices above. The site is integrated with a 1 200-bay parking deck and pedestrian bridge to the adjacent taxi rank — built live, with detailed traffic-management planning throughout.',
    highlights: [
      '38 retail units on the ground level',
      '4 200 m² grade-A office space on first floor',
      'Covered central piazza with retail spilling outwards',
      '1 200-bay parking deck built around live trading',
      'Live-build with formal traffic-management plan',
    ],
    image: img('photo-1519567241046-7f570eee3ce6'),
    gallery: [
      img('photo-1555529669-e69e7aa0ba9a'),
      img('photo-1604754742629-3e0498a8e1d9'),
      img('photo-1577985043696-8bd54d9f093f'),
    ],
  },
  {
    slug: 'sterkspruit-factory',
    title: 'Sterkspruit Logistics Factory',
    category: 'industrial',
    year: 2022,
    location: 'Germiston, GP',
    client: 'Sterkspruit Industrial REIT',
    size: '14 000 m² GLA',
    duration: '11 months',
    services: ['construction', 'contractor', 'rib-block'],
    description:
      'Heavy-duty logistics facility with 12 m clear height, FM2 floor slabs and a 5 000 m² cross-dock yard.',
    overview:
      'A heavy-duty logistics facility with 12 m clear internal height, an FM2 floor slab designed for racked pallet loads, and a 5 000 m² cross-dock yard. We supplied and installed the rib-and-block floor system for the two-storey office/admin block, and ran the structural concrete and civils package for the main warehouse. The cross-dock yard was designed in-house for 34 m rig articulation.',
    highlights: [
      '12 m clear internal height across the full footprint',
      'FM2 floor slab rated for 80 kN/m² racked loads',
      'Rib-and-block floors on the two-storey office block',
      '5 000 m² cross-dock yard, 34 m rig articulation',
      'Solar-ready roof with 2.5 MW PV provision',
    ],
    image: img('photo-1565891741441-64926e441838'),
    gallery: [
      img('photo-1581094288338-2314dddb7ece'),
      img('photo-1610477136060-6f55a4d6cba6'),
      img('photo-1565793298595-6a879b1d9492'),
    ],
  },
  {
    slug: 'hyde-park-townhouses',
    title: 'Hyde Park Townhouses',
    category: 'residential',
    year: 2022,
    location: 'Hyde Park, GP',
    client: 'Hyde Park Living (Pty) Ltd',
    size: 'Eight 3-bed units',
    duration: '12 months',
    services: ['construction', 'rib-block'],
    description:
      'Cluster development of eight contemporary townhouses, each with private garden, double garage and staff quarters.',
    overview:
      'A cluster of eight contemporary 3-bedroom townhouses on a single Hyde Park erf, each with its own private garden, double garage and self-contained staff quarters. Rib-and-block suspended floors were used across all upper levels to keep construction time down and acoustic performance up. Finishes are high-spec: engineered stone kitchens, frameless glass balustrades, and integrated gas braais on private roof decks.',
    highlights: [
      'Eight free-standing 3-bedroom townhouses',
      'Rib-and-block suspended slabs (acoustic & fast)',
      'Engineered-stone kitchens with integrated appliances',
      'Private roof decks with built-in gas braais',
      'Self-contained staff quarters on ground floor',
    ],
    image: img('photo-1582268611958-ebfd161ef9cf'),
    gallery: [
      img('photo-1600585154526-990dced4db0d'),
      img('photo-1600573472550-8090b5e0745e'),
      img('photo-1600607687939-ce8a6c25118c'),
    ],
  },
  {
    slug: 'rosebank-tower',
    title: 'Rosebank Mixed-Use Tower',
    category: 'commercial',
    year: 2022,
    location: 'Rosebank, GP',
    client: 'Rosebank Capital Partners',
    size: '21 000 m² GLA · 8 storeys',
    duration: '22 months',
    services: ['construction', 'contractor', 'rib-block'],
    description:
      '8-storey mixed-use development combining grade-A offices, ground-floor retail and 90 residential units on the upper floors.',
    overview:
      'An 8-storey mixed-use development combining 9 000 m² of grade-A offices, 1 800 m² of ground-floor retail, and 90 residential units on the upper three floors. The structure uses rib-and-block suspended floors for the residential levels and post-tensioned slabs for the office plates, with a basement spanning the full erf. We acted as principal contractor and managed a 40-trade programme with phased handovers to retail, office and residential tenants.',
    highlights: [
      '9 000 m² grade-A offices across three floors',
      '90 residential units on the upper three floors',
      'Rib-and-block floors (residential) & PT slabs (offices)',
      'Two basement levels of parking (320 bays)',
      'Phased handover to retail, office and residential tenants',
    ],
    image: img('photo-1497366216548-37526070297c'),
    gallery: [
      img('photo-1486325212027-8081e485255e'),
      img('photo-1554435493-93422e8d1a41'),
      img('photo-1497366811353-6870744d04b2'),
    ],
  },
  {
    slug: 'city-deep-cold-storage',
    title: 'City Deep Cold Storage',
    category: 'industrial',
    year: 2021,
    location: 'City Deep, GP',
    client: 'City Deep Cold Chain (Pty) Ltd',
    size: '8 400 m² GLA',
    duration: '13 months',
    services: ['construction', 'contractor'],
    description:
      'Temperature-controlled logistics facility with insulated cladding, ammonia refrigeration and 24/7 truck staging.',
    overview:
      'A temperature-controlled logistics facility with four discrete cold rooms (–18 °C, –5 °C, +4 °C and ambient), insulated steel-clad walls and roof, and an ammonia refrigeration plant we ran on a closed-loop with the specialist mechanical sub-trade. The site is operational 24/7 with a dedicated truck-staging yard, dock levellers and on-site reefer plug-in points for 28 trucks.',
    highlights: [
      'Four discrete cold rooms from –18 °C to ambient',
      'Insulated steel cladding and roof (150 mm PIR core)',
      'Ammonia refrigeration plant with closed-loop system',
      '28 reefer plug-in points in the staging yard',
      '24/7 operations with full backup power',
    ],
    image: img('photo-1581093588401-fbb62a02f120'),
    gallery: [
      img('photo-1565891741441-64926e441838'),
      img('photo-1581094288338-2314dddb7ece'),
      img('photo-1553413077-190dd305871c'),
    ],
  },
]

export type Stat = {
  value: number
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 18, suffix: '+', label: 'Years in the industry' },
  { value: 240, suffix: '+', label: 'Projects delivered' },
  { value: 180000, label: 'Square metres built' },
  { value: 98, suffix: '%', label: 'On-time completion' },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Matsambu delivered our apartment block four weeks ahead of programme and to a finish quality we didn't think was possible at the price. A genuinely professional team.",
    name: 'N. Mokoena',
    role: 'Developer, Rivonia Residences',
  },
  {
    quote:
      'We needed a contractor who would simply take ownership. They ran the site, the trades, the procurement — everything — and reported back clearly every Friday.',
    name: 'S. Patel',
    role: 'Operations Director, Linbro Office Park',
  },
  {
    quote:
      "The rib-and-block installation on our 4-storey block went up in eight days flat. Solid, level, no rework. We'll be using them again on the next phase.",
    name: 'T. van der Merwe',
    role: 'Quantity Surveyor',
  },
]

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Thabo Matsambu',
    role: 'Founder & Managing Director',
    bio: '20+ years in the South African construction industry across residential, commercial and civil works.',
  },
  {
    name: 'Lerato Dlamini',
    role: 'Contracts Director',
    bio: 'Quantity surveyor by training; oversees procurement, programme and cost control across every project.',
  },
  {
    name: 'Sipho Khumalo',
    role: 'Site Operations Manager',
    bio: 'Runs our site teams, sub-trade coordination and day-to-day delivery on the ground.',
  },
  {
    name: 'Anika Reddy',
    role: 'Health, Safety & Quality',
    bio: 'Leads our HSEQ programme and ensures every site meets OHS Act requirements and our internal quality bar.',
  },
]

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Consult',
    description:
      'We meet on site or in your offices to understand your vision, budget and timeline — then we put it in writing.',
  },
  {
    step: '02',
    title: 'Design & Quote',
    description:
      'Detailed scope, programme and fixed-price quote, with full transparency on provisional sums and exclusions.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Our site teams and trusted sub-trades execute the programme, with weekly progress reports and site meetings.',
  },
  {
    step: '04',
    title: 'Handover',
    description:
      'Final snagging, OHS File, as-built drawings and a 12-month defect liability period — all included.',
  },
]

export type Value = {
  title: string
  description: string
  icon: 'shield' | 'trophy' | 'handshake' | 'clock'
}

export const values: Value[] = [
  {
    title: 'Safety first',
    description:
      'Zero harm is non-negotiable. Every site runs to a written H&S plan with daily briefings and audits.',
    icon: 'shield',
  },
  {
    title: 'Build to last',
    description:
      "We don't cut corners. Materials, methods and finishes are specified for durability, not speed.",
    icon: 'trophy',
  },
  {
    title: 'Honest contracts',
    description:
      'Clear scope, fixed price, no surprises. If something changes, you hear about it before it costs you.',
    icon: 'handshake',
  },
  {
    title: 'On time, every time',
    description:
      'We plan the programme, then we deliver it. Our 98% on-time record is built on daily discipline.',
    icon: 'clock',
  },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'construction company South Africa',
    'building construction',
    'general building contractor',
    'rib and block',
    'rib and block installation',
    'Matsambu Projects',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}
