import React from "react";
import "../../../Styles/Sections/AppsScreenshots/AppsScreenshots.css"
import GreyPage from "../../GreyPage"
import DarkHeader from "../../Fonts/DarkHeader";
import DarkParagraph from "../../Fonts/DarkParagraph";
import CarouselComp from "./CarouselComp";

function AppScreenshots(){
    return(
        <GreyPage>
            <div className="as-header-container">
                <DarkHeader>
                    Apps Screenshots
                </DarkHeader>
                <DarkParagraph>
                    Proactively impact value-added channels via backend leadership skills. 
                    Efficiently revolutionize worldwide networks whereas strategic catalysts for change.
                </DarkParagraph>
            </div>
            <div className="as-content">
                <CarouselComp/>
            </div>
        </GreyPage>
    );
}

export default AppScreenshots;