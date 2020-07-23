import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';
import withNavBar from '../components/withNavBar/withNavBar';

const routes = [
  { path: '/', component: withNavBar(MainPage) },
  { path: '/login', component: LoginPage },
];

export default routes;
