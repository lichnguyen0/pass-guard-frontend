import React from 'react';

import Sidebar from '../components/layout/sidebar/Sidebar';
import VaultItemList from '../components/vault/vaultitemlist/VaultItemList';
import VaultRightPane from '../components/vault/vaultrightpane/VaultRightPane';
import ConfirmationModals from '../components/ui/confirmationmodals/ConfirmationModals';
import Topbar from '../components/layout/topbar/Topbar';

export default function Dashboard() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="content-wrapper">
        <Topbar />

        <div className="panes-container">
          <VaultItemList />
          <VaultRightPane />
        </div>
      </div>

      <ConfirmationModals />
    </div>
  );
}
