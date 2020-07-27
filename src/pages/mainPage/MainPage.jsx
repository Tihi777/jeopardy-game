import React from 'react';
import { ReactComponent as PlayingGuysSVG } from '../../static/images/svg/playingGuys.svg';
import { ReactComponent as UnavailabilitySVG } from '../../static/images/svg/unavailability.svg';
import spot from '../../static/images/svg/spot.svg';
import './MainPage.scss';
import Button from '../../components/button';

function MainPage() {
  return (
    <div className="h-full md:flex">
      <div
        className="block md:w-1/2 sm:h-screen bg-local flex flex-col justify-between p-10"
        style={{
          backgroundImage: `url(${spot})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '.5rem',
          backgroundPositionY: '-14rem',
          backgroundSize: '35rem',
        }}
      >
        <div className="flex">
          <p className="w-1/2 text-heading text-5xl lg:text-6xl sm:text-6xl font-bold leading-tight pl-10">
            Play.
            <br />
            Learn.
            <br />
            Win.
          </p>
          <p className="w-1/2 pl-12 py-3 text-input text-base font-medium border-l-2 my-auto ">
            An exciting intellectual game, where you can test your own knowledge in various fields.
            You can also play over a local network or over the Internet with each other!
          </p>
        </div>
        <PlayingGuysSVG className="mx-auto p-10" />
      </div>
      <div className="block md:w-2/3 p-10 flex flex-col bg-main-gray h-screen">
        <div className="flex justify-between border-b-2 pb-8">
          <div className="flex">
            <p className="text-3xl font-bold text-heading uppercase">svoya igra</p>
            <p className="online mt-5 ml-6 font-medium text-xs">online</p>
          </div>
          <div className="flex">
            <p className="text-2xl font-bold text-black mr-1 mt-2 leading-6">26</p>
            <p className="leading-2 text-xs mt-2 font-bold text-heading">
              people
              <br />
              are playing rn!
            </p>
          </div>
        </div>
        <div className="border-b-2 pb-8">
          <p className="uppercase mt-8 mb-6 text-base font-bold text-heading">play now</p>
          <Button type="button" textColor="white" bgColor="main-indigo" className="w-104 h-20 mb-6">
            START PvP GAME
          </Button>
        </div>
        <div className="pb-8">
          <p className="uppercase mt-8 mb-12 text-base font-bold text-heading">statistics</p>
          <UnavailabilitySVG className="flex mx-auto" />
          <p className="mx-auto text-center w-80 font-bold text-base text-in">
            Stats are unavailable at the moment, sorry for that
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
