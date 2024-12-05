// rgb(29, 155, 240)

window.XtoTwitter = function () {
  if (document.title.lastIndexOf("X") != -1) {
    document.title = document.title.slice(0, document.title.length - 1);
    document.title += " Twitter";
  }
  if (document.title.indexOf("Xユーザーの") != -1) {
    document.title = document.title.replace("Xユーザーの", "Twitterユーザーの");
  }

  var reply1 = document.getElementsByClassName(
    "public-DraftEditorPlaceholder-inner"
  );
  for (var elem of reply1) {
    if (elem.textContent) {
      const indexes = [
        ["Post your reply!", "返信をツイート"],
        ["返信をポスト", "返信をツイート"],
        ["別のポストを追加", "別のツイートを追加"],
      ];
      for (let i = 0; i < indexes.length; i++) {
        if (elem.textContent.indexOf(indexes[i][0]) != -1) {
          if (elem.parentElement.getAttribute("data-testid") != "tweetText") {
            // const reg = new RegExp(`/${indexes[i][0]}/g, ${indexes[i][1]}`);
            elem.textContent = elem.textContent.replace(
              indexes[i][0],
              indexes[i][1]
            );
            break;
          }
        }
      }
    }
  }

  var class1 = document.getElementsByClassName(
    "css-1jxf684 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-b88u0q"
  );
  for (var elem of class1) {
    if (elem.textContent) {
      const indexes = [
        ["投稿する", "ツイートする"],
        ["You reposted", "リツイート済み"],
        ["you reposted", "リツイート済み"],
        ["Reposts", "件のリツイート"],
        ["reposts", "件のリツイート"],
        ["Repost", "件のリツイート"],
        ["repost", "件のリツイート"],
        ["Posts", "件のツイート"],
        ["posts", "件のツイート"],
        ["Post", "ツイートする"],
        ["post", "ツイートする"],
        ["Circle", "Twitterサークル"],
        ["circle", "Twitterサークル"],
        ["さんがリポスト", "さんがリツイート"],
        ["リポスト済み", "リツイート済み"],
        ["件のポストを表示", "件のツイートを表示"],
        ["件のポスト", "件のツイート"],
        ["ポスト", "ツイート"],
        ["リポスト", "リツイート"],
        ["からXを利用しています", "からTwitterを利用しています"],
      ];
      for (let i = 0; i < indexes.length; i++) {
        if (elem.textContent.indexOf(indexes[i][0]) != -1) {
          if (elem.parentElement.getAttribute("data-testid") != "tweetText") {
            // const reg = new RegExp(`/${indexes[i][0]}/g, ${indexes[i][1]}`);
            elem.textContent = elem.textContent.replace(
              indexes[i][0],
              indexes[i][1]
            );
            break;
          }
        }
      }
    }
  }

  var class2 = document.getElementsByClassName(
    //"css-901oao css-1hf3ou5 r-14j79pv r-1tl8opc r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0"
    // "css-1qaijid r-bcqeeo r-qvutc0 r-1tl8opc"
    "css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc"
  );
  for (var elem of class2) {
    if (elem.textContent) {
      const indexes = [
        ["Posts", "件のツイート"],
        ["posts", "件のツイート"],
        ["Post", "件のツイート"],
        ["post", "件のツイート"],
        ["件のポスト", "件のツイート"],
        ["ポストする", "ツイートする"],
      ];
      for (let i = 0; i < indexes.length; i++) {
        if (elem.textContent.indexOf(indexes[i][0]) != -1) {
          if (elem.parentElement.getAttribute("data-testid") != "tweetText") {
            // const reg = new RegExp(`/${indexes[i][0]}/g, ${indexes[i][1]}`);
            elem.textContent = elem.textContent.replace(
              indexes[i][0],
              indexes[i][1]
            );
            break;
          }
        }
      }
    }
  }

  var class3 = document.getElementsByClassName(
    // "css-1rynq56 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-16dba41"
    "css-146c3p1 r-bcqeeo r-qvutc0 r-1tl8opc r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci"
  );
  for (var elem of class3) {
    if (elem.textContent) {
      const indexes = [
        ["投稿する", "ツイートする"],
        ["You reposted", "リツイート済み"],
        ["you reposted", "リツイート済み"],
        ["Reposts", "件のリツイート"],
        ["reposts", "件のリツイート"],
        ["Repost", "件のリツイート"],
        ["repost", "件のリツイート"],
        // ["Repost", "リツイート"],
        // ["repost", "リツイート"],
        ["Posts", "件のツイート"],
        ["posts", "件のツイート"],
        ["Post", "ツイートする"],
        ["post", "ツイートする"],
        ["Circle", "Twitterサークル"],
        ["circle", "Twitterサークル"],
        ["ポスト", "ツイート"],
        ["リポスト", "リツイート"],
        ["リポスト済み", "リツイート済み"],
        ["件のポストを表示", "件のツイートを表示"],
        ["件のポスト", "件のツイート"],
        ["からXを利用しています", "からTwitterを利用しています"],
      ];
      for (let i = 0; i < indexes.length; i++) {
        if (elem.textContent.indexOf(indexes[i][0]) != -1) {
          if (elem.parentElement.getAttribute("data-testid") != "tweetText") {
            // const reg = new RegExp(`/${indexes[i][0]}/g, ${indexes[i][1]}`);
            elem.textContent = elem.textContent.replace(
              indexes[i][0],
              indexes[i][1]
            );
            break;
          }
        } else if (elem.textContent == "固定") {
          elem.textContent = "固定されたツイート";
        }
      }
    }
  }

  var class4 = document.getElementsByClassName(
    "css-146c3p1 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-b88u0q"
  );
  for (var elem of class4) {
    if (elem.textContent) {
      if (elem.textContent == "固定") {
        elem.textContent = "固定されたツイート";
      }
    }
  }

  var class5 = document.getElementsByClassName(
    "css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-n6v787 r-1cwl3u0 r-16dba41"
  );
  for (var elem of class5) {
    if (elem.textContent) {
      const indexes = [
        ["Posts", "件のツイート"],
        ["posts", "件のツイート"],
        ["Post", "件のツイート"],
        ["post", "件のツイート"],
        ["ポスト", "ツイート"],
        ["リポスト", "リツイート"],
      ];
      for (let i = 0; i < indexes.length; i++) {
        if (elem.textContent.indexOf(indexes[i][0]) != -1) {
          if (elem.parentElement.getAttribute("data-testid") != "tweetText") {
            // const reg = new RegExp(`/${indexes[i][0]}/g, ${indexes[i][1]}`);
            elem.textContent = elem.textContent.replace(
              indexes[i][0],
              indexes[i][1]
            );
            break;
          }
        }
      }
    }
  }

  var class6 = document.getElementsByClassName(
    "r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc"
  );
  for (var elem of class6) {
    if (elem.textContent) {
      const indexes = [
        ["ポストさん", "ポスト"],
        ["Post", "ツイート"],
        ["post", "ツイート"],
        ["ポスト", "ツイート"],
      ];
      for (let i = 0; i < indexes.length; i++) {
        if (elem.textContent.indexOf(indexes[i][0]) != -1) {
          if (elem.parentElement.getAttribute("data-testid") != "tweetText") {
            // const reg = new RegExp(`/${indexes[i][0]}/g, ${indexes[i][1]}`);
            elem.textContent = elem.textContent.replace(
              indexes[i][0],
              indexes[i][1]
            );
            break;
          }
        }
      }
    }
  }

  var class7 = document.getElementsByClassName(
    "css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1ceczpf r-lp5zef r-3o4zer r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"
  );
  for (var elem of class7) {
    if (
      elem.href == "/i/premium_sign_up" ||
      elem.href == "https://x.com/i/premium_sign_up"
    ) {
      elem.remove();
    }
  }

  var class8 = document.getElementsByClassName(
    "css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-19yznuf r-64el8z r-1fkl15p r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"
  );
  for (var elem of class8) {
    elem.style.backgroundColor = "rgb(29, 155, 240)";
  }

  var class9 = document.getElementsByClassName(
    "css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1cwvpvk r-2yi16 r-1qi8awa r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l"
  );
  for (var elem of class9) {
    elem.style.backgroundColor = "rgb(29, 155, 240)";
  }

  var class10 = document.getElementsByClassName(
    "css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1cwvpvk r-2yi16 r-1qi8awa r-3pj75a r-o7ynqc r-6416eg r-icoktb r-1ny4l3l"
  );
  for (var elem of class10) {
    elem.style.backgroundColor = "rgb(29, 155, 240)";
  }

  var tag1 = document.getElementsByClassName(
    //"css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-19yznuf r-64el8z r-1ny4l3l r-o7ynqc r-6416eg r-lrvibr"
    //"r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"
    "r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"
  );
  const logoUrl = chrome.runtime.getURL("./images/TwitterLogo.png");
  for (var elem of tag1) {
    elem.innerHTML = "";
    elem.style.textAlign = "center";
    let logo = document.createElement("img");
    logo.src = logoUrl;
    logo.setAttribute("width", 29);
    logo.setAttribute("height", 24);
    logo.style.display = "block";
    logo.style.margin = "auto";
    elem.parentNode.insertBefore(logo, elem.nextElementSibling);
    elem.remove();
  }

  const icoUrl = chrome.runtime.getURL("./images/TwitterLogo.ico");
  var icon1 = document.getElementsByTagName("link");
  for (var elem of icon1) {
    if (elem.rel == "shortcut icon") {
      elem.type = "image/png";
      elem.href = icoUrl;
    }
  }

  const loading1 = document.getElementsByClassName(
    "r-1p0dtai r-18jsvk2 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b"
  );
  for (var elem of loading1) {
    elem.innerHTML = "";
    elem.style.textAlign = "center";
    let logo = document.createElement("img");
    logo.src = logoUrl;
    logo.setAttribute("width", 58);
    logo.setAttribute("height", 48);
    logo.style.display = "block";
    logo.style.margin = "auto";
    elem.appendChild(logo);
  }
};

window.onload = function () {
  window.XtoTwitter();
  setTimeout(() => {
    setInterval(window.XtoTwitter, 100);
  }, 500);
};
