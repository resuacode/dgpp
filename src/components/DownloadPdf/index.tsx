import React, {type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
  /** Numero de tema con dos digitos, p. ej. "01". */
  tema: string;
  /** Texto opcional del boton. */
  label?: string;
}

export default function DownloadPdf({tema, label}: Props): ReactNode {
  const href = useBaseUrl(`/pdf/tema-${tema}.pdf`);
  return (
    <div className={clsx(styles.wrapper, 'theme-pdf-download')}>
      <a className={clsx('button button--primary button--lg', styles.button)} href={href} download>
        <svg
          className={styles.icon}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {label ?? `Descargar el Tema ${tema} en PDF`}
      </a>
      <span className={styles.hint}>
        Incluye solo el contenido visible del tema y se actualiza en cada publicación.
      </span>
    </div>
  );
}
