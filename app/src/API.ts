import axios, { AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:4000'; // type infered

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    console.log('getting todos');
    // const todos: AxiosResponse<ApiDataType> = await axios.get(baseUrl + '/todos');
    const todos = 'a list of all todos';
    // @ts-ignore
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    console.log('saving todo');
    console.log(formData);
    // const todo: Omit<ITodo, '_id'> = {
    //   name: formData.name,
    //   description: formData.description,
    //   status: false,
    // };
    // const saveTodo: AxiosResponse<ApiDataType> = await axios.post(baseUrl + '/todos', todo);
    // return saveTodo;
    // @ts-ignore
    return formData;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    // const todoUpdate: Pick<ITodo, 'status'> = {
    //   status: true,
    // };
    // const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(`${baseUrl}/todos/${todo._id}`, todoUpdate);
    // return updatedTodo;
    // @ts-ignore
    return todo;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    console.log('deleting todo');
    console.log(_id);
    // const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/todos/${_id}`);
    // return deletedTodo;
    // @ts-ignore
    return _id;
  } catch (error) {
    throw new Error(error);
  }
};
