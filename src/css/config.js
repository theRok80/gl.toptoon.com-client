// @media (min-width: 768px) and (max-width: 1023px) {
// @media (min-width:0) and (max-width:767px) {
//   @media (max-width:320px) {
//   }
// }

const deviceSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet : '768px',
  laptop : '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};


export const mediaQuery = {
  tablet : `@media (min-width: 768px) and (max-width: 1023px)`,
  mobile : `@media (min-width:0) and (max-width: 767px)`,
  mobileS: `@media (max-width: 320px)`
};
