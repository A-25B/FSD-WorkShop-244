import ff from '../assets/ff.jpeg';

const Home = () => {
  return (
    <div>
      <h1>welcome to first component</h1>
      <div style={{ marginTop: '24px' }}>
        <img
          src={ff}
          alt="Featured image"
          style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '16px' }}
        />
      </div>
    </div>
  );
};

export default Home;