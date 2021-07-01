import axios from 'axios';
// 
export const get_all_users = async(user) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }

    let values = {
        id: user
    }

    
    let data = await axios.post(
        'http://localhost/admin_panel/get_all_users.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    return data;
}


// 
export const change_status = async(data1) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        user_id: data1.user_id,
        status: data1.status
    }

   
    
    let data = await axios.post(
        'http://localhost/admin_panel/change_user_status.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}






// 
export const get_doctor_info = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id.user_id
    }

    
    let data = await axios.post(
        'http://localhost/admin_panel/get_doctor_info.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}

// 

export const get_lab_info= async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id.user_id
    }

    
    let data = await axios.post(
        'http://localhost/admin_panel/get_lab_info.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}

// 
export const get_all_admins = async() =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: 0
    }

    let data = await axios.post(
        'http://localhost/admin_panel/get_admins.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



// 
export const get_hospital_info = async(hospital_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: hospital_id.user_id
    }

    
    let data = await axios.post(
        'http://localhost/admin_panel/get_hospital_info.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}

// 

export const get_cities = async() =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }



    let values = {
        id: 0
    }

        
    let data = await axios.post(
        'http://localhost/admin_panel/get_cities.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}


export const get_labs = async(city) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        city: city
    }

    
    let data = await axios.post(
        'http://localhost/back_end/getlabs.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}




export const get_max_user_labs = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/getmaxuserslab.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const get_lab_appoinments = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/user_lab_appointment.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}


export const get_appointments_lab = async(lab_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: lab_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/lab_appointments_get.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}

