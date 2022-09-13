import './Modal.scss'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

const Modal = ({title, close, children}) => {
    return(
        <div className="modal">
            <h2>{title}</h2>
            <HighlightOffSharpIcon fontSize='large' color='error' onClick={() => close(false)}/>
            {children}
        </div>
    )
}

export default Modal