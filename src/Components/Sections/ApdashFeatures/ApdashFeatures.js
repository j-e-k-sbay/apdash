import "../../../Styles/Sections/ApdashFeatures/ApdashFeatures.css"
import WhitePage from "../../WhitePage";
import DarkHeader from "../../Fonts/DarkHeader";
import DarkParagraph from "../../Fonts/DarkParagraph";
import DarkSmallParagraph from "../../Fonts/DarkSmallParagraph";
import DarkTitle from "../../Fonts/DarkTitle";
import AFElement from "../ApdashFeatures/AFElement"
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'

function ApdashFeatures(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth <= 767.98;
    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    return(
        <WhitePage>
            <div className="af-header-container">
                <DarkHeader>
                    Apdash Features
                </DarkHeader>
                <DarkParagraph>
                    Objectively deliver professional value with diverse web-readiness. 
                    Collaboratively transition wireless customer service without goal-oriented catalysts for change. 
                    Collaboratively.
                </DarkParagraph>
            </div>
            <div className="af-container">
                <div className="af-part-container">
                    <AFElement icon={faFaceSmile}>
                        <DarkTitle>Responsive web design</DarkTitle>
                        <DarkSmallParagraph>
                            Modular and monetize an componente between layouts 
                            monetize array. Core competencies for testing.
                        </DarkSmallParagraph>
                    </AFElement>
                    <AFElement icon={faBezierCurve}>
                        <DarkTitle>Loaded with features</DarkTitle>
                        <DarkSmallParagraph>
                            Holisticly aggregate client centered the manufactured products transparent. 
                            Organic sources content.
                        </DarkSmallParagraph>
                    </AFElement>
                    <AFElement icon={faHeadset}>
                        <DarkTitle>Friendly online support</DarkTitle>
                        <DarkSmallParagraph>
                            Monotonectally recaptiualize client the centric customize clicks niche markets 
                            for this meta-services via.
                        </DarkSmallParagraph>
                    </AFElement>
                </div>
                {!isMobile ? 
                    <div className="af-part-container">
                        <img className="af-img" src="/Images/app-mobile-image.png" alt="" />
                    </div>:<></>
                }
                
                <div className="af-part-container">
                    <AFElement icon={faList}>
                        <DarkTitle>Free updates forever</DarkTitle>
                        <DarkSmallParagraph>
                            Compellingly formulate installed base imperatives high standards 
                            in benefits for highly efficient client.
                        </DarkSmallParagraph>
                    </AFElement>
                    <AFElement icon={faRectangleList}>
                        <DarkTitle>Built with Sass</DarkTitle>
                        <DarkSmallParagraph>
                            Energistically initiate client-centric the maximize market positioning 
                            synergy rather client-based data.
                        </DarkSmallParagraph>
                    </AFElement>
                    <AFElement icon={faPalette}>
                        <DarkTitle>Infinite colors</DarkTitle>
                        <DarkSmallParagraph>
                            Energistically initiate client-centric e-tailers rather than-based data. 
                            Morph business technology before.
                        </DarkSmallParagraph>
                    </AFElement>
                </div>
            </div>
        </WhitePage>
    );
}

export default ApdashFeatures;