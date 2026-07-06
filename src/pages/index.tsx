import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

type Tema = {
  numero: string;
  titulo: string;
  descripcion: string;
  to: string;
};

const temario: Tema[] = [
  {
    numero: '01',
    titulo: 'Industria e historia',
    descripcion: 'De dónde viene el videojuego, géneros y perfiles de jugador.',
    to: '/docs/tema-01/tema-01-introduccion-industria',
  },
  {
    numero: '02',
    titulo: 'Game Design (GDD)',
    descripcion: 'High concept, x-features, core loop y GDD vivo.',
    to: '/docs/tema-02/tema-02-game-design-fundacional',
  },
  {
    numero: '03',
    titulo: 'Producción ágil',
    descripcion: 'Scrum y Kanban, rol del productor y control de alcance.',
    to: '/docs/tema-03/tema-03-metodologias-agiles-produccion',
  },
  {
    numero: '04',
    titulo: 'QA, UX y playtesting',
    descripcion: 'Planes de prueba, test cases y análisis de feedback.',
    to: '/docs/tema-04/tema-04-qa-ux-playtesting',
  },
  {
    numero: '05',
    titulo: 'Diseño 3D y VR',
    descripcion: 'Escalado a 3D, level design y editor scripting.',
    to: '/docs/tema-05/tema-05-escalado-3d-y-vr',
  },
  {
    numero: '06',
    titulo: 'Negocio y monetización',
    descripcion: 'Modelos de negocio, diseño ético y patrones oscuros.',
    to: '/docs/tema-06/tema-06-modelos-negocio-monetizacion',
  },
  {
    numero: '07',
    titulo: 'Distribución y marketing',
    descripcion: 'Marco legal, propiedad intelectual, PEGI y press kit.',
    to: '/docs/tema-07/tema-07-distribucion-marketing-marco-legal',
  },
  {
    numero: '08',
    titulo: 'Portfolio y lanzamiento',
    descripcion: 'Portfolio profesional, trailer, pitching y defensa.',
    to: '/docs/tema-08/tema-08-portfolio-lanzamiento-multimedia',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <span className={styles.eyebrow}>Curso de Especialización FP</span>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
          <span className={styles.heroTitleAccent}>
            Diseña, produce y lanza videojuegos
          </span>
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.buttonPrimary} to="/docs/introduccion">
            Comenzar el módulo
          </Link>
          <Link className={styles.buttonGhost} to="/docs/guia/gdd-transversal">
            Ver GDD transversal
          </Link>
        </div>
        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt>8</dt>
            <dd>temas</dd>
          </div>
          <div className={styles.stat}>
            <dt>3</dt>
            <dd>fases de proyecto</dd>
          </div>
          <div className={styles.stat}>
            <dt>2D → 3D/VR</dt>
            <dd>progresión técnica</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

function TemarioSection() {
  return (
    <section className={styles.temario}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.sectionKicker}>Ruta de aprendizaje</span>
          <Heading as="h2" className={styles.sectionTitle}>
            El módulo, tema a tema
          </Heading>
          <p className={styles.sectionLead}>
            Ocho unidades que avanzan desde los fundamentos de la industria hasta
            el lanzamiento y la defensa de tu proyecto.
          </p>
        </div>
        <div className={styles.temarioGrid}>
          {temario.map((tema) => (
            <Link key={tema.numero} to={tema.to} className={styles.temaCard}>
              <span className={styles.temaNumero}>{tema.numero}</span>
              <div className={styles.temaBody}>
                <Heading as="h3" className={styles.temaTitulo}>
                  {tema.titulo}
                </Heading>
                <p className={styles.temaDescripcion}>{tema.descripcion}</p>
              </div>
              <span className={styles.temaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio | ${siteConfig.title}`}
      description="Portal de material docente del módulo DGPP del curso de especialización FP.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TemarioSection />
      </main>
    </Layout>
  );
}
