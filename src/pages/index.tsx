import { useCallback } from 'react';
import CatCard from '../common/components/cards/cat/CatCard';
import { mockCatCardProps } from '../common/components/cards/cat/CatCard.mocks';
import styles from '../styles/Home.module.css';

import PrimaryLayout from '@/common/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/common/components/layouts/sidebar/SidebarLayout';
import { counterSlice } from '@/Redux/Modules/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { NextPageWithLayout } from './page';
const Home: NextPageWithLayout = () => {
  const counter = useSelector((state: any) => state.counter?.countNumber);
  const dispatch = useDispatch();
  console.log(counter);

  const onWelcome = useCallback(() => {
    dispatch(counterSlice.actions.increment());
  }, [dispatch]);

  return (
    <section
      className={[
        'bg-gradient-to-r from-cyan-500 to-blue-500',
        styles.main,
      ].join(' ')}
    >
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <h2>Next JS template for Base template</h2>
      <h3 className="text-3xl font-bold underline">{process.env.siteName}</h3>
      <CatCard {...mockCatCardProps.base} />
      <button onClick={onWelcome}>Counter Increment({counter})</button>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://reqres.in/api/users?page=1`); //initial call on the server side at build time
  const data = await res.json();

  // Pass data to the page via props
  console.log(data);
  return { props: { data }, revalidate: 500 };
}
