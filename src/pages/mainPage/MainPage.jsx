import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import { ReactComponent as PlayingGuysSVG } from '../../static/images/svg/playingGuys.svg';
import { ReactComponent as UnavailabilitySVG } from '../../static/images/svg/unavailability.svg';
import spot from '../../static/images/svg/spot.svg';
import './MainPage.scss';
import Button from '../../components/button';

function MainPage() {
  const lang = useSelector(state => state.app.locale);

  return (
    <div className="h-auto lg:flex">
      <div
        className="block lg:w-1/2 sm:h-screen bg-local flex flex-col justify-between p-10"
        style={{
          backgroundImage: `url(${spot})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '.5rem',
          backgroundPositionY: '-14rem',
          backgroundSize: '35rem',
        }}
      >
        <div className="flex">
          <p
            className={`w-1/2 text-heading text-${
              lang === 'ru' ? '5xl' : '6xl'
            } font-bold leading-tight pl-10 `}
          >
            <FormattedMessage
              id="main.title"
              defaultMessage="Play.{break}Learn.{break}Win."
              values={{ break: <br /> }}
            />
          </p>
          <p className="w-1/2 pl-12 py-3 text-input text-base font-medium border-l-2 my-auto ">
            <FormattedMessage
              id="main.desc"
              defaultMessage="An exciting intellectual game, where you can test your own knowledge in various fields. You can also play over a local network or over the Internet with each other!"
            />
          </p>
        </div>
        <div>
          <PlayingGuysSVG className="mx-auto px-10" />
        </div>
      </div>
      <div className="block lg:w-2/3 p-10 flex flex-col bg-main-gray h-auto">
        <div className="flex justify-between border-b-2 pb-8">
          <div className="flex">
            <p className="text-3xl font-bold text-heading uppercase">
              <FormattedMessage id="main.name" defaultMessage="svoya igra" />
            </p>
            <p className="online mt-5 ml-6 font-medium text-xs">online</p>
          </div>
          <div className="flex">
            <p className="text-2xl font-bold text-black mr-1 mt-2 leading-6">26</p>
            <p className="leading-2 text-xs mt-2 font-bold text-heading">
              <FormattedMessage
                id="main.people.online"
                defaultMessage="people <br /> are playing rn!"
                values={{
                  break: <br />,
                }}
              />
            </p>
          </div>
        </div>
        <div className="border-b-2 pb-8">
          <p className="uppercase mt-8 mb-6 text-base font-bold text-heading">
            <FormattedMessage id="main.play.now" defaultMessage="play now" />
          </p>
          <Button type="button" textColor="white" bgColor="main-indigo" className="w-104 h-20 mb-6">
            <FormattedMessage id="main.play.button" defaultMessage="START PvP GAME" />
          </Button>
        </div>
        <div className="pb-8">
          <p className="uppercase mt-8 mb-12 text-base font-bold text-heading">
            <FormattedMessage id="main.statistics" defaultMessage="statistics" />
          </p>
          <UnavailabilitySVG className="flex mx-auto" />
          <p className="mx-auto text-center w-80 font-bold text-base text-in">
            <FormattedMessage
              id="main.statistics.na"
              defaultMessage="Stats are unavailable at the moment, sorry for that"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
