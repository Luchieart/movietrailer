import Routing from './Routing';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
          <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools /> */}
            <Routing />
          </QueryClientProvider>
    </>
  );
};

export default App;



