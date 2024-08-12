import ToDoItem from './ToDoItem';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectFilter, selectFilteredToDos } from '../store/selectors/selectToDos';
import { clearCompleted } from '../store/reducers/todoSlice';
import { useAppDispatch } from '../store/store';
import { changeFilter } from '../store/reducers/filterSlice';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

function ToDoList() {
  const todos = useSelector(selectFilteredToDos);
  const activeFilter = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const setrActiveFilter = (e) => {
    const activeFilter = e.target.innerHTML.toLowerCase();
    dispatch(changeFilter(activeFilter));
  };

  return (
    <Box>
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

      <Flex align={'center'} justify={'space-between'} px={3} py={6}>
        <Box>{todos?.length} items left</Box>
        <Box px={2} onClick={(e) => setrActiveFilter(e)}>
          {/* fix */}
          <Button
            size="sm"
            fontSize={12}
            mr={1}
            minW={'80px'}
            colorScheme={'teal'}
            variant={activeFilter === 'all' ? 'solid' : 'outline'}>
            All
          </Button>
          <Button
            size="sm"
            fontSize={12}
            mr={1}
            minW={'80px'}
            colorScheme={'teal'}
            variant={activeFilter === 'active' ? 'solid' : 'outline'}>
            Active
          </Button>
          <Button
            size="sm"
            fontSize={12}
            minW={'80px'}
            colorScheme={'teal'}
            variant={activeFilter === 'completed' ? 'solid' : 'outline'}>
            Completed
          </Button>
        </Box>
        <Button onClick={() => dispatch(clearCompleted())}>Clear Completed</Button>
      </Flex>
    </Box>
  );
}

export default ToDoList;
