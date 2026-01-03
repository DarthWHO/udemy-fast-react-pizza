import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';
import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle')
      fetcher.load(`/order/${order.id}`);
  }, [fetcher, order.id]);

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
