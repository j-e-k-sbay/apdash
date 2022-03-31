import React from 'react';
import '../../Styles/OpeningPage/OpeningPageTextSide.css';
import OpeningPageHeader from './OpeningPageHeader';
import OpeningPageParagraph from './OpeningPageParagraph';
import OpeningPageButtons from './OpeningPageButtons';
import OpeningPageStats from './OpeningPageStats/OpeningPageStats';

function OpeningPageTextSide() {
  return (
    <div className="op-textside">
        <OpeningPageHeader>Best Way to Connect with Customers</OpeningPageHeader>
        <OpeningPageParagraph>
            Holisticly procrastinate mission-critical convergence with reliable customer service. 
            Assertively underwhelm idea-sharing for impactful solutions.
        </OpeningPageParagraph>
        <OpeningPageButtons/>
        <OpeningPageStats/>
    </div>
  );
}

export default OpeningPageTextSide;
