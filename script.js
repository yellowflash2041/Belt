$(document).ready(() => {
  const man = '<img src="man.svg" alt="man" class="man">';
  let aMan = [];
  for (let i = 0; i < 100; i++) {
    $(".men").append(man);
    aMan.push(i);
  }
  let no = 0, cnt = 0;
  const myTimer = () => {
    if (++cnt === 10) {
      $(".alive").css({"top": "-32px", "left": "-32px"});
      const pos = aMan.splice(no--, 1)[0];
      const dead = `<i class="fa fa-ban text-center text-danger position-fixed" style="top: ${parseInt(pos / 10) * 32}px; left: ${(pos % 10) * 32}px;"></i>`;
      $(".container-fluid").append(dead);
      if (aMan.length === 1) {
        clearInterval(myVar);
      }
      cnt = 0;
    } else {
      $(".alive").css({"top": `${parseInt(aMan[no] / 10) * 32}px`, "left": `${(aMan[no] % 10) * 32}px`});
      $(".alive").text(cnt);
    }
    if (++no === aMan.length) {
      no = 0;
    }
  };
  const myVar = setInterval(myTimer, 100);
});