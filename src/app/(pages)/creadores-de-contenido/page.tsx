import Hero from "@/app/Components/Hero";
import Stats from "@/app/Components/Stats";
import TextIcon from "@/app/Components/TextIcon";
import { StatCreadoresDeContenido, StatCreadoresDeContenidoProps } from "@/app/Components/Stats/StatCreadoresDeContenido"
import TextImage from "@/app/Components/TextImage";


export default function Empresas() {

  const testimonials = [
    "MiddleMan Branding ha sido una verdadera bendición para mi negocio. Gracias a su enfoque estratégico y su compromiso con el éxito de sus clientes, he podido aumentar significativamente mi presencia en línea y generar más ventas. ¡Altamente recomendado!",

    "Honestamente nosotros veníamos pagando anuncios en Instagram y nunca vimos un efecto significativo por lo que pagábamos, ahí es cuando probamos con Middleman y si nos dio el empujón que necesitábamos.",

    "Siempre me gustó mucho la moda y hacer contenido de esto, pero pensaba que para poder llegar a ganar plata haciendo esto me faltaba mucho tiempo, pero con middleman pude empezar a monetizar mis view al segundo."
  ];

  return (
    <main>
        <Hero 
          bgImage={true}
          title="Aprovecha tu Talento: La Plataforma que Potencia tus Ingresos y tu Marca Personal"
          text="Explora una nueva manera de ganar dinero compartiendo el contenido que disfrutas crear"
        />
      
        <TextIcon 
          title="Crea y Gana: La Plataforma Definitiva para Creadores de Contenido"
          subTitle="Una Nueva Forma De Maximizar Tus Ingresos"
        />

        <TextImage 
          title="Potenciando a los pequeños creadores."
          text="En Middleman creemos que los pequeños creadores de contenido en redes también deberían tener la posibilidad de monetizar sus videos. Valoramos enormemente su autenticidad y originalidad, consideramos que estos atributos son los que realmente atraen el interés del público. Desde Middleman queremos brindarles la oportunidad a que puedan obtener un beneficio en base a sus propias creaciones, explotando su potencial e incentivándolos a seguir creciendo."
          bgBlue={true}
          imgSrc="/microInfluencers.png"
          imgAlt="Persona trabajando en el medio mientras las estadisticas aumentan"
          rowReverse={false}
        />

        <TextImage 
          title="¿Cómo monetizan los creadores de contenido?"
          text="El mecanismo es simple, el creador de contenido deberá grabar un video promocionando un emprendimiento que se le será indicado. En este video el creador deberá recomendar el producto a sus seguidores, incluyendo imágenes de el/los producto/s e incitando a sus seguidores a ingresar en la página web del emprendimiento. En base al video, se monitorearán las visitas que este obtenga en un lapso de tiempo definido y, en base a la cantidad de visualizaciones, el creador será remunerado económicamente."
          bgBlue={false}
          imgSrc="/monetizar.png"
          imgAlt="Persona trabajando en el medio mientras las estadisticas aumentan"
          rowReverse={true}
        />

<Stats
        excerpt="¿Cómo lo hacemos?" 
        title="Nuestro Proceso de trabajo" 
        >
          {
            StatCreadoresDeContenido.map((stat: StatCreadoresDeContenidoProps, index: number) => (
              <div data-aos="fade-up" data-aos-delay={stat.aosDelay} className='flex flex-col gap-2' key={index}>
                <h4 className='text-lightBlue font-black text-4xl'>{stat.id}</h4>
                <h2 className='text-4xl font-black'>{stat.titulo}</h2>
                <p className=' text-gray-500/80 '>
                  {stat.texto}
                </p>
              </div>
            ))
          }
        </Stats>
    </main>
  );
}
