import { Audio } from 'react-loader-spinner';
import style from'./ImageModal.module.css';


const Loader = () => (
    <div className={style.loaderContainer} >
        <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    />
    </div>
    
  );
  
  export default Loader;
// className={style.modalInfo}
