export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  status: string;
  scope: string;
  description: string;
  overview: string;
  designApproach: string;
  materials: string[];
  image: string;
  gallery: string[];
  gridClassName?: string;
  aspectClass?: string;
}

export const projects: Project[] = [
  {
    slug: 'courtyard-residence',
    title: 'The Courtyard Residence',
    category: 'Residential',
    location: 'Hyderabad',
    year: '2023',
    status: 'Completed',
    scope: 'Architecture + Construction + Interior',
    description: 'A seamless blend of indoor and outdoor living, featuring a central open-sky courtyard.',
    overview: 'This fictional project represents a return to traditional courtyard living, reimagined for modern urban contexts. The primary objective was to create a sanctuary that shields its inhabitants from the bustling city outside while providing an expansive, light-filled interior environment. Every room is oriented inwards, gazing upon a central, open-to-sky void that brings natural elements directly into the core of the home.',
    designApproach: 'Focusing heavily on passive cooling and natural ventilation, the structure utilizes deep overhangs and cross-ventilation corridors. We prioritized a neutral, grounding palette that allows the interplay of sunlight and shadow to become the primary decorative element throughout the day.',
    materials: ['Exposed Concrete', 'Reclaimed Teak Wood', 'Kota Stone Flooring', 'Brushed Brass Hardware'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    ],
    gridClassName: 'md:col-span-8',
    aspectClass: 'aspect-[4/3] md:aspect-[16/9]'
  },
  {
    slug: 'amaravati-heights',
    title: 'Amaravati Heights',
    category: 'Commercial',
    location: 'Amaravati',
    year: '2024',
    status: 'Completed',
    scope: 'Construction + Interior',
    description: 'Modern workspace environments prioritizing natural light and sustainable materials.',
    overview: 'Designed as a flagship commercial hub for tech startups, Amaravati Heights focuses on fluid workspaces that can adapt to changing organizational needs. The building integrates extensive glass facades to maximize daylight, drastically reducing the reliance on artificial lighting during operating hours.',
    designApproach: 'The architectural approach breaks away from the traditional closed-office layout. It implements an open-plan structural grid with specialized acoustic zones. The central atrium serves as a vertical connector, fostering spontaneous interactions between different corporate teams.',
    materials: ['High-Performance Glazing', 'Structural Steel', 'Acoustic Timber Panels', 'Terrazzo'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    ],
    gridClassName: 'md:col-span-4',
    aspectClass: 'aspect-[4/3] md:aspect-[3/4]'
  },
  {
    slug: 'terra-house',
    title: 'Terra House',
    category: 'Architecture',
    location: 'Bangalore',
    year: '2022',
    status: 'Completed',
    scope: 'Architecture',
    description: 'Minimalist structural design emphasizing raw concrete and earthy tones.',
    overview: 'Terra House is a study in material honesty. The clients requested a residence that felt grounded and robust, yet warm and inviting. By stripping away unnecessary finishes, we allowed the raw structural elements to define the aesthetic of the space.',
    designApproach: 'The massing of the building consists of intersecting geometric volumes that create varied spatial experiences. Large, frameless windows blur the boundary between the austere interior and the lush tropical landscaping outside, creating a continuous dialogue between the built and natural environments.',
    materials: ['Board-Formed Concrete', 'Weathered Corten Steel', 'Natural Oak', 'Basalt Stone'],
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4e56d?w=800&q=80',
    ],
    gridClassName: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] md:aspect-square'
  },
  {
    slug: 'atelier-office',
    title: 'The Atelier Office',
    category: 'Interiors',
    location: 'Mumbai',
    year: '2023',
    status: 'Completed',
    scope: 'Interior Design',
    description: 'Creative studio space designed to foster collaboration and focus.',
    overview: 'Tasked with retrofitting an industrial warehouse into a contemporary design studio, this project balanced the preservation of the building’s historical character with the insertion of modern, highly functional workspaces.',
    designApproach: 'We utilized a "box-in-a-box" concept, inserting freestanding glass meeting rooms into the vast open floor plan. This preserved the dramatic ceiling height and exposed trusses while providing necessary acoustic privacy for focused work.',
    materials: ['Exposed Brick', 'Micro-topping Concrete', 'Matte Black Steel', 'Birch Plywood'],
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=800&q=80',
    ],
    gridClassName: 'md:col-span-6',
    aspectClass: 'aspect-[4/3] md:aspect-square'
  },
  {
    slug: 'urban-renewal',
    title: 'Urban Renewal Residence',
    category: 'Renovation',
    location: 'Chennai',
    year: '2021',
    status: 'Completed',
    scope: 'Renovation + Interior',
    description: 'Complete structural modernization of a heritage urban property.',
    overview: 'This project required the delicate transformation of a 60-year-old heritage structure into a modern family home. The challenge was integrating state-of-the-art plumbing, electrical, and HVAC systems without compromising the building’s historic facade.',
    designApproach: 'We maintained the exterior shell meticulously, restoring the original masonry and woodwork. Internally, the floor plan was completely reorganized, removing non-load-bearing walls to create a fluid, contemporary living space that contrasts beautifully with the traditional exterior.',
    materials: ['Restored Teak', 'Italian Marble', 'Fluted Glass', 'Lime Plaster'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687644-b04fd7ce3b1c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752229-250ce3ebadfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
    ],
    gridClassName: 'md:col-span-12',
    aspectClass: 'aspect-[4/3] md:aspect-[21/9]'
  },
];
