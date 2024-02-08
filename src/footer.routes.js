import logoCT from "assets/images/logo-ct-dark.png";

export default {
  brand: {
    name: "Soirée pote jojo",
    image: logoCT,
    route: "/",
  },
  menus: [
    {
      name: "Présentation",
      items: [{ name: "Présentation", href: "/Home" }],
    },
    {
      name: "Réserver",
      items: [
        { name: "Chambre - 1ᵉʳ étage", href: "/pages/landing-pages/about-us" },
        { name: "Chambre - 2ᵉᵐᵉ étage", href: "/pages/landing-pages/contact-us" },
        { name: "Tente - champs", href: "/pages/authentication/sign-in" },
      ],
    },
  ],
};
