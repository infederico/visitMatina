import style from './Shops.module.css';
import Shop from './cardShop/Shop';

const tiendas = [

    { id: 1, name: 'Hospedaje Claro de Luna', 
      description: 'Somos un pequeño hospedaje familiar ubicado en una zona residencial tranquila. Ofrecemos habitaciones cómodas y equipadas con aire acondicionado, baño privado y televisión por cable. También ofrecemos Wi-Fi gratis y servicio de limpieza diario. Nuestra familia estará encantada de ayudarle con recomendaciones locales y consejos para disfrutar al máximo de su estancia. Disfrute de nuestro delicioso desayuno casero y nuestra zona de descanso al aire libre. ¡Esperamos darle la bienvenida en Claro de Luna!',
      image: 'https://www.hotelescolombia.co/wp-content/uploads/2020/06/ENTRE-BOSQUES-ARVI-MEDELLIN-HOTEL-CAMPESTRE-0025-HOTELESCOLOMBIA.CO_-768x552.jpg'
    },

    { id: 2, name: 'Restaurante Sol y Luna', 
      description: '¡Bienvenidos a Sol y Luna, un restaurante donde la deliciosa comida se combina con una hermosa vista del mar! Nuestro restaurante ofrece una amplia variedad de platos elaborados con ingredientes frescos y de alta calidad, todos cuidadosamente preparados por nuestro chef especializado en cocina internacional. Además, ofrecemos opciones vegetarianas y veganas.', 
      image: 'https://www.hotelescolombia.co/wp-content/uploads/2020/06/ENTRE-BOSQUES-ARVI-MEDELLIN-HOTEL-CAMPESTRE-0025-HOTELESCOLOMBIA.CO_-768x552.jpg' 
    },

    { id: 3, name: 'Aventuras del Caribe', 
      description: 'Aventuras del Caribe es un negocio de turismo familiar enfocado en la sostenibilidad y regeneración de los recursos naturales, que brinda tours acuáticos para avistamiento de flora y fauna en los canales que van hacia Tortuguero para fomentar la protección de las especies autóctonas de la zona, contamos con servicio de alimentación y estadía donde el turista y visitante se siente inmerso en la naturaleza. CONOCE NUESTRA TIENDA DE ARTESANIAS ',
      image: 'https://www.hotelescolombia.co/wp-content/uploads/2020/06/ENTRE-BOSQUES-ARVI-MEDELLIN-HOTEL-CAMPESTRE-0025-HOTELESCOLOMBIA.CO_-768x552.jpg' 
    },
    { id: 4, name: 'Finca Santuario Jardin Mandira',
      description: 'La Finca Santuario Jardin Mandira de Matina es un espacio de encuentro y convivencia para la comunidad, donde se promueve la cultura y el arte, se realizan eventos culturales y se ofrecen talleres de formación artística. La Finca Santuario Jardin Mandira de Matina es un espacio de encuentro y convivencia para la comunidad, donde se promueve la cultura y el arte, se realizan eventos culturales y se ofrecen talleres de formación artística.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_703774-MCO48687574574_122021-O.jpg'
    },
    { id:5 , name: 'Finca integral La Parcela',
      description: 'La Finca Integral La Parcela es un espacio de encuentro y convivencia para la comunidad, donde se promueve la cultura y el arte, se realizan eventos culturales y se ofrecen talleres de formación artística. La Finca Integral La Parcela es un espacio de encuentro y convivencia para la comunidad, donde se promueve la cultura y el arte, se realizan eventos culturales y se ofrecen talleres de formación artística.',
      image: 'https://www.hotelescolombia.co/wp-content/uploads/2020/06/ENTRE-BOSQUES-ARVI-MEDELLIN-HOTEL-CAMPESTRE-0025-HOTELESCOLOMBIA.CO_-768x552.jpg'
      },
]



const Shops = (props) => {
  const { shops } = props;
  return (
    <div className={style.page}>
        <h1 className={style.title}>SHOPS</h1>
      {tiendas.map((tienda) => (
        <Shop key={tienda.id} {...tienda} />
      ))}
        <h1 className={style.title}>Visit Matina</h1>
    </div>
  );
}

export default Shops;