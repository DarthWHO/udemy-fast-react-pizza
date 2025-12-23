import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!user && <CreateUser />}
      {user && (
        <>
          <p className="mb-4 text-stone-600 md:text-lg">
            Welcome back, <span className="font-semibold">{user.username}</span>
            !
          </p>
          <Button type="primary" to="/menu" className="mt-">
            Order Pizza
          </Button>
        </>
      )}
    </div>
  );
}

export default Home;
