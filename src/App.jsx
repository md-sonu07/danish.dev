import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
import { fetchProfile } from './store/profile/profileThunks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white">
      <AppRoutes />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            borderRadius: '1rem',
            fontWeight: 'bold',
          },
        }}
      />
    </div>
  )
}

export default App
