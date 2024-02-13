import Box from "@/app/Components/Box";
import Card from "@/app/Components/Card";
import Hero from "@/app/Components/Hero";
import Testimonials from "@/app/Components/Testimonials";


export default function Empresas() {

  const testimonials = [
    "MiddleMan Branding ha sido una verdadera bendición para mi negocio. Gracias a su enfoque estratégico y su compromiso con el éxito de sus clientes, he podido aumentar significativamente mi presencia en línea y generar más ventas. ¡Altamente recomendado!",

    "Honestamente nosotros veníamos pagando anuncios en Instagram y nunca vimos un efecto significativo por lo que pagábamos, ahí es cuando probamos con Middleman y si nos dio el empujón que necesitábamos.",

    "Siempre me gustó mucho la moda y hacer contenido de esto, pero pensaba que para poder llegar a ganar plata haciendo esto me faltaba mucho tiempo, pero con middleman pude empezar a monetizar mis view al segundo."
  ];

  return (
    <main className=" max-w-[1500px] mx-auto">
        <Hero 
          bgImage={true}
          title="Aprovecha tu Talento: La Plataforma que Potencia tus Ingresos y tu Marca Personal"
          text="Explora una nueva manera de ganar dinero compartiendo el contenido que disfrutas crear"
        />
      
        <Box eyebrow="Emprendimientos" title="Destaca en el Mundo Digital" description="Te ofrecemos las herramientas y estrategias necesarias para destacar en el mundo digital." link="/emprendimientos">
            <Card aosDuration={400} img='/safety.png' title='Autenticidad y credibilidad'/>
            <Card aosDuration={600} img='/chart.png' title='Aumento de exposición'/>
            <Card aosDuration={800} img='/heart.png' title='Potencial Viral'/>
            <Card aosDuration={1000} img='/megaphone.png' title='Promociones orgánicas'/>
        </Box>

        <Box rowReverse={true} eyebrow="Creadores de Contenido" title="Impulsa tu presencia" description="Te ofrecemos la oportunidad de monetizar tus visualizaciones y aumentar tu visibilidad ante las marcas." link="/creadores-de-contenido">
            <Card aosDuration={400} img='/money.png' title='Monetizá'/>
            <Card aosDuration={600} img='/eye.png' title='Mayor visibilidad'/>
            <Card aosDuration={800} img='/clock.png' title='Libérate de la búsqueda de marcas'/>
            <Card aosDuration={1000} img='/checklist.png' title='Tareas simples, resultados significativos'/>
        </Box>
        
        <Testimonials testimonials={testimonials}/>
    </main>
  );
}
