import { Job, ServiceItem, CoreValue, StatsBlock } from './types';
import b2bStorageImg from './assets/images/b2b_storage_1782454289793.jpg';
import ecommerceFulfillmentImg from './assets/images/ecommerce_fulfillment_1782454305399.jpg';
import coldStorageImg from './assets/images/cold_storage_1782454320369.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'b2b-storage',
    title: 'B2B Bulk Storage',
    shortDescription: 'Heavy-duty racking and industrial storage tailored for large volume, bulk inventories with 24/7 access.',
    fullDescription: 'Our industrial bulk storage units are designed to accommodate high-volume enterprise cargo. We offer custom heavy-duty racking, specialized pallet positioning, and high-clearance bays matching international Dubai South logistics standards. With deep aisle layouts and state-of-the-art inventory systems, your bulk inventory is handled with maximum space efficiency and safety.',
    image: b2bStorageImg,
    features: [
      'High-capacity pallet racking',
      'RFID-enabled inventory tracking',
      'Flexible short-term & long-term leases',
      'Heavy-duty forklift operations',
      'Cross-docking and container destuffing'
    ],
    iconName: 'Boxes'
  },
  {
    id: 'ecommerce-fulfillment',
    title: 'E-commerce Pick & Pack',
    shortDescription: 'Speed-optimized processing, sorting, packing, and seamless fulfillment integrated with Amazon, Noon, and Shopify.',
    fullDescription: 'Designed specifically for rapid-turnover retail and e-commerce companies in Dubai. Our dedicated pick & pack fulfillment zone utilizes hyper-efficient digital batch-picking paths and customized packaging protocols. We integrate natively with top regional and global marketplaces to dispatch orders within hours, maintaining 99.9% accuracy.',
    image: ecommerceFulfillmentImg,
    features: [
      'Same-day order processing',
      'Seamless Amazon & Noon preparation',
      'Custom branding & eco-friendly packaging',
      'Automated real-time inventory sync',
      'Reverse logistics & returns management'
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'cold-storage',
    title: 'Temperature-Controlled Warehousing',
    shortDescription: 'Strict climate-controlled cold storage zones tailored for pharmaceuticals, fresh foods, and sensitive cargo.',
    fullDescription: 'Our advanced cold storage facilities maintain highly reliable climate regulation ranging from -25°C to +25°C. Outfitted with dual-redundant cooling machinery, automated backup generators, and real-time smart sensor telemetry, we safeguard sensitive pharmaceuticals, premium frozen commodities, and temperature-critical electronics.',
    features: [
      'Multi-zone temperature settings (-25°C to +25°C)',
      'Dual-redundant HVAC system coverage',
      'Real-time temperature and humidity logs',
      'Strict health, safety & hygiene protocols',
      'GDP compliant pharmaceutical handling'
    ],
    image: coldStorageImg,
    iconName: 'ThermometerSnowflake'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Reliability',
    description: 'We promise and deliver absolute security, zero downtime, and meticulously timed logistics operations.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Innovation',
    description: 'Leveraging next-gen telemetry, state-of-the-art sorting equipment, and optimized tracking algorithms.',
    iconName: 'Cpu'
  },
  {
    title: 'Employment Generation',
    description: 'Developing high-caliber industrial talent and fostering diverse operational opportunities across the UAE.',
    iconName: 'Users'
  }
];

export const STATS: StatsBlock[] = [
  {
    value: '50,000+',
    label: 'Square Feet Space',
    description: 'Expansive, high-ceiling modern warehouse floor in Dubai South logistics hub.'
  },
  {
    value: '24/7',
    label: 'Active Security',
    description: 'HD thermal cameras, biometric barriers, and around-the-clock physical patrols.'
  },
  {
    value: '100%',
    label: 'On-Time Dispatch',
    description: 'Optimized transit routes and automated picking workflows ensuring zero delays.'
  },
  {
    value: '25+',
    label: 'Enterprise Clients',
    description: 'Trusted partner for leading regional retailers, manufacturers, and distributors.'
  }
];

export const JOB_OPENINGS: Job[] = [
  {
    id: 'job-1',
    title: 'Warehouse Operations Manager',
    department: 'Operations',
    location: 'Dubai South Hub',
    type: 'Full-time',
    salary: 'AED 12,000 - 15,000 / month',
    description: 'We are seeking an experienced Warehouse Operations Manager to oversee daily storage, fulfillment, and picking processes in our flagship Dubai South facility. You will lead a team of 30+ operatives and handle direct client relationships.',
    requirements: [
      '5+ years of warehouse management experience in the UAE',
      'Expertise in Warehouse Management Systems (WMS) and e-commerce integrations',
      'Proven team leadership, scheduling, and labor optimization skills',
      'Fluency in English (Arabic or Hindi/Urdu is a strong advantage)',
      'Familiarity with Dubai South regulatory and customs clearance'
    ],
    benefits: [
      'Comprehensive family medical insurance coverage',
      'Performance-based annual bonuses',
      'Paid annual flight ticket to home country',
      'Modern, climate-controlled office workspace'
    ]
  },
  {
    id: 'job-2',
    title: 'Heavy Forklift Operator',
    department: 'Logistics',
    location: 'Dubai South Free Zone',
    type: 'Full-time',
    salary: 'AED 4,500 - 5,500 / month',
    description: 'We are looking for a certified Heavy Forklift Operator to manage loading, unloading, and racking positioning in our high-bay industrial storage zone. Absolute focus on warehouse safety and physical precision is required.',
    requirements: [
      'Valid UAE Heavy Forklift Driving License (No. 7 or No. 8)',
      '3+ years of experience operating electric/diesel reach-trucks in a fast-paced environment',
      'Ability to read and follow digital pallet barcode instructions',
      'Strict adherence to OSHA & UAE industrial safety protocols',
      'Good physical stamina and capability to work in multi-zone temperature environments'
    ],
    benefits: [
      'Company provided air-conditioned accommodation',
      'Overtime allowance opportunities',
      'Annual 30 days paid leave with free airfare',
      'Safety gear and uniform allowances'
    ]
  },
  {
    id: 'job-3',
    title: 'E-commerce Picker & Packer',
    department: 'Fulfillment',
    location: 'Dubai South Hub',
    type: 'Full-time',
    salary: 'AED 3,200 - 3,800 / month',
    description: 'Join our rapid e-commerce sorting team. Pickers and Packers are responsible for picking high-volume retail items and packing them accurately for direct Amazon, Noon, and retail consumer shipping.',
    requirements: [
      'Previous experience in retail or e-commerce pick & pack roles is highly preferred',
      'Basic English communication skills and ability to operate digital handheld scanners',
      'High accuracy, speed, and meticulous attention to packaging standards',
      'Ability to stand and walk for standard operation shifts',
      'Immediate joiners (on transferable or tourist visas) preferred'
    ],
    benefits: [
      'Corporate transportation and accommodation provided',
      'Monthly performance picking bonuses',
      'Comprehensive health insurance policy',
      'Rapid internal promotion opportunities to Shift Supervisor'
    ]
  }
];
