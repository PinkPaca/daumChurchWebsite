export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: '교회소개', // About
    url: '/About',
    submenu: [
      {
        title: '인삿말',
        url: '/about',
      },
      {
        title: '예배안내',
        url: '/services',
      },
      {
        title: '교회연혁',
        url: '/history',
      },
      {
        title: '오시는길',
        url: '/map',
      },
    ],
  },
  {
    title: '다음 TV', // Upload Sermon, worships, any kind of videos
    url: '/DaumTV',
    submenu: [
      {
        title: '설교',
        url: '/sermon',
      },
      {
        title: '찬양',
        url: '/worship',
      },
      {
        title: '특별영상',
        url: '/videos',
      },
      {
        title: '앨범',
        url: '/album',
      },
      {
        title: '예배실황',
        url: '/broadcasting',
      },
      {
        title: '보도자료',
        url: '/news',
      },
    ],
  },
  {
    title: '교회사역', // About ministry or volunteer
    url: '/Ministry',
    submenu: [
      {
        title: '단기선교',
        url: '/mission-trip',
      },
      {
        title: '교회학교',
        url: '/children',
      },
      {
        title: '비전트립',
        url: '/vision-trip',
      },
    ],
  },
  {
    title: '공 동 체', // Information about church member
    url: '/Community',
    submenu: [
      {
        title: '함께하기',
        url: '/join',
      },
      {
        title: '상담',
        url: '/counsel',
      },
    ],
  },
];
