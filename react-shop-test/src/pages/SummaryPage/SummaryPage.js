import React, { useContext, useState } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

const SummaryPage = ({ setStep }) => {
  const [checkedOrder, setCheckedOrder] = useState(false);
  const [orderDatas] = useContext(OrderContext);

  const productsArray = Array.from(orderDatas.products);
  const productList = productsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = orderDatas.options.size > 0;
  let optionsRender = null;

  if (hasOptions) {
    const optionArray = Array.from(orderDatas.options.keys());
    const optionList = optionArray.map((key) => <li key={key}>{key}</li>);
    optionsRender = (
      <>
        <h2>옵션: {orderDatas.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderDatas.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsRender}
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default SummaryPage;
