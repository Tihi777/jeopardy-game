import React, { useState } from 'react';
import { ReactComponent as MenuSvg } from '../../static/images/svg/icons8-menu.svg';

function withNavBar(Component) {
  return function NavBar() {
    const [visibility, setVisibility] = useState(true);

    const handleClick = () => {
      setVisibility(!visibility);
    };

    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Своя Игра</span>
          </div>
          <div className="block lg:hidden">
            <button
              type="button"
              className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white focus:outline-none"
              onClick={() => handleClick()}
            >
              <MenuSvg />
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              visibility && 'hidden'
            }`}
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="#Games"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                Игры
              </a>
              <a
                href="#Account"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                Аккаунт
              </a>
            </div>
            <div>
              <a
                href="#Login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
              >
                Войти
              </a>
            </div>
          </div>
        </nav>
        <Component />
      </>
    );
  };
}

export default withNavBar;
