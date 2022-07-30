import axios from 'axios';


export const SignInAuth =  async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json' // This is the type of data that is being sent to the server. This is the default header used by express.json()
        }
        
    }
        const response = await axios.post('/api/auth/signin', data, config);

        return response;
}