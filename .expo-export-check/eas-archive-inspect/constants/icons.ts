import activity from "../assets/icons/activity.png";
import add from "../assets/icons/add.png";
import adobe from "../assets/icons/adobe.png";
import back from "../assets/icons/back.png";
import canva from "../assets/icons/canva.png";
import claude from "../assets/icons/claude.png";
import dropbox from "../assets/icons/dropbox.png";
import figma from "../assets/icons/figma.png";
import github from "../assets/icons/github.png";
import home from "../assets/icons/home.png";
import medium from "../assets/icons/medium.png";
import menu from "../assets/icons/menu.png";
import notion from "../assets/icons/notion.png";
import openai from "../assets/icons/openai.png";
import plus from "../assets/icons/plus.png";
import setting from "../assets/icons/setting.png";
import spotify from "../assets/icons/spotify.png";
import wallet from "../assets/icons/wallet.png";

import baby from "../assets/icons/baby.png";
import bell from "../assets/icons/bell.png";
import bookmark from "../assets/icons/bookmark.png";
import eyeHide from "../assets/icons/eye-hide.png";
import eye from "../assets/icons/eye.png";
import home2 from "../assets/icons/home2.png";
import home3 from "../assets/icons/home3.png";
import hospital from "../assets/icons/hospital.png";
import info from "../assets/icons/info.png";
import leftArrow from "../assets/icons/left-arrow.png";
import logout from "../assets/icons/logout.png";
import menu2 from "../assets/icons/menu2.png";
import info2 from "../assets/icons/more-information.png";
import play from "../assets/icons/play.png";
import plus2 from "../assets/icons/plus2.png";
import profile from "../assets/icons/profile.png";
import rightArrow from "../assets/icons/right-arrow.png";
import search from "../assets/icons/search.png";
import upload from "../assets/icons/upload.png";

export const icons = {
  home,
  wallet,
  setting,
  activity,
  add,
  back,
  menu,
  plus,
  notion,
  dropbox,
  openai,
  adobe,
  medium,
  figma,
  spotify,
  github,
  claude,
  canva,
  baby,
  hospital,
  home2,
  info2,
  info,
  play,
  bookmark,
  home3,
  plus2,
  profile,
  leftArrow,
  menu2,
  search,
  upload,
  rightArrow,
  logout,
  eyeHide,
  eye,
  bell,
} as const;

export type IconKey = keyof typeof icons;
