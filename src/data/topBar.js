import rightArrow from '../assets/icons/icon-red-right-arrow.svg'

export const topBar = {
  logo: require("../assets/logo.png"),
  alt: "Logo",
  links: [
    {
      name: "Home.",
      link: "/"
    },
    {
      name: "About us.",
      link: "/about"
    },
    {
      name: "Portfolio.",
      link: "/portfolio"
    },
    {
      name: "Blog.",
      link: "/contact"
    },
    {
      name: "Services.",
      link: "/services"
    },
    {
      name: "Contact us.",
      link: "/contact"
    },
  ],
  languages: ['EN', 'TR'],
  button: 
    {
      text: "Contact Us ",
      icon: rightArrow,
      alt: "Right arrow",
    }
}