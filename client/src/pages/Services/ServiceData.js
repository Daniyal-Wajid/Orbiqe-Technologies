import service1 from '../../assets/service/MV LV.jpeg';
import service2 from '../../assets/service/Termination Kits.jpeg';
import service3 from '../../assets/service/Testing.jpeg';
import service4 from '../../assets/service/Air Cooler.jpeg';
import service5 from '../../assets/service/Solar.jpeg';
import service6 from '../../assets/service/Oil Transformer.JPG';
import service7 from '../../assets/service/Dry Transformer.jpg';
import service8 from '../../assets/service/Ducts.jpeg';
import service9 from '../../assets/service/Earthing.jpeg';
import service10 from '../../assets/service/Cable Tray Ladder.jpeg';
import service11 from '../../assets/service/LPS.jpeg';
import service12 from '../../assets/service/Axel Fans.jpeg';
import service13 from '../../assets/service/Technical.jpeg';
import service14 from '../../assets/service/CCTV.jpeg';
import service15 from '../../assets/service/Fire Alarm.jpeg';
import service16 from '../../assets/service/Industrial Fans.jpeg';
import service17 from '../../assets/service/Busway.jpg';
import service18 from '../../assets/service/CAD.jpeg';
import service19 from '../../assets/service/Fence.jpeg';
import service20 from '../../assets/service/Power Fan.jpeg';
import service21 from '../../assets/service/Complete.jpeg';

const Services = [
  {
    id: 1,
    name: 'Medium & Low Voltage Switchgear',
    description: 'Design, supply, and commissioning of MV/LV panels.',
    detailedDescription: 'We provide complete solutions for Medium Voltage (MV) and Low Voltage (LV) switchgear, ensuring efficient power distribution and circuit protection. Our panels are designed to international standards (IEC), offering reliability, safety, and operational efficiency for industrial plants and commercial buildings.',
    img: service1
  },
  {
    id: 2,
    name: 'Cable Termination & Jointing',
    description: 'Expert installation of cable termination kits.',
    detailedDescription: 'Our certified technicians specialize in the installation of heat-shrink and cold-shrink termination kits for MV and LV cables. We ensure fault-free connections that withstand harsh environmental conditions, minimizing downtime and maintenance costs.',
    img: service2
  },
  {
    id: 3,
    name: 'Testing & Commissioning',
    description: 'Comprehensive testing for MV/LV electrical panels.',
    detailedDescription: 'We offer rigorous testing and commissioning services for electrical panels, including insulation resistance, contact resistance, and functional tests. Our detailed reporting ensures your equipment operates safely and meets all regulatory compliance standards.',
    img: service3
  },
  {
    id: 4,
    name: 'Industrial Air Cooling',
    description: 'Heavy-duty cooling units for industrial facilities.',
    detailedDescription: 'Installation and maintenance of large-scale evaporative air coolers and HVAC systems designed to regulate temperatures in factories, warehouses, and power plants, protecting critical equipment and improving worker comfort.',
    img: service4
  },
  {
    id: 5,
    name: 'Solar Power Solutions',
    description: 'Turnkey solar energy systems for sustainability.',
    detailedDescription: 'From rooftop residential setups to large-scale industrial solar parks, we design and install high-efficiency solar (PV) systems. Our services include feasibility studies, mounting structure fabrication, inverter installation, and net metering support.',
    img: service5
  },
  {
    id: 6,
    name: 'Oil-Type Transformers',
    description: 'Supply, installation, and filtration of oil transformers.',
    detailedDescription: 'We specialize in oil-immersed distribution and power transformers. Our services cover lifting, positioning, cabling, oil filtration, and dehydration to extend the lifespan and efficiency of your transformer assets.',
    img: service6
  },
  {
    id: 7,
    name: 'Dry-Type Transformers',
    description: 'Cast resin transformer solutions for indoor safety.',
    detailedDescription: 'Ideal for hospitals, malls, and high-rise buildings, our dry-type transformers offer high safety with low fire risk. We handle complete installation, busbar connection, and enclosure setup for seamless integration into your power network.',
    img: service7
  },
  {
    id: 8,
    name: 'HVAC Ducting Systems',
    description: 'Fabrication and installation of GI ductwork.',
    detailedDescription: 'Precision-engineered ducting solutions for optimal airflow. We fabricate and install Galvanized Iron (GI) ducts for central air conditioning and fresh air systems, ensuring leak-free performance and energy conservation.',
    img: service8
  },
  {
    id: 9,
    name: 'Earthing & Grounding',
    description: 'Advanced earthing systems for equipment safety.',
    detailedDescription: 'We design low-resistance earthing systems using copper rods, chemical earth pits, and earth mats. Effective grounding protects personnel and sensitive electronic equipment from lightning strikes and short-circuit fault currents.',
    img: service9
  },
  {
    id: 10,
    name: 'Cable Management Systems',
    description: 'Installation of cable trays, ladders, and trunking.',
    detailedDescription: 'Organize and protect your power and data cables with our robust cable management solutions. We install perforated trays, wire mesh baskets, and heavy-duty ladders to facilitate easy maintenance and future expansion.',
    img: service10
  },
  {
    id: 11,
    name: 'Lightning Protection',
    description: 'Active and passive lightning arrestor installation.',
    detailedDescription: 'Safeguard your infrastructure with our state-of-the-art Lightning Protection Systems (LPS). We install Early Streamer Emission (ESE) air terminals and down conductors to safely divert lightning strikes into the ground.',
    img: service11
  },
  {
    id: 12,
    name: 'Axial Ventilation Fans',
    description: 'High-flow axial fans for tunnel and factory ventilation.',
    detailedDescription: 'Supply and installation of direct-drive axial fans for applications requiring large air volumes at low pressure. Perfect for general ventilation, smoke extraction, and cooling in industrial settings.',
    img: service12
  },
  {
    id: 13,
    name: 'Technical Maintenance',
    description: '24/7 breakdown support and preventive maintenance.',
    detailedDescription: 'Our dedicated technical support team provides routine maintenance contracts and emergency troubleshooting. We minimize downtime by rapidly diagnosing and repairing electrical and mechanical faults.',
    img: service13
  },
  {
    id: 14,
    name: 'CCTV Surveillance',
    description: 'IP and analog camera systems for security.',
    detailedDescription: 'Enhance your premises security with our HD surveillance solutions. We install IP cameras, NVRs, and remote monitoring setups, complete with cabling and control room integration for 24/7 oversight.',
    img: service14
  },
  {
    id: 15,
    name: 'Fire Alarm Systems',
    description: 'Addressable and conventional fire detection.',
    detailedDescription: 'Life safety is paramount. We design, install, and certify fire alarm systems including smoke detectors, heat sensors, and manual call points, integrated with emergency evacuation sirens.',
    img: service15
  },
  {
    id: 16,
    name: 'Industrial Exhaust Fans',
    description: 'Heavy-duty exhaust solutions for hazardous areas.',
    detailedDescription: 'Custom-configured exhaust fans for removing fumes, dust, and heat from production floors. Our fans are built to withstand corrosive environments and continuous duty cycles.',
    img: service16
  },
  {
    id: 17,
    name: 'Busway & Busduct Systems',
    description: 'Compact power distribution alternatives to cabling.',
    detailedDescription: 'We install sandwich-type busway systems for high-current power distribution in high-rise buildings and factories. Busways offer lower voltage drop, compact footprint, and flexible tap-off units compared to traditional cabling.',
    img: service17
  },
  {
    id: 18,
    name: 'Exothermic Welding (CAD Weld)',
    description: 'Permanent molecular bonding for earthing connections.',
    detailedDescription: 'We supply high-quality graphite molds and weld powder for exothermic welding. This process creates a permanent, maintenance-free connection that will not loosen or corrode over time, essential for earthing grids.',
    img: service18
  },
  {
    id: 19,
    name: 'Electric Security Fencing',
    description: 'High-voltage perimeter security barriers.',
    detailedDescription: 'Deter intruders with our smart electric fencing solutions. Integrated with alarm systems, these non-lethal electrified barriers provide active perimeter protection for sensitive residential and commercial sites.',
    img: service19
  },
  {
    id: 20,
    name: 'Powerhouse Ventilation',
    description: 'Specialized cooling for generator and turbine rooms.',
    detailedDescription: 'We design custom ventilation packages for powerhouses, ensuring generators and turbines operate within safe temperature limits through balanced intake and exhaust airflow systems.',
    img: service20
  },
  {
    id: 21,
    name: 'Turnkey Electrification',
    description: 'End-to-end electrical contracting services.',
    detailedDescription: 'Our flagship service covering the entire project lifecycle: from load calculation and design to procurement, installation, commissioning, and handover. A single point of responsibility for your complete electrical infrastructure.',
    img: service21
  }
];

export default Services;
