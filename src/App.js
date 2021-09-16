import GreetingContainer from './containers/GreetingContainer';
// import SignContainer from 'containers/SignContainer/SignContainer';
import Background from './components/BackGround/Background';
import TodoContainer from 'containers/TodoContainer';

function App() {
  return (
    <>
      <Background />
      <GreetingContainer />
      <TodoContainer />
    </>
  );
}

export default App;
