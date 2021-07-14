import API from 'goals-todos-api'

export const
        ADD_GOAL = 'ADD_GOAL',
        REMOVE_GOAL = 'REMOVE_GOAL';

const
        addGoal = (goal) => {
            return {
                type: ADD_GOAL,
                goal
            }
        },

        removeGoal = (id) => {
            return {
                type: REMOVE_GOAL,
                id
            }
        };

export const

        handleDeleteGoal = (goal) => {
            return (dispatch) => {
                dispatch(removeGoal(goal.id))
                API.deleteTodo(goal.id)
                    .catch(() =>{
                        dispatch(addGoal(goal))
                        alert('An error occured.')
                    })
            }
        },
    
        handleAddGoal = (input) => {
            return (dispatch) => {
                const name = input.value
    
                if(name.trim() !== '')
                    API.saveGoal(name)
                        .then((goal) => {
                            dispatch(addGoal(goal))
                            input.value = ''
                        })
                        .catch(() => {
                            alert('an error occured, try again')
                        })
                else
                    alert('Please enter a value')
            }
        }