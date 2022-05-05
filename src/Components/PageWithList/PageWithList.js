import '../../Styles/PageWithList/PageWithList.css';

function PageWithList({children,white}) {
  return (
    <div className={white ? "page-with-list-container" : "page-with-list-container grey"}>
      <div className='page-with-list-content'>
        {children}
      </div>
    </div>
  );
}

export default PageWithList;
