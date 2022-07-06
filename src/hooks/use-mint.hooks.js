import React, {useState} from 'react';

import {approveUSDC} from 'src/helpers/metamask-interact';

const useMintHook = () => {
  const [loading, setLoading] = useState(false);
  const [isUSDCApproved, setIsUSDCApproved] = useState(false);

  const allowUSDC = async amount => {
    setLoading(true);

    try {
      const isSuccess = await approveUSDC(amount);

      setIsUSDCApproved(isSuccess);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    allowUSDC,
    isUSDCApproved,
  };
};

export default useMintHook;
