import React, { useState } from 'react';

const SummaryPage = () => {
  const [checkedOrder, setCheckedOrder] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checkedOrder}
        onChange={(e) => setCheckedOrder(e.target.checked)}
        id="confirm-checkbox"
      />
      <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
      <button disabled={!checkedOrder} name="주문 확인">
        주문 확인
      </button>
    </div>
  );
};

export default SummaryPage;
