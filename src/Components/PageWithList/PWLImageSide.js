import '../../Styles/PageWithList/PWLImageSide.css';

function PWLImageSide({children,right}) {
  return (
    <div className={right ? "pwl-imageside right" : "pwl-imageside left"}>
      {children}
    </div>
  );
}

export default PWLImageSide;
