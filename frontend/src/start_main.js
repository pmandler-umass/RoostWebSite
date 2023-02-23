import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export function MyImages() {  // PAM class not function?
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'http://doppler.cs.umass.edu/roost/img/all_stations_v1/vr05/1997/07/02/KBUF/KBUF19970702_091359.png',
    'http://doppler.cs.umass.edu/roost/img/all_stations_v1/vr05/1997/07/02/KBUF/KBUF19970702_092541.png',
    'http://doppler.cs.umass.edu/roost/img/all_stations_v1/vr05/1997/07/02/KBUF/KBUF19970702_093132.png',
    'http://doppler.cs.umass.edu/roost/img/all_stations_v1/vr05/1997/07/02/KBUF/KBUF19970702_110527.png'
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}
