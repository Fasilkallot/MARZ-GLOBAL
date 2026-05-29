// Product Categories Data

import electricalsImg from '../assets/products/electricals.png';
import pipesImg from '../assets/products/pipes.png';
import generalSupplyImg from '../assets/products/general-supply.png';
import walkwayImg from '../assets/products/walkway-systems.png';
import safetyImg from '../assets/products/safety-ppe.png';
import wireImg from '../assets/products/wire-products.png';
import weldingImg from '../assets/products/welding.png';
import timberImg from '../assets/products/timber.png';
import metalImg from '../assets/products/metal-products.png';

export const productCategories = [
  {
    id: 'electrical',
    title: 'Electrical Materials',
    icon: 'Zap',
    shortDescription:
      'Complete range of electrical materials including cables, switchgear, and distribution boards for all project types.',
    description:
      'We supply a comprehensive range of electrical materials including Low Voltage (LV), Medium Voltage (MV) and High Voltage (HV) cables, switchgear, distribution boards, lighting systems, cable trays, conduits, and earthing systems. Our electrical products meet UAE and international standards.',
    highlights: [
      'LV/MV/HV Cables',
      'Switchgear & Distribution Boards',
      'Industrial Lighting Systems',
      'Cable Trays & Conduits',
      'Earthing & Bonding Systems',
      'Control Panels',
    ],
    image: electricalsImg,
    color: '#002E7A',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Materials',
    icon: 'Settings',
    shortDescription:
      'Pipes, fittings, valves, pumps, motors and HVAC equipment for industrial and commercial projects.',
    description:
      'Our mechanical materials range covers pipes and fittings, valves, flanges, pumps, motors, HVAC equipment, fasteners, and structural components. Suitable for oil and gas, industrial, and infrastructure applications.',
    highlights: [
      'Pipes & Fittings',
      'Valves & Flanges',
      'Industrial Pumps & Motors',
      'HVAC Equipment',
      'Fasteners & Bolts',
      'Mechanical Seals',
    ],
    image: pipesImg,
    color: '#1A4A8A',
  },
  {
    id: 'civil',
    title: 'Civil Materials',
    icon: 'Building2',
    shortDescription:
      'Cement, steel, scaffolding, waterproofing, and insulation for civil construction projects.',
    description:
      'We supply all essential civil construction materials including cement, structural steel, scaffolding systems, waterproofing membranes, insulation materials, and reinforcement products. Ideal for large-scale construction and infrastructure projects.',
    highlights: [
      'Cement & Concrete Products',
      'Structural Steel & Rebar',
      'Scaffolding Systems',
      'Waterproofing Membranes',
      'Insulation Materials',
      'Formwork Systems',
    ],
    image: generalSupplyImg,
    color: '#003A9B',
  },
  {
    id: 'hardware',
    title: 'Hardware & Safety',
    icon: 'Wrench',
    shortDescription:
      'Industrial tools, safety equipment (PPE), fasteners, and sealants for every job site requirement.',
    description:
      'From hand tools and power tools to Personal Protective Equipment (PPE), fasteners, sealants, and fittings — we stock a full range of hardware and safety products to keep your workforce safe and your projects on track.',
    highlights: [
      'Personal Protective Equipment (PPE)',
      'Industrial Hand & Power Tools',
      'Fasteners & Anchoring Systems',
      'Sealants & Adhesives',
      'Safety Barriers & Signage',
      'Lifting & Rigging Equipment',
    ],
    image: safetyImg,
    color: '#D44E00',
  },
  {
    id: 'metal',
    title: 'Metal Products',
    icon: 'Layers',
    shortDescription:
      'Structural steel, sheets, plates, coils, gratings and expanded metal for heavy industrial use.',
    description:
      'Our metal products range includes structural steel sections, sheets and plates, hot and cold rolled coils, pipes and tubes, gratings, and expanded metal. We serve fabricators, contractors, and industrial manufacturers across the UAE.',
    highlights: [
      'Structural Steel Sections',
      'Sheets, Plates & Coils',
      'Pipes & Tubes',
      'Steel Gratings',
      'Expanded Metal',
      'Custom Cut-to-Size',
    ],
    image: metalImg,
    color: '#2B5EA7',
  },
  {
    id: 'building',
    title: 'Building Materials',
    icon: 'Home',
    shortDescription:
      'Blocks, gypsum boards, ceilings, flooring, paints, glass and aluminum for modern construction.',
    description:
      'We provide a complete range of building materials including concrete blocks, gypsum board systems, suspended ceiling products, flooring materials, interior and exterior paints, glass, aluminum profiles, and finishing materials.',
    highlights: [
      'Concrete & AAC Blocks',
      'Gypsum Board Systems',
      'Suspended Ceiling Products',
      'Flooring Materials',
      'Interior & Exterior Paints',
      'Glass & Aluminum Profiles',
    ],
    image: walkwayImg,
    color: '#1E5799',
  },
  {
    id: 'timber',
    title: 'Timber & Wood',
    icon: 'TreePine',
    shortDescription:
      'Hardwood, plywood, MDF/HDF, formwork timber and joinery products for construction and fit-out.',
    description:
      'Marz Global supplies a wide range of timber products including hardwood lumber, softwood boards, plywood, MDF, HDF, formwork timber systems, and joinery products for both construction and interior fit-out applications.',
    highlights: [
      'Hardwood & Softwood Lumber',
      'Plywood & Marine Ply',
      'MDF & HDF Boards',
      'Formwork Timber Systems',
      'Joinery Products',
      'Decorative Wood Panels',
    ],
    image: timberImg,
    color: '#8B4513',
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation',
    icon: 'Gauge',
    shortDescription:
      'Gauges, transmitters, control valves, sensors and automation components for process industries.',
    description:
      'We supply specialized instrumentation products including pressure gauges, temperature transmitters, control valves, level sensors, flow meters, and automation components for oil and gas, energy, and process industries.',
    highlights: [
      'Pressure Gauges & Transmitters',
      'Temperature Sensors',
      'Control Valves',
      'Flow Meters',
      'Level Indicators',
      'Automation Components',
    ],
    image: wireImg,
    color: '#004080',
  },
];
