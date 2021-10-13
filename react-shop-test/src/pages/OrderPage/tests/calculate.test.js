import { render, screen } from '../../../test-utils';
import Type from '../Type';
import userEvent from '@testing-library/user-event';

test('update products total when products change', async () => {
  render(<Type orderType="products" />);
  const productsTotal = screen.getByText('총 가격:', { exact: false });
  expect(productsTotal).toHaveTextContent('0');

  const americaInput = await screen.findByRole('spinbutton', {
    name: 'America',
  });
  userEvent.clear(americaInput);
  userEvent.type(americaInput, '1');
  expect(productsTotal).toHaveTextContent('1000');
});
