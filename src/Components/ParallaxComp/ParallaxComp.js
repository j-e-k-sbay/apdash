import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import "../../Styles/ParallaxComp/ParallaxComp.css"
import WhiteHeader from "../Fonts/WhiteHeader";
import WhiteParagraph from "../Fonts/WhiteParagraph";
import DownloadButtonWithIcon from "../Buttons/DownloadButtonWithIcon";
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'

function ParallaxComp(){
    return(
        <div>
            <div className="parallax-container">
                <div className="parallax-content">
                    <WhiteHeader>
                        Download Our Apps
                    </WhiteHeader>
                    <WhiteParagraph>
                        Start working with that can provide everything you need to generate awareness, drive traffic, connect. 
                        Efficiently transform granular value with client-focused content. Energistically redefine market.
                    </WhiteParagraph>
                    <div className="parallax-buttons">
                        <DownloadButtonWithIcon
                            icon={faWindows}
                            text={"Windows"}
                        />
                        <DownloadButtonWithIcon
                            icon={faApple}
                            text={"App Store"}
                        />
                        <DownloadButtonWithIcon
                            icon={faGooglePlay}
                            text={"Google Play"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParallaxComp;