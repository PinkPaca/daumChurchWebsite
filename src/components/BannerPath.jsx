import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function BannerPath(props) {
  const { bannerPath1, bannerPath2 } = props;
  return (
    <div>
      <span className="path">
        <span>{bannerPath2}</span>
        <p>
          <HomeIcon fontSize="small" />
          {' > '}
          {bannerPath1}
          {' > '}
          {bannerPath2}
        </p>
      </span>
    </div>
  );
}

export default BannerPath;
