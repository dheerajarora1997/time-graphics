var app = new Vue({
  el: '#app',
  data: {
    brandName: 'Time Graphics',
    navigation: [{
      navTitle: 'Home',
      isLink: true,
      navLink: '#home'
    }, {
      navTitle: 'About',
      isLink: true,
      navLink: '#about'
    }, {
      navTitle: 'Services',
      isLink: true,
      navLink: '#services'
    }, {
      navTitle: 'Contact',
      isLink: true,
      navLink: '#contact'
    }, {
      navTitle: 'Call Now',
      isLink: false,
      navLink: 'tel:+919034571741'
    }],
    banner: [{
      bannerHeading: 'Time Graphics',
      bannerContent: 'The Perfect Graphics Solution',
      bannerAction: ''
    }],
    aboutSection: [{
      aboutHeading: 'About',
      aboutContent: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    }],
    services: [{
      serviceHeading: 'Catalogue Printing',
    }, {
      serviceHeading: 'Booklet Printing',
    }, {
      serviceHeading: 'Letterhead',
    }, {
      serviceHeading: 'Business Cards',
    }, {
      serviceHeading: 'Wedding Card',
    }, {
      serviceHeading: 'Certificate Printing',
    }, {
      serviceHeading: 'Key Ring Printing',
    }, {
      serviceHeading: 'Dairy Printing',
    }, {
      serviceHeading: 'Docket Folder Printing',
    }, {
      serviceHeading: 'Lanyard Printing',
    }, {
      serviceHeading: 'Notebook Printing',
    }, {
      serviceHeading: 'Office Stationary',
    }, {
      serviceHeading: 'Packing box',
    }, {
      serviceHeading: 'Restaurant Menu Card',
    }, {
      serviceHeading: 'Sandy or Canopy',
    }, {
      serviceHeading: 'Company Branding',
    }, {
      serviceHeading: 'Led Board',
    }, {
      serviceHeading: 'Plastic Token',
    }],
    contacts: [{
      contactNo: '<a href="tel:+919034571741">+91-90345-71741</a>',
      contactEmail: '<a href="mailto:sahilsachdeva2015@gmail.com">sahilsachdeva2015@gmail.com</a>',
      contactAddress: '10/19 , Old Committee, opposite Sheetla Mata Mandir, Main Bazaar, Bahadurgarh, Haryana 124507',
      contactMap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.784381537327!2d76.92973489803363!3d28.698736186531477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xddfe64f689a7a6d0!2sTime%20Graphic!5e0!3m2!1sen!2sin!4v1590490880362!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>',
    }]

  }
})