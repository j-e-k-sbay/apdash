import React from 'react';
import '../../../Styles/OpeningPage/OpeningPageStats.css';
import OpeningPageStatsItem from './OpeningPageStatsItem';

function OpeningPageStats() {
  return (
    <div className="op-stats-container">
        <OpeningPageStatsItem
            number={672.086}
            label={"Total Install"}
        />

        <OpeningPageStatsItem
            number={143.870}
            label={"Total Download"}
        />

        <OpeningPageStatsItem
            number={31.191}
            label={"Active Users"}
        />
    </div>
  );
}

export default OpeningPageStats;
