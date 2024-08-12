import ToDoItem from './ToDoItem';
import { Badge, Box, Button, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectFilter, selectFilteredToDos } from '../store/selectors/selectToDos';
import { clearCompleted } from '../store/reducers/todoSlice';
import { useAppDispatch } from '../store/store';
import { changeFilter } from '../store/reducers/filterSlice';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

function ToDoList() {
  const todos = useSelector(selectFilteredToDos);
  const activeFilter = useSelector(selectFilter);
  const dispatch = useAppDispatch();
  const statusButtons = ['all', 'active', 'completed'];

  const setActiveFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const activeFilter = button.innerHTML.toLowerCase();
    dispatch(changeFilter(activeFilter));
  };

  return (
    <Box mt={3}>
      <Box
        fontStyle={'italic'}
        textAlign={'left'}
        fontSize={18}
        pt={2}
        borderBottom={'2px solid #CFCFCF'}
        color={'grey'}
        pb={2}>
        What needs to be done
      </Box>
      <Box py={5} maxH={500} overflowX={'hidden'}>
        {todos?.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}>
            <ToDoItem key={item.id} item={item} />
          </motion.div>
        ))}
      </Box>

      <Flex alignItems={'center'} justifyContent={'center'}>
        <Badge textAlign={'left'} px={2} mt={3} variant="subtle" colorScheme="green">
          {todos?.length} items left
        </Badge>
        <Box></Box>
      </Flex>

      <Flex align={'center'} justify={'space-between'} px={2} pt={3}>
        <Box>
          {statusButtons.map((button, idx) => (
            <Button
              key={idx}
              mr={1}
              minW={'80px'}
              colorScheme={'teal'}
              variant={activeFilter === button ? 'solid' : 'outline'}
              onClick={(e) => setActiveFilter(e)}>
              {button}
            </Button>
          ))}
        </Box>
        <Button bgColor="#805AD5" color="white" onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </Button>
      </Flex>
    </Box>
  );
}

export default ToDoList;
