import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API';
import tw, { styled, css } from 'twin.macro';

const Wrapper = styled.main`
  ${tw`w-full min-h-screen py-10 px-20 flex flex-col justify-center items-center`}
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Todo not saved');
        }
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated');
        }
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not deleted');
        }
        setTodos(data.todos);
      })
      .catch(err => console.log(err));
  };

  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo._id} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} todo={todo} />
      ))}
    </main>
  );
};

// return (
//   <Wrapper>
//     <div tw='text-center'>
//       <h1 tw='mb-5'>Tailwind Starter</h1>
//       <h2>
//         Using{' '}
//         <a href='https://parceljs.org/' target='_blank' rel='noopener noreferrer'>
//           parcel
//         </a>{' '}
//         <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
//           tailwind
//         </a>{' '}
//         and{' '}
//         <a href='https://github.com/ben-rogerson/twin.macro' target='_blank' rel='noopener noreferrer'>
//           twin.macro
//         </a>
//       </h2>
//     </div>
//   </Wrapper>
// );
// };

export default App;
