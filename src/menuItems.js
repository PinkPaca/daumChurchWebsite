export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: '교회소개', // About
    url: '/about/greeting',
    submenu: [
      {
        title: '인사말',
        url: '/about/greeting',
      },
      {
        title: '예배안내',
        url: '/about/services',
      },
      {
        title: '교회연혁',
        url: '/about/history',
      },
      {
        title: '오시는길',
        url: '/about/map',
      },
    ],
  },
  {
    title: '다음 TV', // Upload Sermon, worships, any kind of videos
    url: '/daumTV',
    submenu: [
      {
        title: '설교',
        url: '/daumTV/sermon',
      },
      {
        title: '찬양',
        url: '/daumTV/worship',
      },
      {
        title: '특별영상',
        url: '/daumTV/videos',
      },
      {
        title: '앨범',
        url: '/daumTV/album',
      },
      {
        title: '예배실황',
        url: '/daumTV/broadcasting',
      },
      {
        title: '보도자료',
        url: '/daumTV/news',
      },
    ],
  },
  {
    title: '교회사역', // About ministry or volunteer
    url: '/ministry',
    submenu: [
      {
        title: '단기선교',
        url: '/ministry/mission-trip',
      },
      {
        title: '교회학교',
        url: '/ministry/children',
      },
      {
        title: '비전트립',
        url: '/ministry/vision-trip',
      },
    ],
  },
  {
    title: '공 동 체', // Information about church member
    url: '/community',
    submenu: [
      {
        title: '함께하기',
        url: '/community/join',
      },
      {
        title: '상담',
        url: '/community/counsel',
      },
    ],
  },
];
