import '../../Styles/PageWithList/PageWithList.css';
import PWLTextSide from '../PageWithList/PWLTextSide';
import PWLImageSide from '../PageWithList/PWLImageSide';
import PWLHeader from '../PageWithList/PWLHeader';
import PWLParagraph from '../PageWithList/PWLParagraph';
import PageWithList from '../PageWithList/PageWithList';
import PWLButtons from '../PageWithList/PWLButtons/PWLButtons';
import PWLButton from '../PageWithList/PWLButtons/PWLButton';

function ShareYourPhotos() {
  return (
    <PageWithList white={true}>
      <PWLImageSide right={false}>
          <img className='pwl-img-container' src="/Images/about-us.png" alt="" />
        </PWLImageSide>
        <PWLTextSide>
          <PWLHeader>Share Your Photos With Friends Easily</PWLHeader>
          <PWLParagraph>
            Objectively deliver professional value with diverse web-readiness. 
            Collaboratively transition wireless customer service without goal-oriented catalysts 
            for change. Collaboratively.
          </PWLParagraph>
          <PWLParagraph>
            Uniquely simplify sustainable applications whereas adaptive schemas. 
            Competently brand performance based content and.
            <ul>
                <li>The only way your business can evolve is in information.</li>
                <li>Your app will be used by a host and for different.</li>
                <li>Intrinsicly innovate top-line expertise benefits.</li>
                <li>Efficiently redefine value-added internal sources without.</li>
            </ul>
          </PWLParagraph>
            <PWLButtons>
                <PWLButton isFilled={true}>
                    Get Start Now
                </PWLButton>
                <PWLButton isFilled={false}>
                    More About Us
                </PWLButton>
            </PWLButtons>
          </PWLTextSide>
    </PageWithList>
  );
}

export default ShareYourPhotos;
