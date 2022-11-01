import {
  FaHome,
  FaEnvelope,
  FaRegAddressBook,
  FaRegSun,
  FaInstagramSquare,
  FaFacebook,
  FaTwitterSquare,
} from 'react-icons/fa'

// ========Nav Bar=========== //

export const navbar = [
  { id: 1, path: '/', title: 'Home', icon: <FaHome /> },
  { id: 2, path: '/about', title: 'About', icon: <FaEnvelope /> },
  { id: 3, path: '/contact', title: 'Contact', icon: <FaRegAddressBook /> },
  { id: 4, path: '/product', title: 'Services', icon: <FaRegSun /> },
]

// ==========Landing Page=============//
export const landingPage = {
  heading: 'Website development solutions',
  paragraph:
    'We provide digital solutions to all businesses, from Software Development to deployment or design to hosting we cover your back.',
  path: '/product',
  buttonTitle: 'Services',
  image:
    'https://res.cloudinary.com/inam6530/image/upload/v1667050849/inamwebsolutions/Untitled_design_3_aquzmj.svg',
}
// ========Landing Page Two=========//
export const landingPageTwo = {
  heading: 'Host Website With Us',
  paragraph:
    'Time to upgrade your business? Let us help you say goodbye to the old server and move to the digital cloud database.',
  path: '/product/2',
  buttonTitle: 'Hosting Solutions',
  image:
    'https://res.cloudinary.com/inam6530/image/upload/v1667232614/inamwebsolutions/Untitled_design_qqnc8j.svg',
}
// ================About Page================
export const aboutHeading = {
  title: 'Meet Our Team Members',
  paragraph:
    'We have very hardworking and dedicated team members, teamwork play a huge role in a project and outcomes shine when it comes to good understanding.',
}

// ==========Team Members=========
export const teamMembers = [
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1667047659/inamwebsolutions/Untitled_design_1_zufr0r.svg',
    titleName: 'Sania Rehman',
    titleJob: 'Marketing Manager',
    description: `Sania writes content for business and also take care of digital marketing campaigns.`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666904764/inamwebsolutions/Untitled_design_1_wwzfww.png',
    titleName: 'Inam Rehman',
    titleJob: 'Software engineer',
    description: `Inam creates Digital Solutions for your business and helps you launch your product all over the internet.`,
  },
  {
    img: 'https://res.cloudinary.com/inam6530/image/upload/v1666886063/inamwebsolutions/Untitled_design_qj4p3g.png',
    titleName: 'George Bush',
    titleJob: 'Software engineer',
    description: `George is a coding addict most of the time he fixes bugs and searching new technologies.`,
  },
]
// ===========footer //============
// ===== Data for Address =====
export const address = [
  {
    id: 1,
    title: 'Address',
    titleInfo: 'https://www.google.com/maps/@43.4450731,-80.4859129,17z',
    titleText: '86 Cedar Street,Kitchener, ON,  N2G 3L8',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    id: 2,
    title: 'Mobile Number',
    titleInfo: 'tel:4165606790',
    titleText: '4165606790',
  },
  {
    id: 3,
    title: 'Landline',
    titleInfo: 'tel:4165606790',
    titleText: '4165606790',
  },
  {
    id: 4,
    title: 'Email',
    titleInfo: 'mailto:Support@inamwebsolutions.com',
    titleText: 'Support@inamwebsolutions.com',
  },
]
// ======Data for SocialIcons=====Start
export const socialIcons = [
  {
    id: 1,
    path: 'https://www.facebook.com/profile.php?id=100086764830998',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaFacebook />,
    title: 'Facebook',
  },
  {
    id: 2,
    path: 'https://Twitter.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaTwitterSquare />,
    title: 'Twitter',
  },
  {
    id: 5,
    path: 'https://www.instagram.com/inamwebsolutions/',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaInstagramSquare />,
    title: 'Instagram',
  },
]
// ======== data for google maps==========

export const googleMapsData = { lat: 43.4450848, lng: -80.48596 }

// =========Services============//
export const services = [
  {
    id: 1,
    title: 'Design Websites',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666983035/inamwebsolutions/Untitled_design_3_v7fddf.png',
    heading: 'How to design a website?',
    description: `Before you design a website, be crystal-clear about what you want to achieve. With so many types of websites out there, you should start by deciding which kind will help you meet your goals.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        title: 'Set your goal',
        text: 'Once you decide which type you need, it’s time to start the exciting part - designing your site. As you set off on this journey, keep your overarching purpose in mind and think about how the design will help achieve your objectives.  ',
      },
      {
        id: 2,
        title: 'Define your layout',
        text: 'you may want to map out your website’s design on paper before you start to drag and drop. However, another option is to use a template, which is a pre-designed layout created by a professional designer. ',
      },
      {
        id: 3,
        title: 'Claim your domain',
        text: `To put it in simple terms, your domain name is your address on the internet. It’s what your visitors will see in the bar of their browser, right after the “www.yourName.com”`,
      },
      {
        id: 4,
        title: 'Professional solutions',
        text: 'Because your website is the hub of your online life, We puts all of the professional solutions you need in one place',
      },
      {
        id: 5,
        title: 'Gather your content',
        text: 'Now that you’ve set the foundations for your design,  it’s time to get practical and prepare the content that will be featured on your website. This includes your images, text, logo, videos, and more.',
      },
    ],
  },
  {
    id: 2,
    title: 'Hosting Services',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666983031/inamwebsolutions/Untitled_design_2_uw6iu1.png',
    heading: 'What is Web Hosting?',
    description: `Web hosting is a service that makes your website visible on the Internet. We provides secure and free web hosting, allowing you to focus on the important stuff—like building your own beautiful website..`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        title: 'Advanced Security Monitoring',
        text: 'All data on your sites is secure and compliant with the highest international standards.We take care of your security.',
      },
      {
        id: 2,
        title: 'Automatic Setup',
        text: 'Your free website hosting is automatically set up once you’ve published your website. No installation needed.',
      },
      {
        id: 3,
        title: '99.9% Up time',
        text: 'Enjoy enterprise-grade reliability so your website is always up and running on our secure and stable networks.',
      },
      {
        id: 4,
        title: 'Scale able hosting',
        text: 'Scale Your Hosting As Your Business Grows.With a Premium Plan, you can get up to 50GB of cloud storage and unlimited bandwidth for your website.',
      },
    ],
  },
  {
    id: 3,
    title: 'Mobile Apps',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666991395/inamwebsolutions/Untitled_design_1_unvwrk.svg',
    heading: 'Mobile App version of your Website',
    description: `Your website should look great and function properly on different screen sizes as well as be compatible with a range of web browsers. There are so many ways for people to browse these days, and you don’t want to leave anyone out.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        title: 'Mobile and tablets Browsers',
        text: 'The navigation resizes as needed for different devices, from desktop computers to tablets and mobile phones.',
      },
      {
        id: 2,
        title: 'Pixel quality in different Devices',
        text: 'Text and images automatically reformat and resize to be readable and spaced correctly. (Which is why you also aren’t using text on top of images, right?)',
      },
      {
        id: 3,
        title: 'Google Search Engine',
        text: 'Search engines like Google give your mobile site high marks, ensuring that your pages show up in search results.',
      },
    ],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666991811/inamwebsolutions/Untitled_design_maznza.svg',
    heading: 'Digital Marketing is key to success.',
    description: `You should build a website to benefit your users, and gear any optimization toward making the user experience better. One of those users is a search engine, which helps other users discover your content.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        title: 'Help Google find your content',
        text: 'The first step to getting your site on Google is to be sure that Google can find it. The best way to do that is to submit a sitemap. A sitemap is a file on your site that tells search engines about new or changed pages on your site',
      },
      {
        id: 2,
        title: 'Key word search',
        text: 'Before we can help a business grow through search engine optimization, we first have to understand who they are, who their customers are, and their goals.',
      },
      {
        id: 3,
        title: 'Email marketing campaigns ',
        text: 'The goal of an email campaign is to entice the recipients to purchase a product or service or to learn more about the business.',
      },
      {
        id: 1,
        title: 'Mobile text alerts',
        text: 'Mobile Text Alerts allows you to send mass texts to your customers & employees with no hassle.For example reset passwords,promotions...',
      },
    ],
  },
  {
    id: 5,
    title: 'Business Solutions',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666990217/inamwebsolutions/Untitled_design_3_iu3ll4.svg',
    heading: 'Every business is different!',
    description: `Key areas of your business with digital solutions, you can create an efficient workflow that enhances productivity, increases employee engagement, and improves workplace satisfaction.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        title: 'Project Management',
        text: 'Businesses, especially those using a remote workforce, or any that require collaboration across multiple teams and departments need help tracking projects and goals.',
      },
      {
        id: 1,
        title: 'Human Resources Management Software',
        text: 'When a small business is just getting started, it’s likely there won’t be a full human resources team. That’s where HR management software can help. It can do everything from scheduling employees shifts to sending out company announcements to collect bank information for direct deposit.',
      },
      {
        id: 1,
        title: 'Procurement Software',
        text: 'you need a place to keep track of all your purchases, invoices, and payments. Bringing your procurement into the digital world is easy, too. ',
      },
    ],
  },
  {
    id: 6,
    title: 'E-commerce Project',
    image:
      'https://res.cloudinary.com/inam6530/image/upload/v1666992365/inamwebsolutions/Untitled_design_i7xgii.svg',
    heading: 'what is E-commerce?',
    description: `E-commerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.`,
    imageTwo:
      'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg',
    points: [
      {
        id: 1,
        title: ' Business to Consumer',
        text: 'When a business sells a good or service to an individual consumer (e.g. You buy a pair of shoes from an online retailer).',
      },
      {
        id: 2,
        title: ' Business to Business',
        text: 'When a business sells a good or service to another business (e.g. A business sells software-as-a-service for other businesses to use).',
      },
      {
        id: 3,
        title: 'Consumer to Consumer',
        text: 'When a consumer sells a good or service to another consumer (e.g. You sell your old furniture on eBay to another consumer).',
      },
      {
        id: 4,
        title: 'Consumer to Business',
        text: 'When a consumer sells their own products or services to a business or organization (e.g. An influencer offers exposure to their online audience in exchange for a fee, or a photographer licenses their photo for a business to use).',
      },
    ],
  },
]
