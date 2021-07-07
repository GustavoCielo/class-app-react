import { useState } from "react";
import {
  AsideContainer,
  AsideMainContainerImage,
  AsideBottomContainerImage,
  AsideTopContainerImage,
} from "./styles";
import { AiOutlineHome, AiTwotoneHome } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { IoIosAlbums, IoIosSettings, IoMdSettings } from "react-icons/io";
import { BiBookReader } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { useHistory } from "react-router";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Aside = () => {
  const [inHome, setInHome] = useState(true);
  const [inMessage, setInMessage] = useState(false);
  const [inCourse, setInCourse] = useState(false);
  const [inBooking, setInBooking] = useState(false);
  const [inSettings, setInSettings] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AsideContainer>
      <AsideTopContainerImage
        className="figure-top"
        onClick={() => {
          sendTo();
        }}
      ></AsideTopContainerImage>
      <AsideMainContainerImage>
        {inHome ? (
          <AiOutlineHome
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></AiOutlineHome>
        ) : (
          <AiTwotoneHome
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></AiTwotoneHome>
        )}
        {inMessage ? (
          <BiMessageDetail
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></BiMessageDetail>
        ) : (
          <MdMessage
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></MdMessage>
        )}
        {inCourse ? (
          <IoIosAlbums
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></IoIosAlbums>
        ) : (
          <IoIosAlbums
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></IoIosAlbums>
        )}
        {inBooking ? (
          <BiBookReader
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></BiBookReader>
        ) : (
          <FaBookReader
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></FaBookReader>
        )}
        {inSettings ? (
          <IoIosSettings
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></IoIosSettings>
        ) : (
          <IoMdSettings
            className="figure-aside"
            onClick={() => {
              sendTo();
            }}
          ></IoMdSettings>
        )}
      </AsideMainContainerImage>
      <AsideBottomContainerImage>
        <RiLogoutBoxRLine
          className="figure-bottom"
          onClick={() => {
            sendTo();
          }}
        ></RiLogoutBoxRLine>
      </AsideBottomContainerImage>
    </AsideContainer>
  );
};

export default Aside;
