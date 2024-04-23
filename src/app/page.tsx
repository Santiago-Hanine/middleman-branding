import Box from "./Components/Box";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import { testimonials } from "./Components/Testimonials/testimonials";

export default function Home() {

  return (
    <main>
        <Hero 
          bgImage={false} 
          title="Maximiza el crecimiento de tu empresa con nuestras innovadoras estrategias de marketing digital"
          text="Nos dedicamos a potenciar el crecimiento de nuestros clientes y colaboradores, impulsando resultados tangibles en el mundo digital."
        />
        <Box eyebrow="Emprendimientos" title="Destaca en el Mundo Digital" description="Te ofrecemos las herramientas y estrategias necesarias para destacar en el mundo digital." link="/empresas">
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
