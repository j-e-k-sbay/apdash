import React from "react";
import "../../../Styles/Sections/OurWorkProcess/OurWorkProcess.css"
import DarkHeader from "../../Fonts/DarkHeader";
import DarkParagraph from "../../Fonts/DarkParagraph";
import DarkTitle from "../../Fonts/DarkTitle";
import DarkSmallParagraph from "../../Fonts/DarkSmallParagraph";
import OWPElement from "./OWPElement"
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import WhitePage from "../../WhitePage";

function OurWorkProcess(){
    return(
        <WhitePage>
            <div className="owp-header-container">
                <DarkHeader>Our Work Process</DarkHeader>
                <DarkParagraph>
                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered 
                    core competencies through client-centered core competencies.
                </DarkParagraph>
            </div>
            <div className="owp-content">
                <div className="owp-textside">
                    <OWPElement icon={faDiagramProject}>
                        <DarkTitle>Planning Idea</DarkTitle>
                        <DarkSmallParagraph>
                            Holisticly architect sustainable meta-services for process-centric 
                            core competencies. Enthusiastically re-engineer best-of-breed outsourcing.
                        </DarkSmallParagraph>
                    </OWPElement>
                    <OWPElement icon={faPuzzlePiece} right={true}>
                        <DarkTitle right={true}>Developed Final Product</DarkTitle>
                        <DarkSmallParagraph right={true}>
                            Monotonectally harness holistic web-readiness after multimedia based catalysts 
                            for change. Completely brand front-end systems before visionary.
                        </DarkSmallParagraph>
                    </OWPElement>
                    <OWPElement icon={faTruck}>
                        <DarkTitle>Deliver to Customer</DarkTitle>
                        <DarkSmallParagraph>
                            Monotonectally plagiarize synergistic e-business for stand-alone communities. 
                            Professionally enhance visionary manufactured products progressive.
                        </DarkSmallParagraph>
                    </OWPElement>
                </div>
                <div className="owp-imageside">
                    <img className="owp-img" src="/Images/app-mobile-image-3.png" alt="" />
                </div>
            </div>
        </WhitePage>
    );
}

export default OurWorkProcess;