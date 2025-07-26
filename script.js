const questions = [
      //câu 1
      { question: "你喜欢我吗？", answers: ["有点喜欢", "挺喜欢的", "非常非常喜欢"] },
      //câu 2
      { question: "你最喜欢我哪一点？", answers: ["漂亮", "温柔", "所有一切"] },
      //câu 3
      { question: "我在你眼里是什么？", answers: ["女朋友", "一辈子都来烦你的对象", "比你自己还要在乎的人"] },
      //câu 4
      { question: "当我生气时，你会想什么，感觉怎样？", answers: ["自责并且想立刻道歉", "要怎么哄这个麻烦的小宝宝呢", "肯定你又笨了"] },
      //câu 5
      { question: "如果一天没和我说话你会怎么样？", answers: ["心里空空的", "感觉……好像缺了点什么", "脑子里全是我的身影"] },
      //câu 6
      { question: "如果自能选一个，你会选什么？", answers: ["金钱", "名望", "那个默默关心你的人（嘿嘿……就是我啦）"] },
      //câu 7
      { question: "如果我是公主，那你会是什么？", answers: ["王子", "护卫", "一直关心我的人"] },
      //câu 8
      { question: "你每天会想我多少次？", answers: ["数不过来", "只知道…从没忘记过", "每一次心跳"] },
      //câu 9
      { question: "你想我叫你什么呀？", answers: ["男朋友，大笨蛋", "宝宝，宝贝", "你的名字"] },
      //câu 10
      { question: "每次听到我的声音，你会有什么感觉", answers: ["有点刺耳，勉强接受", "心里小鹿乱撞", "一整天都忍不住傻笑"] },
      //câu 11
      { question: "如果我是一个梦，你会？", answers: ["每天都睡觉来见我", "根本不敢醒来", "记下来每天都要回忆"] },
      //câu 12
      { question: "每当我说“我没事，不用担心我”的时候，你会怎么想？", answers: ["肯定是出了问题了", "我在等你来哄我", "应该是真的没事吧"] },
      //câu 13
      { question: "如果我做了以下事情，哪一件最让你吃醋？", answers: ["给别人发信息好笑嘻嘻的", "夸某个男生帅", "不回复你的消息"] },
      //câu 14
      { question: "如果我很久不回复你的信息（比如1-3天），你会？", answers: ["一直发信息找我", "默默等我的消息", "直接不理我了"] },
      //câu 15
      { question: "你还记得你的前女友吗？", answers: ["超级记得", "记得一点点", "也算记得"] },
      //câu 16
      { question: "每次我“无理取闹”，你会？", answers: ["习惯了，哄哄就好了", "担心我到底在生什么气", "觉得又好笑又可爱"] },
      //câu 17
      { question: "如果我忘了你的生日，你会？", answers: ["找借口惩罚我并让我补偿", "虽然有点难过，但还是喜欢我", "嘴上说没关系，心里却默默难过"] },
      //câu 18
      { question: "你还记得第一次和第二次表白的日子吗？ \n （其实如果你不想记也没关系，但对我来说，从认识你开始的那些日子都很值得被珍惜，也值得被记住）", answers: ["2025年4月24日 和 2025年5月20日", "2025年4月22日 和 2025年5月21日", "跳过"] },
      //câu 19
      { question: "我们在一起是哪一天啊?", answers: ["2025年7月2日", "2025年7月3日", "2025年7月4日"] },
      // câu 20
      { question: "你还记得今天是什么日子吗？", answers: ["不太记得，也没怎么在意", "一个纪念日", "就一个普通日子"] }];


    const popupByAnswer = {
      //câu 1
      "0-0": { msg: "只是有点喜欢吗？人家会难过的哦 😢", img: "Stickers/sticker0-0.gif" },
      "0-1": { msg: "嗯...这样也可以啦 😚", img: "Stickers/sticker0-1.gif" },
      "0-2": { msg: "我超级喜欢你哦 🥰", img: "Stickers/sticker0-2.gif" },

      //câu 2
      "1-0": { msg: "原来只是喜欢外貌吗 😍", img: "Stickers/sticker1-0.gif" },
      "1-1": { msg: "有时候我也不太温柔哦 🫶", img: "Stickers/sticker1-1.gif" },
      "1-2": { msg: "哎呀，原来你是全方面喜欢我呀 💖", img: "Stickers/sticker1-2.gif" },

      //câu 3
      "2-0": { msg: "听到‘女朋友’这词心跳加速啦 💓", img: "Stickers/sticker2-0.gif" },
      "2-1": { msg: "原来你也觉得我烦啊 🙈", img: "Stickers/sticker2-1.gif" },
      "2-2": { msg: "好感动啊，居然比你自己还在乎我 🥺", img: "Stickers/sticker2-2.gif" },

      //câu 4
      "3-0": { msg: "知道道歉就乖啦，不过我还是希望你多哄哄我、多宠宠我哦 💖", img: "Stickers/sticker3-0.gif" },
      "3-1": { msg: "你还是觉得我烦呀。那你被罚了，想个办法哄哄你的小宝贝 🤗", img: "Stickers/sticker3-1.gif" },
      "3-2": { msg: "你真是个大笨蛋 😳", img: "Stickers/sticker3-2.gif" },
      
      //câu 5
      "4-0": { msg: "觉得空虚就不许冷落我哦 🙈", img: "Stickers/sticker4-0.gif" },
      "4-1": { msg: "我知道你缺什么……缺的就是我 🫶", img: "Stickers/sticker4-1.gif" },
      "4-2": { msg: "想我就赶紧来找我呀 💕", img: "Stickers/sticker4-2.gif" },

      //câu 6
      "5-0": { msg: "选金钱我就生气了啦 😤", img: "Stickers/sticker5-0.gif" },
      "5-1": { msg: "没我在身边要名望干嘛呢 😏", img: "Stickers/sticker5-1.gif" },
      "5-2": { msg: "我就知道你会选我嘿嘿 💕", img: "Stickers/sticker5-2.gif" },

      //câu 7
      "6-0": { msg: "王子要懂得宠公主哦 😎", img: "Stickers/sticker6-0.gif" },
      "6-1": { msg: "护卫要好好保护我哦 💪", img: "Stickers/sticker6-1.gif" },
      "6-2": { msg: "关心我的人要懂得宠我、保护我，还不能让我伤心哦 🥰", img: "Stickers/sticker6-2.gif" },

      //câu 8
      "7-0": { msg: "数不清是因为心被我偷走啦 💘", img: "Stickers/sticker7-0.gif" },
      "7-1": { msg: "从来没忘记，说明你很喜欢我哦 😚", img: "Stickers/sticker7-1.gif" },
      "7-2": { msg: "每次心跳都想着我，太浪漫啦 💓", img: "Stickers/sticker7-2.gif" },

      //câu 9
      "8-0": { msg: "你是我男朋友也是我的大笨蛋  😚", img: "Stickers/sticker8-0.gif" },
      "8-1": { msg: "这样叫你我会有点害羞的啦 💓", img: "Stickers/sticker8-1.gif" },
      "8-2": { msg: "我不知道中文该怎么叫你，如果你告诉我，我就照着叫 💗", img: "Stickers/sticker8-2.gif" },

      //câu 10
      "9-0": { msg: "我的声音不好听吗？那我下次不发语音了 😡", img: "Stickers/sticker9-0.gif" },
      "9-1": { msg: "原来我的声音这么有魅力呀 💓", img: "Stickers/sticker9-1.gif" },
      "9-2": { msg: "别傻笑一整天哦 😚", img: "Stickers/sticker9-2.gif" },

      //câu 11
      "10-0": { msg: "睡太多可不好哦 😚", img: "Stickers/sticker10-0.gif" },
      "10-1": { msg: "你要醒着陪我聊天啦 😉", img: "Stickers/sticker10-1.gif" },
      "10-2": { msg: "每天都要记得我，对吧 😁", img: "Stickers/sticker10-2.gif" },

      //câu 12
      "11-0": { msg: "有时候确实是发生了什么事，所以特别需要你的关心 💗", img: "Stickers/sticker11-0.gif" },
      "11-1": { msg: "其实我很想被你哄哄呢 🫶", img: "Stickers/sticker11-1.gif" },
      "11-2": { msg: "你要是不管我，我可要生气啦 😤", img: "Stickers/sticker11-2.gif" },

      //câu 13
      "12-0": { msg: "我只和你聊天，没和别人聊哦 💘", img: "Stickers/sticker12-0.gif" },
      "12-1": { msg: "偶尔就是想让你吃点小醋，然后再来哄你 😚", img: "Stickers/sticker12-1.gif" },
      "12-2": { msg: "怎么能不回复男朋友的消息呢 💓", img: "Stickers/sticker12-2.gif" },

      //câu 14
      "13-0": { msg: "你这么找我，我当然会回复你啦 😍", img: "Stickers/sticker13-0.gif" },
      "13-1": { msg: "你等得有点久了，因为我可能在独自消化情绪，有时只是希望你多哄我一下 😊", img: "Stickers/sticker13-1.gif" },
      "13-2": { msg: "那不如分手好了 😔", img: "Stickers/sticker13-2.gif" },

      //câu 15
      "14-0": { msg: "她和你谈了三年呢，你心里应该还忘不了她吧 😔", img: "Stickers/sticker14-0.gif" },
      "14-1": { msg: "记得一点点很正常啦，毕竟她也是你过去的一部分啊 😚", img: "Stickers/sticker14-1.gif" },
      "14-2": { msg: "看来还有点放不下哦 🙁 ", img: "Stickers/sticker14-2.gif" },

      //câu 16
      "15-0": { msg: "如果你只是勉强哄我，那就不用啦 😔", img: "Stickers/sticker15-0.gif" },
      "15-1": { msg: "有时候无理取闹只是想被你关心和哄哄 💕", img: "Stickers/sticker15-1.gif" },
      "15-2": { msg: "觉得我可爱但也要哄我哦 🫠", img: "Stickers/sticker15-2.gif" },

      //câu 17
      "16-0": { msg: "我才不会给你这个机会呢，因为我才不会忘记我男朋友的生日 💘", img: "Stickers/sticker16-0.gif" },
      "16-1": { msg: "你这么喜欢我，我怎么舍得忘记你的生日呢 😚", img: "Stickers/sticker16-1.gif" },
      "16-2": { msg: "不用一个人默默难过，我会哄你开心呀 💓", img: "Stickers/sticker16-2.gif" },

      //câu 18
      "17-0": { msg: "记性真好呀，超喜欢你哟  😘", img: "Stickers/sticker17-0.gif" },
      "17-1": { msg: "可惜答错啦，不过没关系，让我再提醒你一次，让你记得更牢 🤗", img: "Stickers/sticker17-1.gif" },
      "17-2": { msg: "好吧！ 我们继续 😔", img: "Stickers/sticker17-2.gif" },

      //câu 19
      "18-0": { msg: "天哪，这么特别的日子你居然不记得 🙃", img: "Stickers/sticker18-0.gif" },
      "18-1": { msg: "你记对啦，恭喜我们在一起啦 💕", img: "Stickers/sticker18-1.gif" },
      "18-2": { msg: " 天哪，这么特别的日子你居然不记得 🙃", img: "Stickers/sticker18-0.gif" },

      //câu 20
      "19-0": { msg: "你太粗心啦 😿", img: "Stickers/sticker19-0.gif" },
      "19-1": { msg: "什么纪念日啊，你知道吗", img: "Stickers/sticker19-1.gif" },
      "19-2": { msg: "我已经难过啦，你快来哄我 🙁", img: "Stickers/sticker19-2.gif" },
    };

    let current = 0; 
let userAnswers = [];

window.onload = () => {
  const title = document.getElementById("start-title");
  const subtitle = document.getElementById("start-subtitle");

  typeWriter(title, "💖 点击开始爱情小游戏。 💖", 80, () => {
    typeWriter(subtitle, "注意啦：请认真思考后再选择答案哦，因为题目里可是有陷阱的", 40);
  });
};

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  questionElement.classList.add("fade-in");
  optionsElement.classList.add("fade-in");

  playMusic();
  showQuestion(0);
}

function showQuestion(index) {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  // Bắt đầu fade-out
  questionElement.classList.remove("fade-in");
  optionsElement.classList.remove("fade-in");
  questionElement.classList.add("fade-out");
  optionsElement.classList.add("fade-out");

  // Sau khi fade-out hoàn tất, thay nội dung và fade-in lại
  setTimeout(() => {
    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, answerIndex) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.onclick = () => handleAnswer(index, answerIndex);
      optionsElement.appendChild(button);
    });

    // Bắt đầu fade-in
    questionElement.classList.remove("fade-out");
    optionsElement.classList.remove("fade-out");
    questionElement.classList.add("fade-in");
    optionsElement.classList.add("fade-in");
  }, 300); // thời gian tương ứng với transition CSS (0.5s)
}

function showPopup(questionIndex, answerIndex) {
  const key = `${questionIndex}-${answerIndex}`;
  const popupData = popupByAnswer[key] || { msg: "超喜欢你啦 💕", img: "sticker3.gif" };

  userAnswers.push({ questionIndex, answerIndex });

  document.getElementById("popup-msg").innerText = popupData.msg;
  document.getElementById("popup-img").src = popupData.img;
  document.getElementById("popup").style.display = "flex";
  popup.classList.add("show");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  nextQuestion();
  popup.classList.remove("show");
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
 const questionEl = document.getElementById("question");
const resultEl = document.getElementById("result");
const optionsEl = document.getElementById("options");

optionsEl.innerHTML = "";
typeWriter(questionEl, "结束啦～ 💕", 80, () => {
  typeWriter(resultEl, "谢谢你坚持玩到最后，恭喜我们在一起满一个月啦～ <br> 希望你以后也一直喜欢我、宠我哦。好喜欢你呀 💗", 40);
});


    // Hiển thị kết quả đã chọn
    const summary = document.getElementById("final-summary");
    summary.innerHTML = "<h3>这是你的回答结果哦 🥰（你要截图发给我看哦）</h3>";

    userAnswers.forEach(({ questionIndex, answerIndex }, idx) => {
      const q = questions[questionIndex];
      const aText = q.answers[answerIndex];
      const key = `${questionIndex}-${answerIndex}`;
      const popup = popupByAnswer[key] || { msg: "", img: "" };

      summary.innerHTML += `
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: #fff0f5; border-radius: 12px;">
          <strong>第 ${idx + 1} 题:</strong> ${q.question}<br/>
          ➤ <em>你选:</em> ${aText}<br/>
          ${popup.img ? `<img src="${popup.img}" alt="sticker" style="width: 80px; margin-top: 0.5rem;" /><br/>` : ""}
          <small>${popup.msg}</small>
        </div>
      `;
    });

    summary.style.display = "block";

    // 🎉 Pháo giấy lặp liên tục không ngừng
showConfettiLoop();

  }
}

function playMusic() {
  const music = document.getElementById("bg-music");
  const musicBtn = document.querySelector(".music-btn");

  if (music.paused) {
    music.play().catch(err => console.log("Không thể phát nhạc:", err));
    musicBtn.innerText = "🔇 关音乐";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 开音乐";
  }
}

function handleAnswer(questionIndex, answerIndex) {
  const key = `${questionIndex}-${answerIndex}`;
  if (popupByAnswer[key]) {
    showPopup(questionIndex, answerIndex);
  } else {
    userAnswers.push({ questionIndex, answerIndex });
    nextQuestion();
  }
}

// 🎉 Hàm pháo giấy
function showConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

// pháo giấy lặp liên tục
function showConfettiLoop() {
  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0.6,
    decay: 0.9,
    startVelocity: 30,
    zIndex: 9999,
  };

  setInterval(() => {
    confetti(
      Object.assign({}, defaults, {
        particleCount: 40,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      })
    );
  }, 500); // cứ mỗi 0.5 giây bắn 1 đợt
}

function typeWriter(element, text, speed = 50, callback) {
  element.innerHTML = '';
  let i = 0;

  function type() {
    // Nếu gặp thẻ HTML, chèn cả thẻ thay vì từng ký tự
    if (text[i] === '<') {
      const endTag = text.indexOf('>', i);
      if (endTag !== -1) {
        element.innerHTML += text.slice(i, endTag + 1);
        i = endTag + 1;
      }
    } else {
      element.innerHTML += text[i];
      i++;
    }

    if (i < text.length) {
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}
