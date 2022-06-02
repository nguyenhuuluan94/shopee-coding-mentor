import './Loading.scss';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='loading-container'>
            <ReactLoading type={'spin'} color={'#EE4D2D'} height={'10%'} width={'10%'}/>
        </div>
    )
}

export default Loading;
