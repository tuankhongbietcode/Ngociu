// EDIT HERE: change the friend name, dates, password, letters, messages, and placeholders below.
const siteData = {
  friendName: "Tiểu Ngọc",
  nickname: "bé du học sinh",
  secretPassword: "banthan",
  departureDate: "2026-09-01T08:30:00+07:00",
  memories: [
    ["The day we met", "Ngày đầu", "Tụi mình lúc đó còn lịch sự dữ lắm, nói chuyện kiểu giữ hình tượng. Ai ngờ về sau hình tượng rớt sạch, chỉ còn lại một đống kỷ niệm mà nhắc lại là cười."],
    ["The first time we became close", "Một ngày rất thường", "Không có tiếng pháo hoa hay nhạc nền gì hết. Chỉ là tự nhiên thấy nói chuyện với Ngọc dễ, ở cạnh Ngọc nhẹ, rồi từ lúc nào Ngọc thành người tụi mình muốn kể đủ thứ trên đời."],
    ["Our stupidest memory", "Không tiện ghi ngày", "Có những chuyện ngu tới mức không nên để Internet biết. Nhưng tụi mình nhớ. Và Ngọc cũng nhớ. Chỉ cần một đứa nhắc lại là cả nhóm tự hiểu rồi cười như chưa từng trưởng thành."],
    ["The day we laughed too much", "Một buổi cười đau bụng", "Hôm đó chắc tụi mình chẳng làm gì vĩ đại, chỉ ngồi nói linh tinh rồi cười tới mức người ngoài nhìn vào cũng thấy khó hiểu. Nhưng đó là kiểu ngày sau này nhớ lại sẽ thấy thương."],
    ["The time we fought but still stayed", "Sau một lần khó chịu", "Tụi mình cũng có lúc không hiểu nhau, có lúc tự ái, có lúc im lặng. Nhưng điều quan trọng là không ai bỏ đi. Tụi mình chọn ở lại, chọn nói tiếp, chọn thương nhau tử tế hơn."],
    ["The day we knew you were leaving", "Ngày nghe tin Đài Loan", "Tụi mình vui cho Ngọc thật. Nhưng cũng có một khoảng lặng rất nhỏ trong lòng. Kiểu tự nhiên hiểu rằng từ nay muốn gặp nhau sẽ phải tính lịch, tính múi giờ, tính cả nỗi nhớ."],
    ["Today", "Hôm nay", "Hôm nay tụi mình làm website này để Ngọc có thứ mang theo mà không nặng vali. Một món quà nhỏ, hơi sến, hơi quê, nhưng đầy lòng của tụi mình."],
    ["The future", "Mai sau", "Mai sau tụi mình sẽ khác đi. Ngọc sẽ giỏi hơn, mạnh hơn, có thêm nhiều câu chuyện mới. Nhưng tụi mình mong trong một góc nào đó, tụi mình vẫn là tụi mình."],
  ],
  letters: [
    ["Open when you miss Vietnam", "Mở khi Ngọc nhớ Việt Nam", "Nhớ Việt Nam thì cứ nhớ cho đã. Nhớ đồ ăn, nhớ đường phố, nhớ tiếng xe, nhớ mấy buổi hẹn không cần lên kế hoạch. Ngọc không yếu đuối vì nhớ nhà đâu. Ngọc chỉ đang mang theo trong người một nơi đã thương Ngọc rất nhiều. Khi nhớ quá, nhắn tụi mình. Tụi mình có thể không ship được tô phở qua liền, nhưng có thể nghe Ngọc than rất chuyên nghiệp."],
    ["Open when you feel lonely", "Mở khi Ngọc thấy cô đơn", "Có những ngày ở một nơi mới, xung quanh đông người mà vẫn thấy một mình. Nếu ngày đó tới, Ngọc cứ thở chậm lại. Cô đơn không có nghĩa là không ai thương Ngọc. Nó chỉ là khoảng trống giữa nơi Ngọc đang đứng và những người đang nhớ Ngọc. Tụi mình vẫn ở đây, chỉ cách một cái tin nhắn."],
    ["Open when you are tired", "Mở khi Ngọc mệt", "Mệt thì nghỉ. Thật đó. Không cần biến mình thành siêu nhân du học sinh. Có ngày làm ít lại, ăn tử tế, ngủ một giấc, rồi mai tính tiếp. Tụi mình tự hào vì Ngọc cố gắng, nhưng tụi mình thương Ngọc hơn mọi thành tích."],
    ["Open when you pass your first exam", "Mở khi Ngọc qua kỳ thi đầu tiên", "Ê giỏi vậy trời. Tụi mình biết Ngọc làm được mà, nhưng vẫn phải nói cho đã: tự hào về Ngọc lắm. Đi mua món gì ngon ăn mừng đi, rồi chụp gửi tụi mình coi. Thành công của Ngọc ở xa vẫn là niềm vui rất gần của tụi mình."],
    ["Open when you fail at something", "Mở khi Ngọc thất bại", "Rớt một bài, làm sai một việc, bị chê, bị hụt hẫng, tất cả không định nghĩa Ngọc. Nó chỉ chứng minh là Ngọc đang thật sự sống, thật sự thử, thật sự bước ra khỏi vùng quen. Buồn một chút được. Khóc cũng được. Nhưng đừng gọi mình là đồ vô dụng, tụi mình không cho phép."],
    ["Open when you miss our jokes", "Mở khi Ngọc nhớ mấy trò nhảm", "Không có tụi mình chắc cuộc sống Ngọc bớt ồn, nhưng cũng bớt vui ha. Khi nhớ mấy câu đùa nội bộ vô tri, cứ mở nhóm chat lên spam một câu mật mã. Tụi mình sẽ hiểu, hoặc ít nhất sẽ giả bộ hiểu rồi cười tiếp."],
    ["Open when you feel like you are changing", "Mở khi Ngọc thấy mình đang đổi khác", "Ngọc được phép thay đổi. Đi xa, gặp người mới, học điều mới, lớn lên theo cách mới. Tụi mình không cần Ngọc giữ nguyên phiên bản cũ để tụi mình dễ thương. Tụi mình chỉ mong Ngọc vẫn tử tế với chính mình."],
    ["Open when it is your birthday", "Mở vào sinh nhật Ngọc", "Chúc mừng sinh nhật, đồ xa nhà. Năm nay có thể tụi mình không ngồi cạnh Ngọc để hát lệch tông, nhưng tụi mình vẫn chúc Ngọc một năm thật sáng. Mong Ngọc được thương đúng cách, ăn ngon, ngủ đủ, học ổn, cười nhiều, và luôn nhớ mình xứng đáng với những điều dịu dàng."],
    ["Open when you need courage", "Mở khi Ngọc cần can đảm", "Can đảm không phải là không sợ. Can đảm là sợ muốn xỉu nhưng vẫn bước thêm một bước nhỏ. Ngọc đã làm được rất nhiều bước như vậy rồi. Bước tiếp đi. Nếu run thì run, miễn là đừng đứng yên mãi."],
    ["Open when you come back to Vietnam", "Mở khi Ngọc về Việt Nam", "Về rồi thì báo trước để tụi mình chuẩn bị tinh thần ôm Ngọc, nghe Ngọc kể chuyện Đài Loan, và kéo Ngọc đi ăn bù. Tụi mình muốn thấy phiên bản mới của Ngọc, nhưng cũng muốn chào lại đứa bạn thân quen thuộc từng ngồi cười với tụi mình như chưa từng xa."],
  ],
  survivalGuide: [
    ["Khi nhớ đồ ăn Việt Nam", "Tìm quán Việt gần nhất, gọi món giống nhất có thể, rồi nhắn tụi mình chấm điểm qua ảnh. Nếu không giống thì mình gọi đó là trải nghiệm quốc tế."],
    ["Khi trời lạnh", "Mặc ấm trước khi cần người nhắc. Tụi mình không ở đó kéo khóa áo cho Ngọc, nhưng có thể mắng yêu qua tin nhắn rất đều."],
    ["Khi bài quá khó", "Chia nhỏ ra. Hỏi bạn, hỏi thầy cô, hỏi Google, rồi nghỉ năm phút. Không hiểu ngay không có nghĩa là không giỏi."],
    ["Khi thấy cô đơn", "Ra ngoài đi bộ một vòng, mua món gì ấm, gọi một người quen. Đừng để im lặng trong phòng làm mọi thứ nặng hơn."],
    ["Khi thành công", "Ăn mừng ngay. Đừng hạ thấp niềm vui của mình. Tụi mình muốn được nghe tin tốt của Ngọc, kể cả tin nhỏ xíu."],
    ["Khi bị lạc đường", "Bật bản đồ, hỏi người tử tế, giữ pin điện thoại. Lạc một đoạn không sao, miễn là Ngọc vẫn biết quay về."],
    ["Khi muốn bỏ cuộc", "Đừng quyết định vào lúc quá mệt. Ngủ một giấc, ăn một bữa, gọi tụi mình. Mai mình nghĩ tiếp."],
    ["Khi nhớ tụi mình", "Nhắn đi. Gọi đi. Gửi một cái ảnh xấu cũng được. Tụi mình luôn có chỗ trống cho Ngọc trong ngày của tụi mình."],
  ],
  messages: [
    { from: "Từ một đứa hay mít ướt", message: "Mình sẽ nhớ Ngọc nhiều, nhưng mình vui vì Ngọc đang đi tới một nơi có thể làm Ngọc lớn lên. Đi mạnh giỏi nha, nhưng đừng quên có tụi mình ở sau lưng." },
    { from: "Từ đứa chuyên chọc quê", message: "Qua đó nhớ ăn uống đàng hoàng. Đừng để tụi mình phải gọi video chỉ để kiểm tra tủ lạnh. Nhớ Ngọc nhưng mình nói ít thôi, giữ giá." },
    { from: "Từ tụi mình", message: "Có những tình bạn không cần gặp mỗi ngày mới là thân. Chỉ cần biết khi quay lại, mình vẫn có thể nói chuyện như chưa từng rời đi." },
  ],
  hugMessages: [
    "Tụi mình cũng nhớ Ngọc.",
    "Đi ăn chưa?",
    "Đừng buồn một mình.",
    "Mở camera call đi.",
    "Ngọc xa thôi, không mất.",
    "Nhớ Ngọc nhưng không nói nhiều đâu, ngại.",
  ],
  photos: [
    ["assets/photos/cover.jpg", "Ảnh bìa của tụi mình"],
    ["assets/photos/group-1.jpg", "Một ngày rất vui"],
    ["assets/photos/group-2.jpg", "Nhìn lại là cười"],
    ["assets/photos/memory-1.jpg", "Kỷ niệm để dành"],
    ["assets/photos/memory-2.jpg", "Một góc nhỏ thân quen"],
    ["assets/photos/funny-1.jpg", "Ảnh dìm placeholder"],
  ],
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const modal = $("#modal");
const modalContent = $("#modalContent");
let synthAudio = null;
let synthTimer = null;
let loveTimer = null;

function setText() {
  $$("[data-friend-name]").forEach((el) => (el.textContent = siteData.friendName));
  const date = new Date(siteData.departureDate);
  $("[data-departure-label]").textContent = date.toLocaleString("vi-VN", { dateStyle: "medium", timeStyle: "short" });
}

function openModal(html) {
  modalContent.innerHTML = html;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderTimeline() {
  $("#timeline").innerHTML = siteData.memories.map((item, index) => `
    <article class="timeline-item reveal">
      <div class="polaroid" style="--tilt:${index % 2 ? 2 : -2}deg">
        <div class="placeholder-photo">photo ${index + 1}</div>
      </div>
      <div>
        <p class="eyebrow">${item[1]}</p>
        <h3>${item[0]}</h3>
        <p>${item[2]}</p>
      </div>
    </article>
  `).join("");
}

function memoryHtml(title) {
  const gallery = siteData.photos.map(([src, caption], index) => `
    <figure class="polaroid">
      <div class="placeholder-photo" data-src="${src}">photo ${index + 1}</div>
      <figcaption>${caption}</figcaption>
    </figure>
  `).join("");
  const templates = {
    "Polaroid Photos": `<h2>Polaroid Photos</h2><div class="modal-gallery">${gallery}</div>`,
    "Dumb Screenshots": `<h2>Dumb Screenshots</h2><p>Khu này để Ngọc thả meme, ảnh chụp màn hình, tin nhắn vô tri và những thứ không nên công khai nhưng rất nên giữ.</p><div class="placeholder-photo">funny screenshot placeholder</div>`,
    "Voice Notes": `<h2>Voice Notes</h2><p>Đặt file vào <b>assets/voices</b> rồi sửa đường dẫn trong HTML này nếu muốn.</p><audio controls preload="none"><source src="assets/voices/voice-1.mp3" type="audio/mpeg"></audio>`,
    "Inside Jokes": `<h2>Inside Jokes</h2><ul><li>Câu nói chỉ tụi mình hiểu số 1.</li><li>Meme nội bộ không giải thích được.</li><li>Cái biệt danh mà Ngọc cấm nhưng tụi mình vẫn nhớ.</li></ul>`,
    "Things We Will Miss": `<h2>Things We Will Miss</h2><p>Tụi mình sẽ nhớ cách Ngọc xuất hiện trong những ngày rất bình thường, nhớ tiếng cười, nhớ mấy câu than thở, nhớ cả việc có một người để rủ đi ăn mà không cần giải thích quá nhiều.</p>`,
    "Tiny Promises": `<h2>Tiny Promises</h2><ul><li>Tụi mình sẽ nhắn Ngọc khi thấy món gì làm tụi mình nhớ Ngọc.</li><li>Ngọc vui hay buồn cũng được kể.</li><li>Gặp lại sẽ đi ăn một bữa thật dài.</li></ul>`,
    "Secret Letter": `<h2>Secret Letter</h2><p>Nhập password/nickname để mở thư bí mật.</p><form class="secret-form" id="secretForm"><input id="secretInput" placeholder="Password"><button class="primary-btn" type="submit">Open</button></form><p id="secretResult"></p>`,
    "Emergency Hug Button": `<h2>Emergency Hug Button</h2><p id="hugText">${randomHug()}</p><button class="primary-btn" id="newHugBtn" type="button">Gửi thêm một cái ôm</button>`,
    "Do not click": `<h2>Đã bảo đừng click rồi mà</h2><p>Đây là chỗ dành cho ảnh dìm huyền thoại. Tạm thời là placeholder để Ngọc tự thay bằng file <b>assets/photos/funny-1.jpg</b>.</p><div class="placeholder-photo">ảnh dìm cực mạnh</div>`,
  };
  return templates[title] || `<h2>${title}</h2><p>Đang chờ thêm kỷ niệm.</p>`;
}

function renderMemoryBox() {
  const items = ["Polaroid Photos", "Dumb Screenshots", "Voice Notes", "Inside Jokes", "Things We Will Miss", "Tiny Promises", "Secret Letter", "Emergency Hug Button", "Do not click"];
  const icons = ["▣", "☻", "♫", "※", "♡", "✓", "✉", "＋", "!"];
  $("#memoryGrid").innerHTML = items.map((title, index) => `
    <button class="memory-card reveal" type="button" data-open-memory="${title}">
      <span class="icon">${icons[index]}</span>
      <h3>${title}</h3>
      <p>${title === "Do not click" ? "Seriously. Đừng bấm." : "Mở hộp này ra khi cần."}</p>
    </button>
  `).join("");
}

function renderLetters() {
  $("#letterGrid").innerHTML = siteData.letters.map(([title, viTitle, body]) => `
    <button class="envelope reveal" type="button" data-letter="${title}">
      <p class="eyebrow">Open when</p>
      <h3>${viTitle}</h3>
    </button>
  `).join("");
}

function renderGuide() {
  $("#guideGrid").innerHTML = siteData.survivalGuide.map(([title, body]) => `
    <article class="guide-card reveal"><h3>${title}</h3><p>${body}</p></article>
  `).join("");
}

function renderMessages() {
  $("#messageWall").innerHTML = siteData.messages.map((message, index) => `
    <article class="postcard reveal">
      <div class="avatar">${index + 1}</div>
      <p class="eyebrow">${message.from}</p>
      <p>${message.message}</p>
    </article>
  `).join("");
}

function randomHug() {
  return siteData.hugMessages[Math.floor(Math.random() * siteData.hugMessages.length)];
}

function setupInteractions() {
  document.addEventListener("click", (event) => {
    const scrollTarget = event.target.closest("[data-scroll]");
    if (scrollTarget) $(scrollTarget.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });

    const memory = event.target.closest("[data-open-memory]");
    if (memory) {
      openModal(memoryHtml(memory.dataset.openMemory));
      const secretForm = $("#secretForm");
      if (secretForm) {
        secretForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const ok = $("#secretInput").value.trim().toLowerCase() === siteData.secretPassword.toLowerCase();
          $("#secretResult").innerHTML = ok
            ? `<span class="handwritten">Tụi mình thương Ngọc nhiều hơn tụi mình nói ra. Đi xa nhớ giữ mình, nhớ gọi về, nhớ rằng Ngọc luôn có một chỗ rất riêng trong lòng tụi mình.</span>`
            : "Sai rồi, thử nickname/password khác nha.";
        });
      }
      $("#newHugBtn")?.addEventListener("click", () => ($("#hugText").textContent = randomHug()));
    }

    const letter = event.target.closest("[data-letter]");
    if (letter) {
      const found = siteData.letters.find(([title]) => title === letter.dataset.letter);
      if (found) openModal(`<p class="eyebrow">${found[0]}</p><h2>${found[1]}</h2><p>${found[2]}</p>`);
    }

    if (event.target.matches("[data-close-modal]")) closeModal();
  });

  $("#missVietnamBtn").addEventListener("click", () => openModal(`
    <h2>Khi nhớ Việt Nam</h2>
    <p>Khi nhớ Việt Nam, nhớ đồ ăn, nhớ đường phố, nhớ tụi mình, thì mở lại trang này. Ngọc không cần phải mạnh mẽ mọi lúc. Có những ngày nhớ nhà là chuyện bình thường. Chỉ cần nhớ rằng ở đây vẫn có người đợi tin nhắn của Ngọc.</p>
  `));

  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
}

function setupToggles() {
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    $("#themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  });

  $("#musicToggle").addEventListener("click", async () => {
    const audio = $("#backgroundMusic");
    const isOn = document.body.classList.contains("music-on");
    if (isOn) {
      if (!audio.paused) {
        audio.pause();
      }
      stopSynthMusic();
      stopFloatingLove();
      document.body.classList.remove("music-on");
      $("#musicToggle").textContent = "♪";
      return;
    }

    try {
      await audio.play();
      startMusicUi();
    } catch {
      startSynthMusic();
      startMusicUi();
    }
  });

  createMusicVisualizer();
}

function createMusicVisualizer() {
  if ($(".music-visualizer")) return;
  const visualizer = document.createElement("div");
  visualizer.className = "music-visualizer";
  visualizer.setAttribute("aria-hidden", "true");
  visualizer.innerHTML = "<span></span><span></span><span></span><span></span><span></span>";
  document.body.appendChild(visualizer);
}

function startMusicUi() {
  document.body.classList.add("music-on");
  $("#musicToggle").textContent = "Ⅱ";
  startFloatingLove();
}

function startSynthMusic() {
  if (synthAudio) {
    synthAudio.resume?.();
    return;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    openModal("<h2>Chưa phát được nhạc</h2><p>Trình duyệt này không hỗ trợ Web Audio. Khi có file <b>assets/music/background.mp3</b>, nút nhạc sẽ phát bằng file đó.</p>");
    return;
  }

  synthAudio = new AudioContext();
  const master = synthAudio.createGain();
  master.gain.value = 0.045;
  master.connect(synthAudio.destination);

  const delay = synthAudio.createDelay();
  delay.delayTime.value = 0.32;
  const feedback = synthAudio.createGain();
  feedback.gain.value = 0.22;
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(master);

  const notes = [
    392, 493.88, 587.33, 659.25,
    587.33, 493.88, 440, 392,
    329.63, 392, 440, 493.88,
    440, 392, 329.63, 293.66,
  ];
  let step = 0;

  const play = () => {
    if (!synthAudio) return;
    const now = synthAudio.currentTime;
    const freq = notes[step % notes.length];
    const osc = synthAudio.createOscillator();
    const gain = synthAudio.createGain();
    const filter = synthAudio.createBiquadFilter();

    osc.type = step % 4 === 0 ? "triangle" : "sine";
    osc.frequency.setValueAtTime(freq, now);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1100, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.32, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    gain.connect(delay);
    osc.start(now);
    osc.stop(now + 0.78);

    if (step % 4 === 0) playBass(freq / 2, master);
    step += 1;
  };

  play();
  synthTimer = setInterval(play, 430);
}

function playBass(freq, destination) {
  if (!synthAudio) return;
  const now = synthAudio.currentTime;
  const osc = synthAudio.createOscillator();
  const gain = synthAudio.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.22, now + 0.06);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.05);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(now);
  osc.stop(now + 1.1);
}

function stopSynthMusic() {
  if (synthTimer) clearInterval(synthTimer);
  synthTimer = null;
  if (synthAudio) {
    synthAudio.close();
    synthAudio = null;
  }
}

function startFloatingLove() {
  if (loveTimer) return;
  const symbols = ["♡", "♪", "✦", "love", "miss", "soon"];
  loveTimer = setInterval(() => {
    const item = document.createElement("span");
    item.className = "floating-love";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.setProperty("--love-x", `${Math.random() * 96}vw`);
    item.style.setProperty("--love-drift", `${Math.random() * 120 - 60}px`);
    item.style.setProperty("--love-size", `${18 + Math.random() * 18}px`);
    item.style.setProperty("--love-speed", `${5 + Math.random() * 4}s`);
    item.style.setProperty("--love-color", ["#C1121F", "#FFD166", "#0EA5A3", "#8B7CF6", "#F4A7A3"][Math.floor(Math.random() * 5)]);
    document.body.appendChild(item);
    item.addEventListener("animationend", () => item.remove(), { once: true });
  }, 520);
}

function stopFloatingLove() {
  if (loveTimer) clearInterval(loveTimer);
  loveTimer = null;
}

function setupCountdown() {
  const clock = $("#countdownClock");
  const title = $("#countdownTitle");
  const tick = () => {
    const diff = new Date(siteData.departureDate).getTime() - Date.now();
    if (diff <= 0) {
      title.textContent = "Hành trình đã bắt đầu. Tụi mình vẫn ở đây.";
      clock.innerHTML = "";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    const values = [days, hours, mins, secs].map((v) => String(v).padStart(2, "0"));
    ["days", "hours", "mins", "secs"].forEach((label, i) => {
      clock.children[i].querySelector("b").textContent = values[i];
    });
  };
  tick();
  setInterval(tick, 1000);
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => observer.observe(el));
}

function setupEasterEgg() {
  let taiwanClicks = 0;
  $$(".taiwan-easter").forEach((el) => {
    el.addEventListener("click", () => {
      taiwanClicks += 1;
      if (taiwanClicks === 7) {
        openModal("<h2>Bí mật</h2><p>Ngọc tìm được bí mật rồi. Điều bí mật là: tụi mình nhớ Ngọc hơn tụi mình nói ra.</p>");
        taiwanClicks = 0;
      }
    });
  });
}

function typeIntro() {
  const el = $("#typingLine");
  const text = "Before you go to Taiwan, we made you something.";
  let index = 0;
  el.textContent = "";
  const timer = setInterval(() => {
    el.textContent += text[index] || "";
    index += 1;
    if (index > text.length) clearInterval(timer);
  }, 42);
}

function setupPremiumEffects() {
  const progress = document.createElement("div");
  progress.className = "progress-bar";
  document.body.prepend(progress);

  const setProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    document.documentElement.style.setProperty("--scroll-progress", `${percent}%`);
  };

  const setPointer = (event) => {
    const x = `${(event.clientX / window.innerWidth) * 100}%`;
    const y = `${(event.clientY / window.innerHeight) * 100}%`;
    document.documentElement.style.setProperty("--mx", x);
    document.documentElement.style.setProperty("--my", y);
  };

  const parallax = () => {
    const y = window.scrollY;
    document.documentElement.style.setProperty("--hero-shift", `${Math.min(y * 0.06, 38)}px`);
    document.documentElement.style.setProperty("--map-shift", `${Math.sin(y / 260) * 6}px`);
  };

  window.addEventListener("scroll", () => {
    setProgress();
    parallax();
  }, { passive: true });
  window.addEventListener("pointermove", setPointer, { passive: true });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("button, .memory-card, .envelope");
    if (!target) return;
    burst(event.clientX, event.clientY);
  });

  setProgress();
  parallax();
}

function burst(x, y) {
  const colors = ["#FFD166", "#C1121F", "#0EA5A3", "#F4A7A3", "#8B7CF6"];
  for (let i = 0; i < 10; i += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 10;
    const distance = 38 + Math.random() * 28;
    spark.className = "spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--sx", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--sy", `${Math.sin(angle) * distance}px`);
    spark.style.setProperty("--spark-color", colors[i % colors.length]);
    document.body.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
  }
}

function init() {
  setText();
  renderTimeline();
  renderMemoryBox();
  renderLetters();
  renderGuide();
  renderMessages();
  setupInteractions();
  setupToggles();
  setupCountdown();
  setupEasterEgg();
  setupReveal();
  setupPremiumEffects();
  typeIntro();
}

init();
