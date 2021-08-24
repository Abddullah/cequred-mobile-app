
import ActionTypes from '../constant/constant';

//login user 
export function getContent() {
    return dispatch => {
        return new Promise(function (resolve, reject) {

            fetch('https://cequred.herokuapp.com/data/get', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            }).then((result) => {
                console.log(result, 'resultresult')
                if (result.languages) {
                    resolve(result)
                    dispatch({ type: ActionTypes.DATA, payload: result.languages })
                }
            }).catch((err) => {
                console.log(err, 'err')
                reject(err)
            })

        })
    }
}

export function checkUserAuth(email) {
    return dispatch => {
        return new Promise(function (resolve, reject) {

            fetch(`https://cequred.herokuapp.com/user/get/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            }).then((result) => {
                console.log(result, 'resultresult signup')
                if (result) {
                    resolve()
                } else {
                    reject()
                }

            }).catch((err) => {
                console.log(err, 'err')
                reject(err)
            })

        })
    }
}
