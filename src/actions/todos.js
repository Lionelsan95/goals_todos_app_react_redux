import API from 'goals-todos-api'

export  const
            ADD_TODO = 'ADD_TODO',
            REMOVE_TODO = 'REMOVE_TODO',
            TOGGLE_TODO = 'TOGGLE_TODO',

            addTodo = (todo) => {
                return {
                    type: ADD_TODO,
                    todo
                }
            },

            removeTodo = (id) => {
                return {
                    type: REMOVE_TODO,
                    id
                }
            },

            toggleTodo = (id) => {
                return {
                    type: TOGGLE_TODO,
                    id
                }
            },

            handleDeleteTodo = (todo) => {
                return (dispatch) => {
                    dispatch(removeTodo(todo.id))

                    API.deleteTodo(todo.id)
                        .catch(() =>{
                            dispatch(addTodo(todo))
                            alert('An error occured.')
                        })
                }

            },

            handleAddTodo = (input) => {
                return (dispatch) => {
                    const name = input.value

                    if(name.trim() !== '')
                        API.saveGoal(name)
                            .then((todo) => {
                                dispatch(addTodo(todo))
                                input.value = ''
                            })
                            .catch(() => {
                                alert('an error occured, try again')
                            })
                    else
                        alert('Please enter a value')
                }
            },

            handleToggleTodo = (id) => {
                return (dispatch) => {
                    dispatch(toggleTodo(id))
                    API.saveTodoToggle(id)
                        .catch(() =>{
                            dispatch(toggleTodo(id))
                            alert('An error occured.')
                        })
                }
            }