// Product Categories Data
// Updated to match official MARZ GLOBAL product range

import electricalsImg from '../assets/products/electricals.png';
import pipesImg from '../assets/products/pipes.png';
import generalSupplyImg from '../assets/products/general-supply.png';
import walkwayImg from '../assets/products/walkway-systems.png';
import safetyImg from '../assets/products/hvac.png';
import timberImg from '../assets/products/timber.png';
import weldingImg from '../assets/products/welding.png';
import wireImg from '../assets/products/wire-products.png';

export const productCategories = [
  {
    id: 'electricals-materials',
    title: 'Electricals Materials',
    icon: 'Zap',
    shortDescription:
      'Full range of industrial electrical materials — cables, switchgear, lighting, circuit breakers, and more.',
    description:
      'Marz Global supplies a comprehensive portfolio of electrical materials to support construction, oil & gas, energy, and industrial projects across the UAE. From low-voltage cables to industrial switchgear and lighting systems, we source products that meet UAE and international standards.',
    highlights: [
      'Cables, Wires and Accessories',
      'Cable Support Systems',
      'Junction Boxes & Control Panels',
      'Circuit Breaker and Relays',
      'Switchgears & Switches',
      'Industrial Plugs & Sockets',
      'Lighting Fixtures, Lamps & Accessories',
    ],
    image: electricalsImg,
    color: '#002E7A',
  },
  {
    id: 'general-supply',
    title: 'General Supply',
    icon: 'Package',
    shortDescription:
      'Instrumentation, spare parts, pumps, tools, adhesives, and all types of industrial machinery and accessories.',
    description:
      'Our general supply category covers a wide range of industrial goods required across all project types. From precision instrumentation and testing equipment to power tools, spare parts, and heavy industrial machinery — we are your one-stop supply partner in the UAE.',
    highlights: [
      'Instrumentation & Testing Materials',
      'Spare Parts',
      'Safety Helmets, Face Shields & Eye Protection',
      'Fasteners & Couplings',
      'Power Tools and Hand Tools',
      'Adhesives & Sealants',
      'Gloves',
      'All Types of Industrial Machineries & Accessories',
    ],
    image: generalSupplyImg,
    color: '#1A4A8A',
  },
  {
    id: 'safety-materials',
    title: 'HVAC Systems & Components',
    icon: 'ShieldCheck',
    shortDescription:
      'Complete personal protective equipment — clothing, helmets, shoes, gloves, eye protection, and safety harnesses.',
    description:
      'Efficient climate control is essential for commercial, industrial, and residential projects. Marz Global supplies a complete range of HVAC systems, components, and accessories designed to deliver optimal performance, energy efficiency, and indoor air quality. All products are sourced from trusted manufacturers and comply with UAE and international standards.',
    highlights: [
      'Air Conditioning Systems',
      'Ducting & Accessories',
      'Ventilation Equipment',
      'HVAC Spare Parts & Components',
      'Controls & Automation',
    ],
    image: safetyImg,
    color: '#D44E00',
  },
  {
    id: 'pipes-fittings-valves-flanges',
    title: 'Pipes, Fittings, Valves & Flanges',
    icon: 'Pipette',
    shortDescription:
      'Seamless, LSAW, SSAW, ERW and PVC pipes plus flanges, fittings, ball valves, butterfly valves, and brass valves.',
    description:
      'We supply a complete range of piping systems, fittings, valves, and flanges for oil and gas, construction, water treatment, and industrial applications. All pipe grades are available in carbon steel, stainless steel, and PVC, with full traceability and certification on request.',
    highlights: [
      'Seamless Pipes',
      'LSAW Pipes',
      'SSAW Pipes',
      'ERW Pipes',
      'PVC Pipes',
      'Flanges',
      'Fitting Components',
      'Safety Valves',
      'Butterfly Valves',
      'Ball Valves',
      'Brass Valves',
    ],
    image: pipesImg,
    color: '#2B5EA7',
  },
  {
    id: 'walkway-systems',
    title: 'Industrial and Commercial Walkway Systems',
    icon: 'Grid3x3',
    shortDescription:
      'FRP/GRP, ductile iron, aluminum, pressed lock, magic, and plank grating for walkways and flooring systems.',
    description:
      'Marz Global supplies a full range of industrial and commercial walkway grating solutions suitable for offshore platforms, industrial plants, commercial facilities, and infrastructure projects. Our gratings are available in multiple materials and load ratings to suit any application.',
    highlights: [
      'FRP/GRP Grating',
      'Ductile Iron Grating',
      'Aluminum Grating',
      'Pressed Lock Grating',
      'Magic Grating',
      'Plank Grating',
    ],
    image: walkwayImg,
    color: '#3A6B3A',
  },
  {
    id: 'woods-timber',
    title: 'Woods & Timber',
    icon: 'TreePine',
    shortDescription:
      'Construction wood, hardwood, plywood, softwood, African timber, wooden pallets and MDF boards.',
    description:
      'Marz Global supplies a comprehensive range of wood and timber products for construction, fit-out, and industrial applications across the UAE. From structural construction wood and hardwood to plywood, African timber, wooden pallets, and medium density fibre boards — we source quality timber to match every project requirement.',
    highlights: [
      'Construction Wood',
      'Hardwood',
      'Plywood',
      'Softwood',
      'African Timber',
      'Wooden Pallets',
      'Medium Density Fibre Boards (MDF)',
    ],
    image: timberImg,
    color: '#8B4513',
  },
  {
    id: 'welding-equipment',
    title: 'Welding Equipments & Consumables',
    icon: 'Flame',
    shortDescription:
      'Welding machines, semi-automatic inverters, welding rods, MIG wires, earth clamps, and accessories.',
    description:
      'We supply a full range of welding equipment and consumables for industrial, construction, and fabrication applications. Our welding product range includes professional-grade machines, semi-automatic welding inverters, electrodes, MIG wires, earth clamps, and all necessary welding accessories.',
    highlights: [
      'Welding Machines',
      'Semi-Automatic Welding Inverter',
      'Welding Rods',
      'Mig Wires',
      'Crocodile Earth Clamp',
      'Other Welding Accessories',
    ],
    image: weldingImg,
    color: '#C45200',
  },
  {
    id: 'specialized-wire',
    title: 'Specialized Wire Products',
    icon: 'Network',
    shortDescription:
      'Wire mesh, expanded mesh, GI/MS wire mesh, chain link fencing, cable trays, shelving systems, and gabions.',
    description:
      'Our specialized wire products range serves construction, security, storage, and infrastructure applications. We supply expanded wire mesh, galvanized and mild steel wire mesh, chain link fencing for temporary and permanent use, cable trays, warehouse shelving systems, and gabion baskets for civil engineering projects.',
    highlights: [
      'Wire Mesh / Expanded Mesh',
      'GI/MS Wire Mesh',
      'Chain Link Fence / Temporary Fencing',
      'Cable Tray',
      'Shelving System/Mesh Deck',
      'Gabions',
    ],
    image: wireImg,
    color: '#4A6B8A',
  },
];
