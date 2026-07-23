// data/navigation.js

export const navItems = [
  // 1. HOME
  { name: 'HOME', href: '/' },

  // 2. Technologies
  {
    name: 'Technologies',
    href: '/technologies',
    categories: [
      { name: 'Industrial Automation', slug: 'industrial-automation' },
      { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
      { name: 'Embedded Systems & Electronics', slug: 'embedded-systems-electronics' },
      { name: 'Industrial Software', slug: 'industrial-software' },
      { name: 'Robotics', slug: 'robotics' },
    ],
  },

  // 3. Products
  {
    name: 'Products',
    href: '/products',
    categories: [
      { name: 'Software Products', slug: 'software-products' },
      { name: 'Automation Products', slug: 'automation-products' },
      { name: 'Embedded Products', slug: 'embedded-products' },
      { name: 'Robotics Products', slug: 'robotics-products' },
      { name: 'AI Products', slug: 'ai-products' },
      { name: 'Product Status', slug: 'product-status' },
    ],
  },

  // 4. Research
  {
    name: 'Research',
    href: '/research',
    categories: [
      { name: 'Research Areas', slug: 'research-areas' },
      { name: 'Research Page Sections', slug: 'research-page-sections' },
    ],
  },

  // 5. Development
  {
    name: 'Development',
    href: '/development',
    categories: [
      { name: 'Development Areas', slug: 'development-areas' },
      { name: 'Product Development Process', slug: 'product-development-process' },
    ],
  },

  // 6. Innovation
  {
    name: 'Innovation',
    href: '/innovation',
    categories: [
      { name: 'Innovation Lab', slug: 'innovation-lab' },
    ],
  },

  // 7. Projects
  {
    name: 'Projects',
    href: '/projects',
    categories: [
      { name: 'Project Categories', slug: 'project-categories' },
      { name: 'Example Projects', slug: 'example-projects' },
      { name: 'Project Role Display', slug: 'project-role-display' },
    ],
  },

  // 8. Industries
  {
    name: 'Industries',
    href: '/industries',
    categories: [
      { name: 'Industries', slug: 'industries-list' },
    ],
  },

  // 9. Company
  {
    name: 'Company',
    href: '/company',
    categories: [
      { name: 'About Us', slug: 'about-us' },
      { name: 'Company Profile', slug: 'company-profile' },
    ],
  },

  // 10. CAREER
  {
    name: 'CAREER',
    href: '/career',
    categories: [
      { name: 'Job Openings', slug: 'job-openings' },
      { name: 'Life at Company', slug: 'life-at-company' },
    ],
  },

  // 11. Contact
  { name: 'Contact', href: '/contact' },
];