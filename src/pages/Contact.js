import { useState } from "react"
import Button from '@mui/material/Button';
import '../App.scss'
import { Alert, AlertTitle } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        asunto:'',
        mensaje:''
    })

    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmitData = (e) => {
        e.preventDefault()
        setSuccess(true)
    }

    const clearForm = (e) => {
        setFormData({        
            name: '',
            phone: '',
            email: '',
            asunto:'',
            mensaje:''})
    }

    return(
     <div className="container" >
        <section className='form-container'>
            <h2>CONTACTO</h2>
            {success ? 
            <>
                <Box sx={{ width: '70%' }}>
                    <Alert
                        action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                            setSuccess(false);
                            clearForm();
                            }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                        <AlertTitle>Mensaje enviado</AlertTitle>
                        <strong>El mensaje ha sido enviado con exito!</strong>  
                        <strong>Nos contactaremos a la brevedad.</strong>   
                    </Alert>
                </Box>
            </> :
            <form onSubmit={handleSubmitData}>
                <input type='text' name='name' placeholder='Ingrese el nombre' value={formData.name} onChange={handleChange} required/>
                <input type='number' name='phone' placeholder='Ingrese el teléfono' value={formData.phone} onChange={handleChange} required/>
                <input type='email' name='email' placeholder='Ingrese el mail' value={formData.email} onChange={handleChange} required/>
                <input type='text' name='asunto' placeholder='Asunto' value={formData.asunto} onChange={handleChange} required/>
                <textarea type='textarea' name='mensaje' placeholder='Mensaje' value={formData.mesaje} onChange={handleChange} required/>
                <Button type='submit' variant='contained'>Enviar</Button>
            </form>}

        </section>
    </div>
    )
}

export default Contact