import React from 'react';
import './VaultItemDetail.css';

import DetailHeader from './DetailHeader';
import DetailCredentialsCard from './DetailCredentialsCard';
import DetailCategoryCard from './DetailCategoryCard';
import DetailNotesCard from './DetailNotesCard';
import DetailWebsiteCard from './DetailWebsiteCard';
import DetailAuditCard from './DetailAuditCard';

const VaultItemDetail = () => {
  return (
    <>
      <DetailHeader />
      <div className="detail-body">
        <DetailCredentialsCard />
        <DetailCategoryCard />
        <DetailNotesCard />
        <DetailWebsiteCard />
        <DetailAuditCard />
      </div>
    </>
  );
};

export default VaultItemDetail;
