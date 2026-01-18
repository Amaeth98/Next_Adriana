import Image from "next/image";
import { notFound } from "next/navigation";

const data: Record<
  string,
  Record<
    string,
    {
      titulo: string;
      texto: string;
    }
  >
> = {
  noticias: {
    ultimas: {
      titulo: "Últimas noticias",
      texto:
        "Novedades del centro, comunicados oficiales y noticias de interés.",
    },
    becas: {
      titulo: "Becas y ayudas",
      texto:
        "Información sobre becas, convocatorias y ayudas disponibles para el alumnado.",
    },
    actividades: {
      titulo: "Actividades del centro",
      texto:
        "Excursiones, jornadas culturales y actividades organizadas durante el curso.",
    },
    eventos: {
      titulo: "Eventos",
      texto:
        "Eventos y celebraciones importantes que se realizan a lo largo del curso.",
    },
    calendario: {
      titulo: "Calendario escolar",
      texto:
        "Fechas importantes: evaluaciones, vacaciones y días no lectivos.",
    },
    proyectos: {
      titulo: "Proyectos del centro",
      texto:
        "Proyectos educativos, planes y programas en los que participa el instituto.",
    },
    avisos: {
      titulo: "Avisos",
      texto:
        "Avisos urgentes y comunicaciones rápidas para familias y alumnado.",
    },
  },

  "oferta-educativa": {
    eso: {
      titulo: "Educación Secundaria Obligatoria (ESO)",
      texto:
        "Etapa educativa obligatoria que proporciona una formación integral al alumnado.",
    },
    bachillerato: {
      titulo: "Bachillerato",
      texto:
        "Modalidades de bachillerato y preparación para estudios superiores.",
    },
    fp: {
      titulo: "Formación Profesional",
      texto:
        "Ciclos formativos orientados a la inserción laboral y desarrollo profesional.",
    },
  },

  biblioteca: {
    biblioweb: {
      titulo: "Biblioweb Séneca",
      texto:
        "Plataforma digital de la biblioteca escolar con recursos y catálogo.",
    },
    recomendaciones: {
      titulo: "Recomendaciones de lectura",
      texto:
        "Libros recomendados por el profesorado y el alumnado del centro.",
    },
    normas: {
      titulo: "Normas de la biblioteca",
      texto:
        "Normas de uso y funcionamiento de la biblioteca escolar.",
    },
    horarios: {
      titulo: "Horario de la biblioteca",
      texto:
        "Horarios de apertura y servicio de la biblioteca del centro.",
    },
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ seccion: string; slug: string }>;
}) {

  const { seccion, slug } = await params;

  const seccionKey = seccion.toLowerCase();
  const slugKey = slug.toLowerCase();

  const contenido = data[seccionKey]?.[slugKey];
  if (!contenido) return notFound();

  return (
    <div>
      <h2 className="mb-3">{contenido.titulo}</h2>

      <div className="p-4 rounded" style={{ background: "#f7e1c0" }}>
        <p>{contenido.texto}</p>
      </div>
    </div>
  );
}
