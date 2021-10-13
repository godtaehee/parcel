import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { OrderContext } from '../../contexts/OrderContext';
import ErrorBanner from '../../components/ErrorBanner';

const CompletePage = ({ setStep }) => {
  const [OrderDatas] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    orderCompleted(OrderDatas);
  }, []);

  const orderCompleted = async (OrderDatas) => {
    try {
      let response = await axios.post(
        'http://localhost:5000/order',
        OrderDatas,
      );
      setOrderHistory(response.data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러 발생" />;
  }

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>

        <table style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <th>주문 가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <br />
        <button onClick={() => setStep(0)}>첫페이지로</button>
      </div>
    );
  }
};

export default CompletePage;
