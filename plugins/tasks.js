const axios = require('axios')

export default ({ store, app }, inject) => {


    const getComments = async function (taskid) {

        let url = this.$auth.strategies.local.options.endpoints.commentInfo.url + '/' + taskid
        let response;
        try {
        response = await axios.get(url, {
            headers: {
            // 'authorization': `${localStorage.getItem("auth._token.local")}`
            }
        })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }        
        if (response.status != 200) return false
        let comments = response.data

        return comments;

    }

    const editComment = async function (task, timestamp, body) {

        let url = this.$auth.strategies.local.options.endpoints.commentInfo.url
        let response;
        try {
        response = await axios.patch(url, {
                task,
                created_at: timestamp,
                body
            }, {
                headers: {
                // 'authorization': `${localStorage.getItem("auth._token.local")}`
                }
            })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }

        if (response.status != 200) return false

        return response;

    }

    const deleteComment = async function (task, timestamp) {

        let url = this.$auth.strategies.local.options.endpoints.commentInfo.url

        let response;
        try {
        response = await axios.delete(url, {
            headers: {
            // 'authorization': `${localStorage.getItem("auth._token.local")}`
            },
            data: {
                task: task,
                created_at: timestamp
            }
        })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }        
        if (response.status != 200) return false

        return response;

    }

    const sendComment = async function (task, reporter, from, subscribers, body) { 

        let url = this.$auth.strategies.local.options.endpoints.commentInfo.url

        let response;
        try {
            response = await axios.post(url, {
                task,
                created_at: Date.now(),
                from,
                reporter,
                subscribers,
                body
            }, {
                headers: {
                // 'authorization': `${localStorage.getItem("auth._token.local")}`
                }
            })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }

        return response;

    }

    const getTasks = async function () {

        let url = this.$auth.strategies.local.options.endpoints.taskInfo.url

        let response;
        try {
        response = await axios.get(url, {
            headers: {
            // 'authorization': `${localStorage.getItem("auth._token.local")}`
            }
        })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }

        let tasks = response.data

        return tasks;

    }

    const getTask = async function (taskid) {

        let url = this.$auth.strategies.local.options.endpoints.taskInfo.url + '/' + taskid

        let response;
        try {
        response = await axios.get(url, {
            headers: {
            // 'authorization': `${localStorage.getItem("auth._token.local")}`
            }
        })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }

        let task = response.data

        return task;

    }

    const deleteTask = async function (taskid) {

        let url = this.$auth.strategies.local.options.endpoints.taskInfo.url + '/' + taskid

        let response;
        try {
        response = await axios.delete(url, {
            headers: {
            // 'authorization': `${localStorage.getItem("auth._token.local")}`
            },
        })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }        
        if (response.status != 200) return false

        return response;

    }

    const createTask = async function (name, body, priority, user, status) {

        let url = this.$auth.strategies.local.options.endpoints.taskInfo.url
        
        let response;
        try {
            response = await axios.post(url, {
                name,
                body,
                reporter: user,
                status: status,
                priority
            }, {
                headers: {
                // 'authorization': `${localStorage.getItem("auth._token.local")}`
                }
            })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }
        return response;
    }

    const changeTaskStatus = async function (id, status) {
        let url = this.$auth.strategies.local.options.endpoints.taskInfo.url

        let response;
        try {
        response = await axios.patch(url, {
                id,
                status
            }, {
                headers: {
                // 'authorization': `${localStorage.getItem("auth._token.local")}`
                }
            })
        } catch (e) {
        //expired or invalid token, handle error here
        return false
        }        
        if (response.status != 200) return false

        return response;
    }


    inject('getComments', getComments)
    inject('editComment', editComment)
    inject('deleteComment', deleteComment)
    inject('sendComment', sendComment)

    inject('getTasks', getTasks)
    inject('getTask', getTask)
    inject('deleteTask', deleteTask)
    inject('createTask', createTask)
    inject('changeTaskStatus', changeTaskStatus)
}