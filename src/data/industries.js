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
    relevantProducts: ['Electrical Materials', 'Civil Materials', 'Hardware & Safety', 'Building Materials', 'Timber & Wood', 'Metal Products'],
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
      'Oil and gas operations require materials that meet the highest safety and performance standards. We supply specialized instrumentation, piping, valves, electrical components, and safety equipment for upstream, midstream, and downstream applications.',
    capabilities: [
      'High-pressure piping and fittings',
      'Process instrumentation and control valves',
      'Hazardous area electrical equipment',
      'Flanges, gaskets, and fasteners',
      'Safety and PPE equipment',
      'Corrosion-resistant materials',
    ],
    relevantProducts: ['Instrumentation', 'Mechanical Materials', 'Electrical Materials', 'Hardware & Safety'],
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
      'Mining operations require exceptionally durable materials that can withstand harsh environments. We supply robust mechanical, electrical, and structural materials designed for high-stress mining applications.',
    capabilities: [
      'Heavy-duty structural steel',
      'Robust electrical cabling systems',
      'Industrial pumps and motors',
      'Safety and protective equipment',
      'Mechanical wear components',
      'Conveyor and material handling parts',
    ],
    relevantProducts: ['Mechanical Materials', 'Metal Products', 'Electrical Materials', 'Hardware & Safety'],
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
      'From conventional power plants to renewable energy installations, we supply the electrical, mechanical, and instrumentation materials needed to build and maintain energy infrastructure across the UAE.',
    capabilities: [
      'High-voltage cables and switchgear',
      'Transformer components',
      'Substation equipment and materials',
      'Renewable energy system components',
      'Instrumentation and SCADA materials',
      'Cable management systems',
    ],
    relevantProducts: ['Electrical Materials', 'Instrumentation', 'Mechanical Materials', 'Metal Products'],
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
      'Roads, bridges, utilities, and public works projects rely on consistent material supply. Marz Global provides the full range of civil, mechanical, and electrical materials required for large-scale infrastructure development.',
    capabilities: [
      'Civil construction materials',
      'Road and bridge construction supplies',
      'Utility and drainage systems',
      'Traffic and safety equipment',
      'Waterproofing and protective coatings',
      'Landscaping and site materials',
    ],
    relevantProducts: ['Civil Materials', 'Building Materials', 'Mechanical Materials', 'Metal Products', 'Hardware & Safety'],
    image: walkwayImg,
    color: '#2B7A3A',
    bgColor: 'from-green-950 to-gray-900',
  },
];
