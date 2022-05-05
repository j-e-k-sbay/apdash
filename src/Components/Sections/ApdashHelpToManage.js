import '../../Styles/PageWithList/PageWithList.css';
import PWLTextSide from '../PageWithList/PWLTextSide';
import PWLImageSide from '../PageWithList/PWLImageSide';
import PWLHeader from '../PageWithList/PWLHeader';
import PWLParagraph from '../PageWithList/PWLParagraph';
import PWLStats from '../PageWithList/PWLStats/PWLStats';
import PageWithList from '../PageWithList/PageWithList';

function ApdashHelpToManage() {
  return (
    <PageWithList white={false}>
        <PWLTextSide>
          <PWLHeader>Apdash Help to Manage Everything for You</PWLHeader>
          <PWLParagraph>
            Monotonectally impact sustainable e-services with front-end infomediaries. 
            Collaboratively network functional solutions whereas initiatives. 
            Progressively pontificate collaborative "outside the box" thinking for.
            <ul>
                <li>People are not chained to desktops or laptops to help and record.</li>
                <li>The only way your business can evolve to the information.</li>
                <li>Your app will be used by a host of different people different reasons.</li>
                <li>Intrinsicly innovate top-line expertise after collaborative benefits.</li>
                <li>Efficiently redefine value-added internal or "organic" sources without.</li>
                <li>Objectively optimize backend quality vectors and for different.</li>
            </ul>
          </PWLParagraph>
          <PWLStats/>
          </PWLTextSide>
        <PWLImageSide right={true}>
          <img className='pwl-img-container' src="/Images/app-mobile-image-2.png" alt="" />
        </PWLImageSide>
    </PageWithList>
  );
}

export default ApdashHelpToManage;
