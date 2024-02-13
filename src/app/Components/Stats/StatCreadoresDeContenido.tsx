export interface StatCreadoresDeContenidoProps {
    id: string;
    titulo: string;
    texto: string;
    aosDelay: number;
}

export const StatCreadoresDeContenido = [
    {
        id: "01",
        titulo: "Selección.",
        texto: "Seguiremos atentamente el contenido habitual del creador de contenido seleccionado, en base a este, seleccionaremos un emprendimiento que sea acorde a su público.",
        aosDelay: 100
    },
    {
        id: "02",
        titulo: "Promoción.",
        texto: "El creador de contenido deberá subir un video promocionando el emprendimiento que se le fue seleccionado. En este, el creador recomendará la marca y buscará generarle la mayor exposición, recalcando sus aspectos positivos.",
        aosDelay: 300
    },
    {
        id: "03",
        titulo: "Monitoreo.",
        texto: "Nos encargaremos de monitorear la cantidad de visitas e interacciones que el video obtenga en los primeros 14 días.",
        aosDelay: 500
    },
    {
        id: "04",
        titulo: "Compensación.",
        texto: "Se compensará en base a la cantidad de visualizaciones que haya obtenido el video del creador. Se pagarán $1000 (mil pesos) por cada 4000 visualizaciones en los primeros 14 días, o hasta las 50.000 visualizaciones, lo que ocurra primero",
        aosDelay: 700
    },
]