import API from 'goals-todos-api'
export const
            RECEIVE_DATA = 'RECEIVE_DATA',

            handleReceiveData = () => dispatch => (
                Promise.all([
                    API.fetchGoals(),
                    API.fetchTodos()
                ]).then(([goals, todos]) => {
                    dispatch(receiveData(todos, goals))
                })
            )

const   receiveData = (todos, goals) => {
            return {
                type: RECEIVE_DATA,
                todos,
                goals
            }
        }
