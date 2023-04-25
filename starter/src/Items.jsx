import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils'

const Items = ({ items }) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch('/')
  })
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>there was an error</p>
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
