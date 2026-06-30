// ═══════════ SITE DATA ═══════════
// EDIT HERE: change the friend name, dates, password, letters, messages, and placeholders below.
const siteData = {
  friendName: "Tiểu Ngọc",
  nickname: "bé du học sinh",
  secretPassword: "banthan",
  departureDate: "2026-09-01T08:30:00+07:00",
  memories: [
    ["The day we met", "Ngày đầu", "Tụi mình lúc đó còn lịch sự dữ lắm, nói chuyện kiểu giữ hình tượng. Ai ngờ về sau hình tượng rớt sạch, chỉ còn lại một đống kỷ niệm mà nhắc lại là cười.", "assets/photos/IMG_6620.JPG"],
    ["The first time we became close", "Một ngày rất thường", "Không có tiếng pháo hoa hay nhạc nền gì hết. Chỉ là tự nhiên thấy nói chuyện với Ngọc dễ, ở cạnh Ngọc nhẹ, rồi từ lúc nào Ngọc thành người tụi mình muốn kể đủ thứ trên đời.", "assets/photos/IMG_6625.JPG"],
    ["Our stupidest memory", "Không tiện ghi ngày", "Có những chuyện ngu tới mức không nên để Internet biết. Nhưng tụi mình nhớ. Và Ngọc cũng nhớ. Chỉ cần một đứa nhắc lại là cả nhóm tự hiểu rồi cười như chưa từng trưởng thành.", "assets/photos/IMG_6649.JPG"],
    ["The day we laughed too much", "Một buổi cười đau bụng", "Hôm đó chắc tụi mình chẳng làm gì vĩ đại, chỉ ngồi nói linh tinh rồi cười tới mức người ngoài nhìn vào cũng thấy khó hiểu. Nhưng đó là kiểu ngày sau này nhớ lại sẽ thấy thương.", "assets/photos/IMG_6716.JPG"],
    ["The time we fought but still stayed", "Sau một lần khó chịu", "Tụi mình cũng có lúc không hiểu nhau, có lúc tự ái, có lúc im lặng. Nhưng điều quan trọng là không ai bỏ đi. Tụi mình chọn ở lại, chọn nói tiếp, chọn thương nhau tử tế hơn.", "assets/photos/IMG_6738.JPG"],
    ["The day we knew you were leaving", "Ngày nghe tin Đài Loan", "Tụi mình vui cho Ngọc thật. Nhưng cũng có một khoảng lặng rất nhỏ trong lòng. Kiểu tự nhiên hiểu rằng từ nay muốn gặp nhau sẽ phải tính lịch, tính múi giờ, tính cả nỗi nhớ.", "assets/photos/IMG_6934.JPG"],
    ["Today", "Hôm nay", "Hôm nay tụi mình làm website này để Ngọc có thứ mang theo mà không nặng vali. Một món quà nhỏ, hơi sến, hơi quê, nhưng đầy lòng của tụi mình.", "assets/photos/IMG_6971.JPG"],
    ["The future", "Mai sau", "Mai sau tụi mình sẽ khác đi. Ngọc sẽ giỏi hơn, mạnh hơn, có thêm nhiều câu chuyện mới. Nhưng tụi mình mong trong một góc nào đó, tụi mình vẫn là tụi mình.", "assets/photos/IMG_7001.JPG"],
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
    { from: "Từ một đứa hay lèm bèm", message: "Qua đó nhớ học hành tử tế, đừng có mải chơi quên đường về nha. Rảnh thì gọi điện về tấu hài cho tao nghe." },
    { from: "Từ đứa chuyên ăn ké", message: "Đi mang theo luôn cái nết ăn uống đi nha. Có đồ ăn ngon bên đó nhớ chụp hình gửi về cho bọn này thèm." },
    { from: "Từ hội mỏ hỗn", message: "Đừng có tưởng đi xa là thoát được bọn này nha. Cứ liệu hồn đấy! Chúc lên đường bình an, học bá nhé!" },
  ],
  hugMessages: [
    "Nhớ mua quà về nha!",
    "Bên này vẫn đang nhậu thiếu Ngọc nha.",
    "Hôm nào rảnh thì video call tấu hài tiếp.",
    "Đi vui vẻ, bớt quậy lại.",
    "Bên này vẫn bình thường, thiếu mỗi m thôi.",
    "Cẩn thận bên đó bị lừa tình nha =))",
    "Thèm trà sữa chưa?",
    "Nhớ ăn uống đầy đủ, ốm không ai lo đâu.",
  ],
  // Real photos from the user
  photos: [
    ["assets/photos/IMG_6620.JPG", "Tụi mình đi chơi 🌸"],
    ["assets/photos/IMG_6625.JPG", "Selfie nhóm vui quá trời"],
    ["assets/photos/IMG_6649.JPG", "Khoảnh khắc đẹp"],
    ["assets/photos/IMG_6712.JPG", "Đi Đà Lạt nè 🌿"],
    ["assets/photos/IMG_6716.JPG", "Cùng nhau check-in"],
    ["assets/photos/IMG_6738.JPG", "Nhớ hoài luôn"],
    ["assets/photos/IMG_6744.PNG", "Nấu ăn cùng nhau 🍳"],
    ["assets/photos/IMG_6745.PNG", "Kỷ niệm đẹp"],
    ["assets/photos/IMG_6770.JPG", "Dưới hàng đèn lồng"],
    ["assets/photos/IMG_6777.JPG", "Chuyến đi không quên"],
    ["assets/photos/IMG_6789.JPG", "Góc nhỏ thân quen"],
    ["assets/photos/IMG_6810.JPG", "Cùng nhau đi xa"],
    ["assets/photos/IMG_6827.JPG", "Một ngày rất vui"],
    ["assets/photos/IMG_6831.JPG", "Nhìn lại là cười"],
    ["assets/photos/IMG_6846.JPG", "Kỷ niệm để dành 💕"],
    ["assets/photos/IMG_6859.JPG", "Mãi mãi bạn thân"],
    ["assets/photos/IMG_6868.JPG", "Lúc nào cũng vui"],
    ["assets/photos/IMG_6879.JPG", "Đi cùng nhau hoài"],
    ["assets/photos/IMG_6934.JPG", "Đèn lồng đỏ 🏮"],
    ["assets/photos/IMG_6938.JPG", "Nhớ cảnh này quá"],
    ["assets/photos/IMG_6954.JPG", "Đẹp quá trời ơi"],
    ["assets/photos/IMG_6971.JPG", "Nụ cười thân quen"],
    ["assets/photos/IMG_6980.JPG", "Tụi mình đông vui ghê"],
    ["assets/photos/IMG_6994.JPG", "Ảnh nhóm xịn nhất"],
    ["assets/photos/IMG_7001.JPG", "Cùng nhau tới cuối"],
    ["assets/photos/IMG_7105.JPG", "Khoảnh khắc quý giá"],
    ["assets/photos/IMG_4489.PNG", "Screenshot kỷ niệm 📱"],
    ["assets/photos/IMG_5118.PNG", "Đi xe máy ban đêm 🏍️"],
    ["assets/photos/IMG_8085.jpg", "Ảnh nhỏ mà thương"],
  ],
  // Real videos
  videos: [
    ["assets/photos/shared_video_070C1F49-5CA7-47AB-ACC1-35721E2A4C2E.MP4", "Video kỷ niệm #1 🎬"],
    ["assets/photos/shared_video_0B789D4E-7836-42BF-BB8D-B560C1861566.MP4", "Video kỷ niệm #2 📹"],
    ["assets/photos/shared_video_0E71A7A2-3C30-4FF5-AB0D-ED87769530ED.MP4", "Video kỷ niệm #3"],
    ["assets/photos/shared_video_4496780D-222F-4384-B9FB-E571CB4642B0.MP4", "Video kỷ niệm #4"],
    ["assets/photos/shared_video_6C1A24D1-6AE5-42AF-A3DE-75FB99163180.MP4", "Video kỷ niệm #5"],
    ["assets/photos/shared_video_7ED9CC9E-CB38-4FC9-9936-32FAA097FC22.MP4", "Video kỷ niệm #6"],
    ["assets/photos/shared_video_9449D5AB-D104-4267-9027-914ACFD585F9.MP4", "Video kỷ niệm #7"],
    ["assets/photos/shared_video_A6D1107C-3141-43BE-A404-F54FD485DCC4.MP4", "Video kỷ niệm #8"],
    ["assets/photos/shared_video_C6B490FB-EEDC-4825-BD31-3E167815E355.MP4", "Video kỷ niệm #9"],
    ["assets/photos/shared_video_CA2FF4A2-EDF3-4885-9C52-2C2DB347B86C.MP4", "Video kỷ niệm #10"],
    ["assets/photos/shared_video_CB51BAFC-C257-4FB5-A0BE-6092EB390AF8.MP4", "Video kỷ niệm #11 💛"],
  ],
};

// ═══════════ UTILITIES ═══════════
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const modal = $("#modal");
const modalContent = $("#modalContent");
let synthAudio = null;
let synthTimer = null;
let loveTimer = null;
let petalTimer = null;
let heartTimer = null;
let shootingStarTimer = null;
let lanternTimer = null;
let lightboxIndex = 0;

// ═══════════ SPLASH SCREEN ═══════════
function setupSplash() {
  const splash = $("#splash");
  const btn = $("#splashBtn");
  const petalsContainer = $("#splashPetals");

  // Create splash petals
  const petalColors = ["#ffb4a2", "#ff6b9d", "#e0aaff", "#F4A7A3", "#ffd166", "#fff"];
  for (let i = 0; i < 40; i++) {
    const petal = document.createElement("div");
    petal.className = "splash-petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.width = `${10 + Math.random() * 18}px`;
    petal.style.height = `${10 + Math.random() * 18}px`;
    petal.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];
    petal.style.animationDuration = `${4 + Math.random() * 6}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petalsContainer.appendChild(petal);
  }

  btn.addEventListener("click", async () => {
    splash.classList.add("hidden");
    setTimeout(() => {
      splash.style.display = "none";
      document.body.style.overflow = "";
      startBackgroundEffects();
    }, 800);
    
    // Attempt to start music right away on user gesture
    try {
      const audio = $("#backgroundMusic");
      await audio.play();
      startMusicUi();
    } catch {
      // Fallback to synth if mp3 is missing
      startSynthMusic();
      startMusicUi();
    }
  });

  document.body.style.overflow = "hidden";
}

// ═══════════ BACKGROUND EFFECTS ═══════════
function startBackgroundEffects() {
  startFloatingEmojis();
  startShootingStars($("#shootingStars"));
  startShootingStars($("#shootingStarsFinal"));
  startLanterns();
}

function startFloatingEmojis() {
  const container = $("#floatingEmojis");
  const emojis = ["✈️", "😎", "✌️", "🎒", "✨", "🚀"];

  heartTimer = setInterval(() => {
    const heart = document.createElement("span");
    heart.className = "heart-float";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${20 + Math.random() * 14}px`;
    heart.style.animationDuration = `${5 + Math.random() * 6}s`;
    container.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }, 2000);
}

function startShootingStars(container) {
  if (!container) return;
  setInterval(() => {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.left = `${30 + Math.random() * 70}%`;
    star.style.top = `${Math.random() * 50}%`;
    star.style.animationDuration = `${.5 + Math.random() * .5}s`;
    container.appendChild(star);
    star.addEventListener("animationend", () => star.remove(), { once: true });
  }, 3000 + Math.random() * 4000);
}

function startLanterns() {
  const container = $("#lanterns");
  if (!container) return;
  const colors = ["#ff4444", "#ff6b35", "#ffd166", "#ff8888", "#cc3333"];

  lanternTimer = setInterval(() => {
    const lantern = document.createElement("div");
    lantern.className = "lantern";
    lantern.style.left = `${Math.random() * 100}%`;
    lantern.style.background = colors[Math.floor(Math.random() * colors.length)];
    lantern.style.animationDuration = `${8 + Math.random() * 6}s`;
    lantern.style.opacity = `.6`;
    container.appendChild(lantern);
    lantern.addEventListener("animationend", () => lantern.remove(), { once: true });
  }, 3000);
}

// ═══════════ TEXT SETUP ═══════════
function setText() {
  $$("[data-friend-name]").forEach((el) => (el.textContent = siteData.friendName));
  const date = new Date(siteData.departureDate);
  $("[data-departure-label]").textContent = date.toLocaleString("vi-VN", { dateStyle: "medium", timeStyle: "short" });
}

// ═══════════ MODAL ═══════════
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

// ═══════════ LIGHTBOX ═══════════
function openLightbox(index) {
  lightboxIndex = index;
  const lb = $("#lightbox");
  const img = $("#lightboxImg");
  const caption = $("#lightboxCaption");

  img.src = siteData.photos[index][0];
  caption.textContent = siteData.photos[index][1];
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = $("#lightbox");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function prevLightbox() {
  lightboxIndex = (lightboxIndex - 1 + siteData.photos.length) % siteData.photos.length;
  $("#lightboxImg").src = siteData.photos[lightboxIndex][0];
  $("#lightboxCaption").textContent = siteData.photos[lightboxIndex][1];
}

function nextLightbox() {
  lightboxIndex = (lightboxIndex + 1) % siteData.photos.length;
  $("#lightboxImg").src = siteData.photos[lightboxIndex][0];
  $("#lightboxCaption").textContent = siteData.photos[lightboxIndex][1];
}

function setupLightbox() {
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", prevLightbox);
  $("#lightboxNext").addEventListener("click", nextLightbox);

  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    }
  });
}

// ═══════════ RENDER TIMELINE ═══════════
function renderTimeline() {
  $("#timeline").innerHTML = siteData.memories.map((item, index) => `
    <article class="timeline-item reveal">
      <div class="polaroid" style="--tilt:${index % 2 ? 2 : -2}deg">
        ${item[3]
          ? `<img src="${item[3]}" alt="${item[0]}" loading="lazy">`
          : `<div class="placeholder-photo">photo ${index + 1}</div>`
        }
      </div>
      <div>
        <p class="eyebrow">${item[1]}</p>
        <h3>${item[0]}</h3>
        <p>${item[2]}</p>
      </div>
    </article>
  `).join("");
}

// ═══════════ RENDER PHOTO GALLERY ═══════════
function renderPhotoGallery() {
  const container = $("#photoGallery");
  container.innerHTML = siteData.photos.map(([src, caption], index) => `
    <div class="gallery-item reveal" data-lightbox="${index}">
      <img src="${src}" alt="${caption}" loading="lazy">
      <div class="gallery-overlay">
        <p>${caption}</p>
      </div>
    </div>
  `).join("");
}

// ═══════════ RENDER VIDEO GALLERY ═══════════
function renderVideoGallery() {
  const container = $("#videoGallery");
  container.innerHTML = siteData.videos.map(([src, caption]) => `
    <div class="video-card reveal">
      <video controls preload="metadata" playsinline>
        <source src="${src}" type="video/mp4">
        Trình duyệt không hỗ trợ video.
      </video>
      <div class="video-card-info">
        <p>${caption}</p>
      </div>
    </div>
  `).join("");
}

// ═══════════ MEMORY HTML ═══════════
function memoryHtml(title) {
  const gallery = siteData.photos.map(([src, caption], index) => `
    <figure class="polaroid" style="margin:0">
      <img src="${src}" alt="${caption}" loading="lazy" style="width:100%;height:160px;object-fit:cover;border-radius:4px;cursor:pointer" data-gallery-lightbox="${index}">
      <figcaption style="font-size:.8rem;padding:4px 0;color:var(--muted)">${caption}</figcaption>
    </figure>
  `).join("");

  const templates = {
    "Polaroid Photos": `<h2>📸 Polaroid Photos</h2><div class="modal-gallery">${gallery}</div>`,
    "Dumb Screenshots": `<h2>😂 Dumb Screenshots</h2><p>Khu này để Ngọc thả meme, ảnh chụp màn hình, tin nhắn vô tri và những thứ không nên công khai nhưng rất nên giữ.</p><div class="modal-gallery">${siteData.photos.slice(0, 6).map(([src, caption]) => `<figure style="margin:0"><img src="${src}" alt="${caption}" loading="lazy" style="width:100%;height:160px;object-fit:cover;border-radius:6px"><figcaption style="font-size:.8rem;color:var(--muted)">${caption}</figcaption></figure>`).join("")}</div>`,
    "Voice Notes": `<h2>🎤 Voice Notes</h2><p>Đặt file vào <b>assets/voices</b> rồi sửa đường dẫn trong HTML này nếu muốn.</p><audio controls preload="none"><source src="assets/voices/voice-1.mp3" type="audio/mpeg"></audio>`,
    "Inside Jokes": `<h2>😜 Inside Jokes</h2><ul><li>Câu nói chỉ tụi mình hiểu số 1.</li><li>Meme nội bộ không giải thích được.</li><li>Cái biệt danh mà Ngọc cấm nhưng tụi mình vẫn nhớ.</li></ul>`,
    "Things We Will Miss": `<h2>💔 Things We Will Miss</h2><p>Tụi mình sẽ nhớ cách Ngọc xuất hiện trong những ngày rất bình thường, nhớ tiếng cười, nhớ mấy câu than thở, nhớ cả việc có một người để rủ đi ăn mà không cần giải thích quá nhiều.</p>`,
    "Tiny Promises": `<h2>🤞 Tiny Promises</h2><ul><li>Tụi mình sẽ nhắn Ngọc khi thấy món gì làm tụi mình nhớ Ngọc.</li><li>Ngọc vui hay buồn cũng được kể.</li><li>Gặp lại sẽ đi ăn một bữa thật dài.</li></ul>`,
    "Secret Letter": `<h2>🔐 Thư tuyệt mật</h2><p>Nhập mật khẩu hội kín vào đây để mở khóa.</p><form class="secret-form" id="secretForm"><input id="secretInput" placeholder="Password"><button class="primary-btn" type="submit">Mở khóa</button></form><p id="secretResult"></p>`,
    "Emergency Hug Button": `<h2>🤗 Nút cầu cứu</h2><p id="hugText" style="font-size:1.5rem;font-family:Caveat,cursive;color:var(--teal)">${randomHug()}</p><button class="primary-btn" id="newHugBtn" type="button">😎 Nghe thêm câu nữa</button>`,
    "Do not click": `<h2>⚠️ Đã bảo đừng click rồi mà</h2><p>Đây là chỗ dành cho ảnh dìm huyền thoại. Chạy đi trước khi quá muộn!</p><div class="modal-gallery">${siteData.photos.slice(-6).map(([src, caption]) => `<figure style="margin:0"><img src="${src}" alt="${caption}" loading="lazy" style="width:100%;height:160px;object-fit:cover;border-radius:6px"><figcaption style="font-size:.8rem;color:var(--muted)">${caption}</figcaption></figure>`).join("")}</div>`,
  };
  return templates[title] || `<h2>${title}</h2><p>Đang chờ thêm kỷ niệm.</p>`;
}

// ═══════════ RENDER MEMORY BOX ═══════════
function renderMemoryBox() {
  const items = ["Polaroid Photos", "Dumb Screenshots", "Voice Notes", "Inside Jokes", "Things We Will Miss", "Tiny Promises", "Secret Letter", "Emergency Hug Button", "Do not click"];
  const icons = ["📸", "😂", "🎤", "😜", "💔", "🤞", "🔐", "🆘", "⚠️"];
  $("#memoryGrid").innerHTML = items.map((title, index) => `
    <button class="memory-card reveal" type="button" data-open-memory="${title}">
      <span class="icon">${icons[index]}</span>
      <h3>${title}</h3>
      <p>${title === "Do not click" ? "Nói thật đấy, đừng bấm." : "Mở ra xem có gì hot."}</p>
    </button>
  `).join("");
}

// ═══════════ RENDER LETTERS ═══════════
function renderLetters() {
  $("#letterGrid").innerHTML = siteData.letters.map(([title, viTitle, body]) => `
    <button class="envelope reveal" type="button" data-letter="${title}">
      <p class="eyebrow">Open when</p>
      <h3>${viTitle}</h3>
    </button>
  `).join("");
}

// ═══════════ RENDER GUIDE ═══════════
function renderGuide() {
  $("#guideGrid").innerHTML = siteData.survivalGuide.map(([title, body]) => `
    <article class="guide-card reveal"><h3>${title}</h3><p>${body}</p></article>
  `).join("");
}

// ═══════════ RENDER MESSAGES ═══════════
function renderMessages() {
  $("#messageWall").innerHTML = siteData.messages.map((message, index) => `
    <article class="postcard reveal">
      <div class="avatar">${index + 1}</div>
      <p class="eyebrow">${message.from}</p>
      <p>${message.message}</p>
    </article>
  `).join("");
}

// ═══════════ RANDOM HUG ═══════════
function randomHug() {
  return siteData.hugMessages[Math.floor(Math.random() * siteData.hugMessages.length)];
}

// ═══════════ INTERACTIONS ═══════════
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
            ? `<span class="handwritten">Thực ra bọn này cũng hơi quý mày một tí. Qua bển bớt tấu hài lại, học cho giỏi rồi về dẫn bọn này đi ăn nha! 😎</span>`
            : "Sai pass rồi má ơi, nhập lại đi.";
        });
      }
      $("#newHugBtn")?.addEventListener("click", () => {
        const hugEl = $("#hugText");
        hugEl.style.opacity = "0";
        setTimeout(() => {
          hugEl.textContent = randomHug();
          hugEl.style.opacity = "1";
        }, 200);
      });

      // Setup gallery lightbox clicks inside modal
      modalContent.querySelectorAll("[data-gallery-lightbox]").forEach(img => {
        img.addEventListener("click", () => {
          closeModal();
          openLightbox(parseInt(img.dataset.galleryLightbox));
        });
      });
    }

    const letter = event.target.closest("[data-letter]");
    if (letter) {
      const found = siteData.letters.find(([title]) => title === letter.dataset.letter);
      if (found) openModal(`<p class="eyebrow">${found[0]}</p><h2>${found[1]}</h2><p>${found[2]}</p>`);
    }

    // Lightbox from gallery
    const galleryItem = event.target.closest("[data-lightbox]");
    if (galleryItem) {
      openLightbox(parseInt(galleryItem.dataset.lightbox));
    }

    if (event.target.matches("[data-close-modal]")) closeModal();
  });

  $("#missVietnamBtn").addEventListener("click", () => openModal(`
    <h2>🇻🇳 Khi nhớ Việt Nam</h2>
    <p>Khi nhớ Việt Nam, nhớ đồ ăn, nhớ đường phố, nhớ tụi mình, thì mở lại trang này. Ngọc không cần phải mạnh mẽ mọi lúc. Có những ngày nhớ nhà là chuyện bình thường. Chỉ cần nhớ rằng ở đây vẫn có người đợi tin nhắn của Ngọc.</p>
    <div class="modal-gallery" style="margin-top:18px">
      ${siteData.photos.slice(0, 9).map(([src, caption]) => `<figure style="margin:0"><img src="${src}" alt="${caption}" loading="lazy" style="width:100%;height:140px;object-fit:cover;border-radius:6px"></figure>`).join("")}
    </div>
  `));

  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
}

// ═══════════ TOGGLES ═══════════
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

// ═══════════ SYNTH MUSIC ═══════════
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

  // Beautiful emotional melody
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
    // Uptempo, cheerful synth pattern
    const freq = notes[step % notes.length];
    const osc = synthAudio.createOscillator();
    const gain = synthAudio.createGain();
    const filter = synthAudio.createBiquadFilter();

    osc.type = step % 2 === 0 ? "square" : "sine";
    osc.frequency.setValueAtTime(freq, now);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.4, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    gain.connect(delay);
    osc.start(now);
    osc.stop(now + 0.55);

    if (step % 2 === 0) playBass(freq / 2, master);
    step += 1;
  };

  play();
  synthTimer = setInterval(play, 280);
}

function playBass(freq, destination) {
  if (!synthAudio) return;
  const now = synthAudio.currentTime;
  const osc = synthAudio.createOscillator();
  const gain = synthAudio.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.2, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(now);
  osc.stop(now + 0.45);
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
  const symbols = ["✈️", "🚀", "🌟", "😎", "✌️", "🎒"];
  loveTimer = setInterval(() => {
    const item = document.createElement("span");
    item.className = "floating-love";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.setProperty("--love-x", `${Math.random() * 96}vw`);
    item.style.setProperty("--love-drift", `${Math.random() * 120 - 60}px`);
    item.style.setProperty("--love-size", `${22 + Math.random() * 18}px`);
    item.style.setProperty("--love-speed", `${4 + Math.random() * 4}s`);
    item.style.setProperty("--love-color", ["#0EA5A3", "#FFD166", "#8B7CF6", "#f28482"][Math.floor(Math.random() * 4)]);
    document.body.appendChild(item);
    item.addEventListener("animationend", () => item.remove(), { once: true });
  }, 400);
}

function stopFloatingLove() {
  if (loveTimer) clearInterval(loveTimer);
  loveTimer = null;
}

// ═══════════ COUNTDOWN ═══════════
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

// ═══════════ REVEAL ON SCROLL ═══════════
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => observer.observe(el));
}

// ═══════════ EASTER EGG ═══════════
function setupEasterEgg() {
  let taiwanClicks = 0;
  $$(".taiwan-easter").forEach((el) => {
    el.addEventListener("click", () => {
      taiwanClicks += 1;
      if (taiwanClicks === 7) {
        openModal("<h2>🎉 Mật mã</h2><p>Phát hiện ra chỗ giấu mật mã rồi à? Tặng cho câu này: Đi mạnh giỏi, đừng quên tụi này. 😎</p>");
        taiwanClicks = 0;
      }
    });
  });
}

// ═══════════ TYPING INTRO ═══════════
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

// ═══════════ PREMIUM EFFECTS ═══════════
function setupPremiumEffects() {
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
  const colors = ["#FFD166", "#C1121F", "#0EA5A3", "#F4A7A3", "#8B7CF6", "#ff6b9d"];
  for (let i = 0; i < 12; i += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 12;
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

// ═══════════ INIT ═══════════
function init() {
  setupSplash();
  setText();
  renderTimeline();
  renderPhotoGallery();
  renderVideoGallery();
  renderMemoryBox();
  renderLetters();
  renderGuide();
  renderMessages();
  setupInteractions();
  setupLightbox();
  setupToggles();
  setupCountdown();
  setupEasterEgg();
  setupReveal();
  setupPremiumEffects();
  typeIntro();
}

init();
