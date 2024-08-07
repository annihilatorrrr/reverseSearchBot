import { privateSettings as _privateSettings } from "./private.js";

export const privateSettings = _privateSettings;

export const urls = {
  sauceNao: "https://saucenao.com/search.php?",
  mal: "https://myanimelist.net/anime.php?",
  analUrl: "https://api2.amplitude.com/2/httpapi",
  pixiv_id: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=",
  danbooru_id: "https://danbooru.donmai.us/post/show/",
  gelbooru_id: "https://gelbooru.com/index.php?page=post&s=view&id=",
  sankaku_id: "https://chan.sankakucomplex.com/post/show/",
  "anime-pictures_id": "https://anime-pictures.net/pictures/view_post/",
  imdb_id: "https://www.imdb.com/title/",
  anidb_aid: "https://anidb.net/perl-bin/animedb.pl?show=anime&aid=",
  e621_id: "https://e621.net/post/show/",
  yandere_id: "https://yande.re/post/show/",
  drawr_id: "https://drawr.net/show.php?id=",
  da_id: "https://deviantart.com/view/",
  pawoo_id: "https://pawoo.net/@",
  bcy_id: "https://bcy.net/",
  url: "",
  /* wont add:
    seiga_id
    */
};

export const id_buttonName = {
  pixiv_id: "Pixiv",
  danbooru_id: "Danbooru",
  gelbooru_id: "Gelbooru",
  sankaku_id: "Sankaku",
  "anime-pictures_id": "Anime-Pictures",
  imdb_id: "IMDb",
  anidb_aid: "AniDB",
  e621_id: "e621",
  yandere_id: "yandere",
  drawr_id: "Drawr",
  da_id: "deviantArt",
  pawoo_id: "Pawoo",
  bcy_id: "BCY",
  url: "",

  loading: "🍝",
};

export const msgs = {
  loading: "<i>Pouring some sauce on it...</i>",
  zeroResult:
    "No sauce found; this bot works only with uncropped anime/2d art.",
  help:
    "Send me an image, a sticker, an image file or a GIF to find its source Right Nao.\n\n" +
    "<i>If I'm in a group, reply to a media with /sauce@" +
    privateSettings.botName +
    " or /source@" +
    privateSettings.botName +
    "</i>",
  reachLimitation: "The request limit has reached, try again after some time.",
  unknownError: "Oopsie doopsie, I did a fucky wucky",
  invalidFileId: "<i>Invalid file</i>",
  keywordHelp:
    "Don't just click me like that. \n\nPM me a pic, GIF, a sticker, or an image file\n\nIf I'm in a group, reply with /source@" +
    privateSettings.botName +
    " or /sauce@" +
    privateSettings.botName +
    " to find its source.",
  privacyPolicy:
    "The bot Reverse Search Bot, counts unique telegram user IDs for analytics.",
};

export const floodProtect = {
  message: "aaaaah, slow down...",
  interval: 30,
  msgLimit: 3,
};

export const sauceNaoParams = {
  db: 999,
  // output_type: 2,
  testmode: 1,
  numres: 5,
  minSimilarity: 60,
  tolerance: 7,
};

export const keywords = /^(sauce|source|what\?)$/i;
export const commands = [
  "sauce",
  "source",
  "sauce@" + privateSettings.botName,
  "source@" + privateSettings.botName,
];
export const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.15";
