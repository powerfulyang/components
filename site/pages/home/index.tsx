import { useState } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  const [, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Open Dialog
      </button>
      <button
        type="button"
        onClick={() => {
          toast.success(`hello world`);
        }}
      >
        Open Toaster
      </button>
    </div>
  );
};

export default Home;
