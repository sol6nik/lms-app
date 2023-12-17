import localStorage from '@react-native-async-storage/async-storage';
import { pushRequest } from '../hooks/request-notification';


class authComponent {
    async setData(data) {
        // Set the tokens part
        await localStorage.setItem("accessToken", data.accessToken)
        await localStorage.setItem("refreshToken", data.refreshToken)
        // Set some user data
        await localStorage.setItem("user_group", data.user_group)
        await localStorage.setItem("user_id", data.user_id)
        // Set push token
        const token = localStorage.getItem("push-token");
        if(!token){
            const push_token = await pushRequest(data.user_id)
            await localStorage.setItem("push-token",push_token)
        }
    }
    async setGuestData(){
        await localStorage.setItem("accessToken", "Guest")
        await localStorage.setItem("refreshToken", "Guest")
        // Set some user data
        await localStorage.setItem("user_group", "-1")
        await localStorage.setItem("user_id", "-1")
        
        const token = await localStorage.getItem("push-token");
        if(!token){
            const push_token = await pushRequest(-1)
            await localStorage.setItem("push-token",push_token)
        }
    }
    async eraseData(){
        await localStorage.removeItem("accessToken")
        await localStorage.removeItem("refreshToken")
        // Remove some user data
        await localStorage.removeItem("user_group")
        await localStorage.removeItem("user_id")
        await localStorage.removeItem("push-token")
    }

    async debugPrint(){
        const accessToken = await localStorage.getItem("accessToken")
        const refreshToken = await localStorage.getItem("refreshToken")
        // Set some user data
        const user_group = await localStorage.getItem("user_group")
        const user_id = await localStorage.getItem("user_id")
        // Set push token
        const token = await localStorage.getItem("push-token");
        console.log(accessToken, refreshToken, user_group, user_id, token)
    }
}





export default new authComponent();