import React from 'react';
import '../../../Styles/OpeningPage/OpeningPageStats.css';
import PWLStatsItem from './PWLStatsItem';

function PWLStats() {

  return (
    <div className="pwl-stats-container">
        <PWLStatsItem
            number={1023}
            label={"Customers"}
        />

        <PWLStatsItem
            number={5470}
            label={"Downloads"}
        />

        <PWLStatsItem
            number={3560}
            label={"Satisfied"}
        />
    </div>
  );
}

export default PWLStats;
