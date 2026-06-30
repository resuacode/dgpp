import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Material organizado por temas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cada unidad didactica incluye objetivos, contenidos, actividades,
        evaluacion y recursos para facilitar el seguimiento del modulo.
      </>
    ),
  },
  {
    title: 'Enfoque practico y profesional',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        El contenido conecta diseno, gestion, publicacion y produccion con
        flujos reales de desarrollo de videojuegos.
      </>
    ),
  },
  {
    title: 'Actualizacion continua',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        El repositorio esta preparado para publicar cambios en GitHub Pages y
        mantener el material siempre accesible para el alumnado.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
