import CardContainer from "@/app/Components/CardContainer";
import Hero from "@/app/Components/Hero";
import Stats from "@/app/Components/Stats";
import { StatInfo } from "@/app/Components/Stats/StatInfo";
import TextImage from "@/app/Components/TextImage";



export default function CreadoresDeContenido() {

  const testimonials = [
    "MiddleMan Branding ha sido una verdadera bendición para mi negocio. Gracias a su enfoque estratégico y su compromiso con el éxito de sus clientes, he podido aumentar significativamente mi presencia en línea y generar más ventas. ¡Altamente recomendado!",

    "Honestamente nosotros veníamos pagando anuncios en Instagram y nunca vimos un efecto significativo por lo que pagábamos, ahí es cuando probamos con Middleman y si nos dio el empujón que necesitábamos.",

    "Siempre me gustó mucho la moda y hacer contenido de esto, pero pensaba que para poder llegar a ganar plata haciendo esto me faltaba mucho tiempo, pero con middleman pude empezar a monetizar mis view al segundo."
  ];

  return (
    <main className=" max-w-[1500px] mx-auto">
        <Hero 
          bgImage={true}
          title="Eleva tu Marketing: Maximizando Resultados con la Colaboración de Creadores de Contenido"
          text="Nos comprometemos a promover el desarrollo de nuestros clientes y asociados, fomentando resultados concretos en el entorno digital."
        />

        <CardContainer title="Trabajar con nuestros creadores de contenido le genera a tu marca"/>

        <TextImage 
          title="¿Por qué trabajar con creadores de contenido?"
          text="No es ningún secreto que el marketing de creadores de contenido es una de las principales estrategias para impulsar el retorno de la inversión en marketing. Sin embargo, es importante asociarse con personas que se alineen estrechamente con la visión y los valores de su marca ya que la autenticidad es fundamental para el éxito."
          imgSrc="/statsSubiendo.png"
          imgAlt="Persona trabajando en el medio mientras las estadisticas aumentan"
          rowReverse={false}
          bgBlue={false}
        />

        <TextImage 
          title="¿Por qué Middleman?"
          text="Dado que los consumidores confían cada vez más en las recomendaciones de personas reales en lugar del contenido de marcas en las redes sociales, su empresa puede abrirse a audiencias nuevas y ya comprometidas. Nuestra gran cantidad de microinfluencers en casi cualquier sector de nicho imaginable nos convierte en la opción número uno para las marcas que desean
          impulsar su crecimiento online."
          imgSrc="/influencer.png"
          imgAlt="Influencer publicando un post y recibiendo likes y comentarios"
          rowReverse={true}
          bgBlue={true}
        />

        <Stats
        excerpt="¿Cómo lo hacemos?" 
        title="Nuestro Proceso de trabajo" 
        >
          {
                StatInfo.map((stat, index) => (
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
