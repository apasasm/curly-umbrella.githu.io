const baclgroundImg = ["img1.jpg", "img2.jpg"];

function getRandomIndex(object) {
  const selectedIndex = Math.floor(Math.random() * object.length);
  return selectedIndex;
}

function changeBackgroundImg() {
  const selectedImg = baclgroundImg[getRandomIndex(baclgroundImg)];
  // htmlBody.style.backgroundImage = `../img/${selectedImg}`;

  // document.body.style.backgroundImage = `url('img/${selectedImg}')`;
  // document.body.style.backgroundImage =
  //   "url('/Users/nano/Temp/gitmy/curly-umbrella.github.io/img1.jpg')";
  // document.body.style.backgroundImage = `/Users/nano/Temp/gitmy/curly-umbrella.github.io/img1.jpg'`;
  document.body.style.backgroundImage = `url("img1.jpg")`;
  console.log(document.body.style.backgroundImage);
  // document.body.style.backgroundImage = `url(https://github.com/apasasm/curly-umbrella.github.io/blob/main/img/${selectedImg})?raw=true`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

const htmlBody = document.querySelector("body");
changeBackgroundImg();
