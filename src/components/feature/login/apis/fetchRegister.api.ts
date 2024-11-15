import axios, { AxiosResponse } from "axios";

const apiUrl: string = "http://web-farminpalmbe-m1bow3hn7b1c4b46.sel4.cloudtype.app";
const apiPath: string = "/api/auth/register";

interface RegisterRequest {
    loginId: string;
    password: string;
    name: string;
}

interface RegisterResponse {
    success: boolean;
}

export async function doRegister(): Promise<void> {
    const data: RegisterRequest = {
        loginId: "soomin",
        password: "1234",
        name: "SOO",
    };

    try {
        const response: AxiosResponse<RegisterResponse> = await axios.post(apiUrl + apiPath, data);
        console.log("Registration Successful:", response.data);
    } catch (error) {
        console.error("Registration Failed:", error);
    }
}
