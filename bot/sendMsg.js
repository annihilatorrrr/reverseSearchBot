var urlbase = require("../settings/settings.js").url;
var MESSAGE = require("../settings/settings.js").msg;
var idButtonName = require("../settings/settings.js").id_buttonName;
var idbaseArray = Object.keys(idButtonName);
var tools = require("../tools/tools.js");

var sendMsg = function(results, totalLength, bot, msg) {
  results = results || [];
  var chat_id = msg.from.id;
  var reply = msg.message_id;
  if (!results.length) {
    // console.log("Processing: nokori 0");
    return;
  } else {
    // console.log("Processing: nokori ", results.length);
  }
  totalLength = totalLength || totalLength;
  var element = results[0];
  var header = element.header;
  var data = element.data;
  var textarray = [];
  var text = "";
  var buttons = [];
  var innerbuttons = [];
  var innerbuttonsContainer = [];
  var markup;
  var number = totalLength - results.length + 1;
  var buttonName, urlPrefix, id;
  var restOfIds = tools.arraysInCommon(idbaseArray, Object.keys(data));

  if (data.pixiv_id !== undefined) {
    // 픽시브일 경우
    buttonName = idButtonName["pixiv_id"];
    urlPrefix = urlbase["pixiv_id"];
    id = data.pixiv_id;

    textarray = [
      number.toString() + "/" + totalLength.toString(), "|",
      "*Similarity:*", header.similarity + "%", "|",
      "*Title:*", data.title || "-", "|",
      "*by:*", data.member_name || data.creator || "-", "|",
      "[<Thumnail>](" + header.thumbnail + ")"
    ];
    text = textarray.join(" ");
    buttons = [
      [
        bot.inlineButton("Pixiv Link", {
          url: urlbase.pixiv_id + data.pixiv_id
        })
      ]
    ];
  } else if (restOfIds.length) {
  // pixiv_id를 제외한 XXX_id 유형이 있는 경우,
  // settings/settings.js의 url property를 참조하여 지정된 id 항목을 추출
    textarray = [
      number.toString() + "/" + totalLength.toString(), "|",
      "*Similarity:*", header.similarity + "%", "|",
      "*Title:*", data.title || "-", "|",
      "*by:*", data.member_name || data.creator || "-", "|",
      "[<Thumnail>](" + header.thumbnail + ")"
    ];
    text = textarray.join(" ");

    for (var j = 0; j < restOfIds.length; j++) {
      buttonName = idButtonName[restOfIds[j]];
      urlPrefix = urlbase[restOfIds[j]];
      id = data[restOfIds[j]];

      innerbuttonsContainer.push(
        bot.inlineButton(buttonName, {
          url: urlPrefix + id
        })
      );
    }
    for (var i = 0; i < innerbuttonsContainer.length; i++) {
      if (innerbuttons.length < 2){
        innerbuttons.push(innerbuttonsContainer[i]);
      } else {
        var target = innerbuttons;
        innerbuttons = [];
        innerbuttons.push(innerbuttonsContainer[i]);
        buttons.push(target);
      }
      if (i === innerbuttonsContainer.length - 1) {
        buttons.push(innerbuttons);
      }
    }
  } else {
    textarray = [
      number.toString() + "/" + totalLength.toString(), "|",
      "*Similarity:*", header.similarity + "%", "|",
      "*Title:*", data.title || "-", "|",
      "*by:*", data.member_name || data.creator || "-", "|",
      "[<Thumnail>](" + header.thumbnail + ")"
    ];
    text = textarray.join(" ");
  }

  markup = bot.inlineKeyboard(buttons);

  return bot.sendMessage(chat_id, text, {reply: reply, markup: markup, parse: "Markdown"})
  .then(function() {
    console.log('inner then');
    return sendMsg(results.slice(1), totalLength, bot, msg);
  });

};

module.exports = sendMsg;
