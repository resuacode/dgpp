import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const IconLayers = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3 3 8l9 5 9-5-9-5Z" strokeLinejoin="round" />
    <path d="m3 12 9 5 9-5" strokeLinejoin="round" />
    <path d="m3 16 9 5 9-5" strokeLinejoin="round" />
  </svg>
);

const IconGamepad = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 8h10a5 5 0 0 1 5 5v1a3 3 0 0 1-5.2 2L15 15H9l-1.8 1A3 3 0 0 1 2 14v-1a5 5 0 0 1 5-5Z" strokeLinejoin="round" />
    <path d="M7 11v3M5.5 12.5h3M15.5 11.5h.01M18 13.5h.01" strokeLinecap="round" />
  </svg>
);

const IconRocket = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.6-2.2-.2-3-.8-.8-2.1-.9-2.8-.2Z" strokeLinejoin="round" />
    <path d="M9 12a15 15 0 0 1 8-9c2.5 0 4 1.5 4 4a15 15 0 0 1-9 8l-3-3Z" strokeLinejoin="round" />
    <circle cx="15" cy="9" r="1.4" />
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Material organizado por temas',
    icon: IconLayers,
    description: (
      <>
        Cada unidad incluye objetivos, contenidos, actividades, evaluación y
        recursos para seguir el módulo con una estructura clara.
      </>
    ),
  },
  {
    title: 'Enfoque práctico y profesional',
    icon: IconGamepad,
    description: (
      <>
        El contenido conecta diseño, gestión, publicación y producción con flujos
        reales de desarrollo de videojuegos.
      </>
    ),
  },
  {
    title: 'Del prototipo al lanzamiento',
    icon: IconRocket,
    description: (
      <>
        El itinerario avanza del 2D al 3D/VR y culmina con portfolio, trailer y
        defensa del proyecto ante un tribunal.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={styles.card}>
      <span className={styles.iconWrap} aria-hidden="true">
        {icon}
      </span>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
