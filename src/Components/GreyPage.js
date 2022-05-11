import '../Styles/GreyPage.css';

function GreyPage({children}) {
  return (
    <div className="grey-page-container">
      <div className='grey-page-content'>
        {children}
      </div>
    </div>
  );
}

export default GreyPage;
