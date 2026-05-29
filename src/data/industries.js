// Industries Data

import electricalsImg from '../assets/products/electricals.png';
import pipesImg from '../assets/products/pipes.png';
import generalSupplyImg from '../assets/products/general-supply.png';
import metalImg from '../assets/products/metal-products.png';
import walkwayImg from '../assets/products/walkway-systems.png';

export const industries = [
  {
    id: 'construction',
    title: 'Construction',
    icon: 'Building2',
    tagline: 'From Foundation to Finish',
    overview:
      'The UAE construction sector demands reliable, high-quality materials delivered on time. Marz Global is a trusted supply partner for residential, commercial, and industrial construction projects across the UAE.',
    capabilities: [
      'Structural steel and rebar supply',
      'Electrical systems and cabling',
      'Civil and finishing materials',
      'Hardware, tools, and safety equipment',
      'Building envelope materials',
      'On-site delivery coordination',
    ],
    relevantProducts: ['Electricals Materials', 'Safety Materials (PPE)', 'Pipes, Fittings, Valves & Flanges', 'General Supply', 'Industrial and Commercial Walkway Systems'],
    image: generalSupplyImg,
    color: '#002E7A',
    bgColor: 'from-blue-950 to-blue-900',
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    icon: 'Flame',
    tagline: 'Critical Supply for Critical Operations',
    overview:
      'Oil and gas operations require materials that meet the highest safety and performance standards. We supply specialized piping systems, valves, flanges, electrical materials, and safety equipment for upstream, midstream, and downstream applications.',
    capabilities: [
      'High-pressure piping and fittings',
      'Valves, flanges, and fitting components',
      'Hazardous area electrical equipment',
      'Instrumentation and testing materials',
      'Safety and PPE equipment',
      'Corrosion-resistant materials',
    ],
    relevantProducts: ['Pipes, Fittings, Valves & Flanges', 'Electricals Materials', 'Safety Materials (PPE)', 'General Supply'],
    image: pipesImg,
    color: '#D44E00',
    bgColor: 'from-orange-950 to-gray-900',
  },
  {
    id: 'mining',
    title: 'Mining',
    icon: 'Mountain',
    tagline: 'Durable Materials for Demanding Environments',
    overview:
      'Mining operations require exceptionally durable materials that can withstand harsh environments. We supply robust electrical, piping, and structural materials designed for high-stress mining applications.',
    capabilities: [
      'Heavy-duty structural walkway grating',
      'Robust electrical cabling systems',
      'Industrial pumps and accessories',
      'Safety and protective equipment (PPE)',
      'Mechanical spare parts',
      'Fasteners and couplings',
    ],
    relevantProducts: ['Industrial and Commercial Walkway Systems', 'General Supply', 'Electricals Materials', 'Safety Materials (PPE)'],
    image: metalImg,
    color: '#4A4A4A',
    bgColor: 'from-gray-900 to-gray-800',
  },
  {
    id: 'energy',
    title: 'Energy',
    icon: 'Zap',
    tagline: 'Powering the UAE\'s Energy Future',
    overview:
      'From conventional power plants to renewable energy installations, we supply the electrical materials, piping systems, and instrumentation needed to build and maintain energy infrastructure across the UAE.',
    capabilities: [
      'High-voltage cables and switchgear',
      'Circuit breakers and relays',
      'Cable support systems',
      'Instrumentation and testing materials',
      'Pipes, valves, and flanges',
      'Cable management systems',
    ],
    relevantProducts: ['Electricals Materials', 'Pipes, Fittings, Valves & Flanges', 'General Supply', 'Safety Materials (PPE)'],
    image: electricalsImg,
    color: '#002E7A',
    bgColor: 'from-blue-950 to-indigo-900',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: 'Waypoints',
    tagline: 'Building the Backbone of the UAE',
    overview:
      'Roads, bridges, utilities, and public works projects rely on consistent material supply. Marz Global provides the full range of electrical, piping, walkway systems, and general supply materials for large-scale infrastructure development.',
    capabilities: [
      'Walkway grating and flooring systems',
      'Electrical cabling and distribution',
      'Pipes, fittings, and valves',
      'Safety equipment for large sites',
      'Industrial machinery and accessories',
      'Fasteners, tools, and general supply',
    ],
    relevantProducts: ['Industrial and Commercial Walkway Systems', 'Pipes, Fittings, Valves & Flanges', 'Electricals Materials', 'General Supply', 'Safety Materials (PPE)'],
    image: walkwayImg,
    color: '#2B7A3A',
    bgColor: 'from-green-950 to-gray-900',
  },
];
