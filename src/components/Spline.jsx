import Spline from '@splinetool/react-spline';
import { useCallback } from 'react';

export default function Home() {
  const onLoad = useCallback((spline) => {
    // Set initial zoom level
    if (spline) {
      spline.setZoom(1);
      // Removed invalid methods disableZoom and disablePan
    }
  }, []);

  return (
    <main>
      <Spline
        scene="https://prod.spline.design/mcwEF46PW1B6PFkC/scene.splinecode"
        onLoad={onLoad}
      />
    </main>
  );
}
