/**
 * This file contains data for various slider components used in the application.
 * The data is used by the following components:
 * - HeroWithSlider
 * - GallerySlider
 * - Testimonials
 * - ControlledSliderWImages
 */

/**
 * Data for the HeroWithSlider component
 * Used in: src/components/ui/sliders.js
 */
export const heroSlides = [
  {
    title: 'Welcome to Our Creative Universe',
    desc: 'Where imagination meets innovation, and ideas come to life.',
    imgSrc: '/images/hero/hero-1.jpg',
    imgAlt: 'A vibrant creative workspace with colorful elements',
    imgW: 1920,
    imgH: 1080,
    priority: true,
    buttons: [
      {
        href: '#',
        label: 'Learn more',
        variant: 'primary',
        className: 'w-full sm:w-auto',
        ariaLabel: 'Learn more about Welcome to Our Creative Universe',
      },
      {
        href: '#',
        label: 'Get started',
        variant: '',
        className:
          'w-full sm:w-auto text-purple-p600 bg-white border border-purple-p600 hover:text-white hover:bg-purple-p600',
        ariaLabel: 'Get started with Welcome to Our Creative Universe',
      },
    ],
  },
  {
    title: 'Design Without Boundaries',
    desc: 'Breaking the conventional rules to create extraordinary experiences.',
    imgSrc: '/images/hero/hero-2.jpg',
    imgAlt: 'Abstract design elements floating in space',
    imgW: 1920,
    imgH: 1080,
    buttons: [
      {
        href: '#',
        label: 'Explore',
        variant: 'primary',
        className: 'w-full sm:w-auto',
        ariaLabel: 'Explore Design Without Boundaries',
      },
    ],
  },
  {
    title: 'Innovation at Your Fingertips',
    desc: 'Transforming your vision into reality with cutting-edge technology.',
    imgSrc: '/images/hero/hero-3.jpg',
    imgAlt: 'Futuristic interface with glowing elements',
    imgW: 1920,
    imgH: 1080,
  },
  {
    title: 'Crafting Digital Excellence',
    desc: 'Where every pixel tells a story and every interaction matters.',
    imgSrc: '/images/hero/hero-4.jpg',
    imgAlt: 'Digital art creation in progress',
    imgW: 1920,
    imgH: 1080,
    buttons: [
      {
        href: '#',
        label: 'Learn more',
        variant: 'primary',
        className: 'w-full sm:w-auto',
        ariaLabel: 'Learn more about Crafting Digital Excellence',
      },
      {
        href: '#',
        label: 'Get started',
        variant: '',
        className:
          'w-full sm:w-auto text-purple-p600 bg-white border border-purple-p600 hover:text-white hover:bg-purple-p600',
        ariaLabel: 'Get started with Crafting Digital Excellence',
      },
    ],
  },
  {
    title: 'Beyond the Ordinary',
    desc: 'Creating experiences that leave lasting impressions.',
    imgSrc: '/images/hero/hero-5.jpg',
    imgAlt: 'Surreal digital landscape',
    imgW: 1920,
    imgH: 1080,
  },
  {
    title: 'Your Vision, Our Passion',
    desc: "Let's build something amazing together.",
    imgSrc: '/images/hero/hero-6.jpg',
    imgAlt: 'Collaborative creative environment',
    imgW: 1920,
    imgH: 1080,
    buttons: [
      {
        href: '#',
        label: 'Contact us',
        variant: 'primary',
        className: 'w-full sm:w-auto',
        ariaLabel: 'Contact us about Your Vision, Our Passion',
      },
    ],
  },
];

/**
 * Data for the GallerySlider component
 * Used in: src/components/ui/sliders.js
 */
export const galleryImages = [
  {
    imgSrc: '/images/gallery/gallery-1.jpg',
    imgAlt: 'Abstract geometric patterns in vibrant colors',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-2.jpg',
    imgAlt: 'Minimalist design with bold typography',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-3.jpg',
    imgAlt: '3D rendered architectural visualization',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-4.jpg',
    imgAlt: 'Digital art featuring surreal landscapes',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-5.jpg',
    imgAlt: 'Interactive UI design showcase',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-6.jpg',
    imgAlt: 'Motion graphics animation still',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-7.jpg',
    imgAlt: 'Brand identity design system',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-8.jpg',
    imgAlt: 'Experimental typography design',
    imgW: 1920,
    imgH: 1080,
  },
];

/**
 * Data for the Testimonials component
 * Used in: src/components/ui/sliders.js
 */
export const testimonials = [
  {
    reviewerImgSrc: '/images/testimonials/reviewer-1.jpg',
    reviewerImgAlt: 'Alex Chen profile picture',
    reviewerName: 'Alex Chen',
    reviewerInfo: 'Creative Director, Design Studio X',
    testimonial:
      'Working with this team has been an absolute joy. Their attention to detail and creative approach has transformed our brand identity completely.',
    url: '#',
  },
  {
    reviewerImgSrc: '/images/testimonials/reviewer-2.jpg',
    reviewerImgAlt: 'Maya Patel profile picture',
    reviewerName: 'Maya Patel',
    reviewerInfo: 'UX Lead, Tech Innovations',
    testimonial:
      "The platform's intuitive interface and powerful features have revolutionized how we approach user experience design.",
    url: '#',
  },
  {
    reviewerImgSrc: '/images/testimonials/reviewer-3.jpg',
    reviewerImgAlt: 'Lucas Wright profile picture',
    reviewerName: 'Lucas Wright',
    reviewerInfo: 'Art Director, Creative Collective',
    testimonial:
      'Their innovative solutions and creative thinking have helped us push boundaries and create truly memorable experiences.',
    url: '#',
  },
  {
    reviewerImgSrc: '/images/testimonials/reviewer-4.jpg',
    reviewerImgAlt: 'Sofia Rodriguez profile picture',
    reviewerName: 'Sofia Rodriguez',
    reviewerInfo: 'Brand Strategist, Vision Labs',
    testimonial:
      "The team's dedication to excellence and their ability to understand our vision has made this collaboration incredibly fruitful.",
    url: '#',
  },
  {
    reviewerImgSrc: '/images/testimonials/reviewer-5.jpg',
    reviewerImgAlt: 'James Wilson profile picture',
    reviewerName: 'James Wilson',
    reviewerInfo: 'Product Designer, Future Tech',
    testimonial:
      'Their platform has streamlined our design process and helped us deliver better results faster than ever before.',
    url: '#',
  },
  {
    reviewerImgSrc: '/images/testimonials/reviewer-6.jpg',
    reviewerImgAlt: 'Emma Thompson profile picture',
    reviewerName: 'Emma Thompson',
    reviewerInfo: 'Digital Art Director, Creative Hub',
    testimonial:
      'The combination of powerful features and intuitive design makes this platform a game-changer for creative professionals.',
    url: '#',
  },
];

/**
 * Data for the ControlledSliderWImages component
 * Used in: src/components/ui/sliders.js
 */
export const controlledSliderImages = [
  {
    imgSrc: '/images/gallery/gallery-6.jpg',
    imgAlt: 'Motion graphics animation still',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-2.jpg',
    imgAlt: 'Minimalist design with bold typography',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-3.jpg',
    imgAlt: '3D rendered architectural visualization',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-4.jpg',
    imgAlt: 'Digital art featuring surreal landscapes',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-5.jpg',
    imgAlt: 'Interactive UI design showcase',
    imgW: 1920,
    imgH: 1080,
  },
  {
    imgSrc: '/images/gallery/gallery-6.jpg',
    imgAlt: 'Motion graphics animation still',
    imgW: 1920,
    imgH: 1080,
  },
];
