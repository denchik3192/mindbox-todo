import './App.css';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
} from '@chakra-ui/react';
import ToDoList from './components/ToDoList';
import { useAppDispatch } from './store/store';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { addTodo } from './store/reducers/toDoSlice';

function App() {
  const [newToDoValue, setNewToDoValue] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (newToDoValue === '') {
      setIsError(true);
      return;
    }
    dispatch(addTodo(newToDoValue));
    setNewToDoValue('');
    setIsError(false);
  };

  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <Box p={10} borderRadius={10} minW={600} maxW={800}>
        <Heading as="h2" size="3xl" noOfLines={1} pb={6}>
          TODOS
        </Heading>
        <Flex>
          <FormControl isInvalid={isError}>
            <Input
              onKeyDown={handleEnterSubmit}
              placeholder="New task"
              value={newToDoValue}
              onChange={(e) => setNewToDoValue(e.target.value)}
            />
            {!isError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Task is required.</FormErrorMessage>
            )}
          </FormControl>
          <Button colorScheme="teal" mr={3} onClick={handleClick} ml={2}>
            Add <Plus size={'30px'} />
          </Button>
        </Flex>
        <ToDoList />
      </Box>
    </>
  );
}

export default App;
