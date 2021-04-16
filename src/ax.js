import Axios from "axios";


const baseUri = "http://localhost:4444";
export const axios = Axios.create(
	{
		baseUrl : "http://localhost:4444/api/v1",
		
		timeout:3000,
	}

	);