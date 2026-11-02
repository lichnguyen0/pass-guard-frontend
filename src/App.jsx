import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import { VaultDataProvider } from './context/VaultDataContext';
import { VaultFormProvider } from './context/VaultFormContext';
import { DialogProvider } from './context/DialogContext';

function App() {
  return (
    <BrowserRouter>
      <VaultDataProvider>
        <VaultFormProvider>
          <DialogProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </DialogProvider>
        </VaultFormProvider>
      </VaultDataProvider>
    </BrowserRouter>
  );
}

export default App;
