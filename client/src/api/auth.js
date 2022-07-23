import axios from 'axios';


export const RegisterAuth =  async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json' // This is the type of data that is being sent to the server. This is the default header used by express.json()
        }
        
    }
        const response = await axios.post('/api/auth/register', data, config);

        return response;
}