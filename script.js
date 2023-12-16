
const links = [
    'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hZHoYE9923Fax_b95Oah0WdmSEBfebUs_g&usqp=CAU',
    'https://cdn2.vectorstock.com/i/1000x1000/10/41/coal-stones-icon-cartoon-style-vector-26341041.jpg',
    'https://images.assetsdelivery.com/compings_v2/parmenov/parmenov1909/parmenov190900049.jpg',
    'https://s28164.pcdn.co/files/Zoo-Lights-0308-0332.jpg',
    'https://media.istockphoto.com/id/891102684/vector/coal-christmas-gift.jpg?s=612x612&w=0&k=20&c=PIlpi-PhBCsM03G3efyWT4JQxy5eSCEdpc7-iSDJA3w=',
    'https://vanderbilthustler.com/wp-content/uploads/2023/10/25fe5e7b-544f-4a44-8bbc-292b5de57772-e1698722624535.jpeg',
    'https://qph.cf2.quoracdn.net/main-qimg-2aa2b39bcc00fadf92af351008985b2d-lq',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIBERwgCJyRzug1xWoasE8A9FAyjDPmVDAngqC9UZhQ&s',
    'https://i.pinimg.com/736x/2a/c0/5e/2ac05e3bd4d80361a93c9e8f6cc0d012.jpg',
    'https://pbs.twimg.com/media/CZanE49WAAMkbxx.jpg',
    'https://external-preview.redd.it/YIBYbzQJcTBGCfqPVZ-iQ4MFU--efNaeXFau5BvnUgA.jpg?auto=webp&s=caa574cee2f20102d9f6a1c5b93a5d1e1095ecc8',
    'https://t4.ftcdn.net/jpg/00/59/80/67/360_F_59806766_ucBSZqbNZJkBC3M3ZYGaQ49hzl4ulAQV.jpg',
  ];
  
  function flip(element, index) {
    if (!element.classList.contains('flipped')) {
      const audio = new Audio('flip_sound.mp3');
      audio.play();
      element.classList.add('flipped');
      element.style.backgroundImage = `url(${links[index - 1]})`;
      element.style.transition = 'transform 0.6s';
    }
  }
  