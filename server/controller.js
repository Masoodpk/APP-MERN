import todo from "./todoModel.js"


export async function getTodos(){
try {
    const allTodos = await todo.find({}).sort({createdAt:-1})
    res.status(200).send(allTodos)
} catch (error) {
    res.status(400).send(error.message);
}
}

export async function createTodos(){
    const dbTodo = req.body;
    try {
     const newTodos = await todo.create(dbTodo)
        res.status(201).send(newTodos)
    } catch (error) {
        res.status(500).send(error.message);
    }
    }

    export async function updateTodos(){
        const {id} = req.params;
        try {
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.send(`there is todo with the id of ${id} `)
            }
            const todoId = {_id: id}
            const update = {completed:true}
         const updateTodo = await todo.findOneAndUpdate(todoId,update)
            res.status(201).send(updateTodo)
            if(!updateTodo){
                return res.send(`there is todo with the id of ${id} `)
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
        }

        export async function deleteTodos(){
            const {id} = req.params;
            try {
                if(!mongoose.Types.ObjectId.isValid(id)){
                    return res.send(`there is todo with the id of ${id} `)
                }
            
             const deleteTodo = await todo.findOneAndDelete({_id:id})
                res.status(201).send(deleteTodo)
           
            } catch (error) {
                res.status(500).send(error.message);
            }
            }