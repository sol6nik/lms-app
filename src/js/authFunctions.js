import localStorage from '@react-native-async-storage/async-storage';

class authComponent {
    async setData(data) {
        // Set the tokens part
        await localStorage.setItem("accessToken", data.accessToken)
        await localStorage.setItem("refreshToken", data.refreshToken)
        // Set some user data
        await localStorage.setItem("user_group", "211-782")
        await localStorage.setItem("user_id", "100")
    }
    async setGuestData(){
        await localStorage.setItem("accessToken", "Guest")
        await localStorage.setItem("refreshToken", "Guest")
        // Set some user data
        await localStorage.setItem("user_group", "-1")
        await localStorage.setItem("user_id", "-1")
    }
    async eraseData(){
        await localStorage.removeItem("accessToken")
        await localStorage.removeItem("refreshToken")
        // Remove some user data
        await localStorage.removeItem("user_group")
        await localStorage.removeItem("user_id")
    }
}





export default new authComponent();