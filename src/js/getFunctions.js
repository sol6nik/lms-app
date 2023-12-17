import axios from 'axios';
import localStorage from '@react-native-async-storage/async-storage'


export async function getTimetableArray(setFunction) {
    var group_number = await localStorage.getItem('user_group')
    let axios_cfg = { url: `http://themist.xyz:4444/api/timetable/fetch_timetable?group=${group_number}`, method: "GET" }
    try {
        var anwser = await axios(axios_cfg);
        return setFunction(anwser.data[0].timetable)
    }
    catch (err) {
        return console.log('There is some error during getting data: ' + JSON.stringify(err))
    }
}

export async function getMessagesArray(setFunction) {
    var user_id = await localStorage.getItem('user_id')
    let axios_cfg = { url: `http://themist.xyz:4444/api/messages/getAllMessages`, method: "POST", data: { id: user_id } }
    try {
        var anwser = await axios(axios_cfg);
        return setFunction(anwser.data)
    }
    catch (err) {
        return console.log('There is some error during getting data: ' + JSON.stringify(err.response.data))
    }
}

export async function getInfoObject(setFunction) {
    var user_id = await localStorage.getItem('user_id')
    let axios_cfg = { url: `http://themist.xyz:4444/api/user-info/get_user_info?id=${user_id}`, method: "GET" }
    try {
        var anwser = await axios(axios_cfg);
        var cutted_data = anwser.data.userData;
        delete cutted_data.internal_id
        delete cutted_data.phone
        delete cutted_data.email
        delete cutted_data.__v
        delete cutted_data._id
        delete cutted_data.FIO
        console.log(cutted_data)
        return setFunction(cutted_data)
    }
    catch (err) {
        console.log(err)
        console.log('There is some error during getting data: ' + JSON.stringify(err.response.data.message))
    }
}

export async function YYY(setFunction) {
    var group_number = await localStorage.getItem('user_group')
    let axios_cfg = { url: `http://themist.xyz:4444/api/timetables/${group_number}`, method: "GET" }
    try {
        var anwser = await axios(axios_cfg);
        return setFunction(anwser.data.timetable)
    }
    catch (err) {
        console.log('There is some error during getting data: ' + JSON.stringify(err.response.data.message))
    }
}

export async function ZZZ(setFunction) {
    var group_number = await localStorage.getItem('user_group')
    let axios_cfg = { url: `http://themist.xyz:4444/api/timetables/${group_number}`, method: "GET" }
    try {
        var anwser = await axios(axios_cfg);
        return setFunction(anwser.data.timetable)
    }
    catch (err) {
        console.log('There is some error during getting data: ' + JSON.stringify(err.response.data.message))
    }
}