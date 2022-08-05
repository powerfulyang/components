import React from 'react';
import { Dialog } from '@/components/Dialog';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="App">
      <button type="button" onClick={() => setVisible(true)}>
        Hello, world!
      </button>
      <Dialog visible={visible} />
    </div>
  );
};

export default App;
