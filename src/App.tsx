import './App.css';
import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import ToDoItem from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import { useAppDispatch } from './store/store';
import { useState } from 'react';
import { addTodo } from './store/reducers/todoSlice';
import { Plus } from 'lucide-react';

function App() {
  const [newToDoValue, setNewToDoValue] = useState('');
  const dispatch = useAppDispatch();

  const hadleClick = () => {
    dispatch(addTodo(newToDoValue));
    setNewToDoValue('');
  };
  return (
    <>
      <Box p={10} borderRadius={10}>
        <Heading as="h2" size="3xl" noOfLines={1} pb={6}>
          TODOS
        </Heading>
        <Flex>
          <Input
            placeholder="New task"
            value={newToDoValue}
            onChange={(e) => setNewToDoValue(e.target.value)}
          />
          <Button colorScheme="teal" mr={3} onClick={hadleClick} ml={2}>
            Add <Plus size={'30px'} />
          </Button>
        </Flex>
        <ToDoList />
      </Box>
    </>
  );
}

export default App;
