import DriverForm from './driverForm';

const styles = {
  title: {
    textAlign: 'center',
    color: '#006D5B', // change to Bison Green
  },
};

const HomePage = () => {
  return (
    <div>
      <h1 style={styles.title}>Bison Technologies</h1>
      <DriverForm />
    </div>
  );
};

export default HomePage;
