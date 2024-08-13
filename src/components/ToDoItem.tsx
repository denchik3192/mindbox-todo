import { Button, Checkbox, Flex, Text } from '@chakra-ui/react';
import { IToDoItem } from '../interfaces/IToDoItem';
import { useAppDispatch } from '../store/store';
import { Trash2 } from 'lucide-react';
import { changeToDoStatus, deleteTodo } from '../store/reducers/toDoSlice';

interface IToDoItemProps {
  item: IToDoItem;
}

const ToDoItem: React.FC<IToDoItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Flex align={'center'} p={2} borderBottom={'1px solid #CFCFCF'}>
        <Checkbox
          onChange={() => dispatch(changeToDoStatus(item.id))}
          size="lg"
          colorScheme="teal"
          isChecked={item.checked}
        />
        <Text fontSize="xl" ml={4} style={{ textDecoration: item.checked ? 'line-through' : '' }}>
          {item.title}
        </Text>
        <Button
          variant={'outline'}
          ml={'auto'}
          alignSelf={'end'}
          onClick={() => dispatch(deleteTodo(item.id))}>
          <Trash2 size={'20px'} />
        </Button>
      </Flex>
    </>
  );
};

export default ToDoItem;
