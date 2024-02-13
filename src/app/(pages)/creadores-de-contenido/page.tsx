import Hero from "@/app/Components/Hero";


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
      
        
    </main>
  );
}
