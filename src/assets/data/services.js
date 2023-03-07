import MenImg from '../../assets/images/pexels-royal-anwar-450212-removebg-preview.png';
import WomenImg from '../../assets/images/2bb0f240-2c86-46e6-bc22-96f4959189b8-removebg-preview.png';
import KidImg from '../../assets/images/pexels-victoria-akvarel-1620769-removebg-preview.png';
import { CiDeliveryTruck } from 'react-icons/ci';
import { RiSecurePaymentLine, RiExchangeDollarLine } from 'react-icons/ri';

export const collectionsData = [
    {
        id : 1,
        img : MenImg,
        title : "Men's",
    },
    {
        id : 2,
        img : WomenImg,
        title : "Woman's",
    },
    {
        id : 3,
        img : KidImg,
        title : "Kid's",
    },
]

export const siteServicesData = [
    {
        icon: <CiDeliveryTruck />,
        title: "Free Shipping",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo felis, consectetur id elit id",
        bg: "#fdefe6",
      },
      {
        icon: <RiSecurePaymentLine />,
        title: "Secure Payment",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo felis, consectetur id elit id",
        bg: "#e2f2b2",
      },
      {
        icon: <RiExchangeDollarLine />,
        title: " Back Guarantee",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo felis, consectetur id elit id",
        bg: "#d6e5fb",
      },
]
