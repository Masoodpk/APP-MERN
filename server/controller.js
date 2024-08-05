import todo from "./todoModel.js"


export async function getTodos(){
try {
    const allTodos = await todo.find({}).sort({createdAt:-1})
    res.status(200).send(allTodos)
} catch (error) {
    
}
}