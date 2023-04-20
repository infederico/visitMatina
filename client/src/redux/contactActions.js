import { setContacto} from "./contactSlice";
import axios from "axios";


export const PostContact = (data) => {
    
    return async function (dispatch) {
      try {
        const response = await axios.post(`http://localhost:3001/api/sendMail`, data);
        return dispatch(setContacto(response.data));
      } catch (error) {
        if (error.response) {
          // Si hay una respuesta del servidor, se obtiene el mensaje de error
          const errorMessage = error.response.data.message;
          console.log(`Error en la petición: ${errorMessage}`);
        } else {
          // Si no hay respuesta del servidor, se muestra un mensaje genérico de error
          console.log('Error en la petición');
        }
      }
    };
  };