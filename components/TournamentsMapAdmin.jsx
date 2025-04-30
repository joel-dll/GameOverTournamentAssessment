'use client';

import TournamentsMap from './TournamentsMap';
import styles from './TournamentsMapAdmin.module.css';

export default function TournamentsMapAdmin({ tournaments }) {
  return (
    <TournamentsMap
      tournaments={tournaments}
      className={styles.adminMap}
      zoomLevel={4} // zoom level for admin page only not like the user page
    />
  );
}