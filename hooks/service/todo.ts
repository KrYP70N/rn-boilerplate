import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

// export const useTodo = useQuery({
//   queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos/1'),
//   queryKey: ["todo"]
// })

export const fetchTodo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return await response.json();
};