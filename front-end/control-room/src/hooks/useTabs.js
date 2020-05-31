import React from 'react';

function useTabs(initial, content) {
  const [currentIndex, setCurrentIndex] = React.useState(initial);
  if (!content || !Array.isArray(content)) {
    return null;
  }
  return {
    currentTab: content[currentIndex],
    changeTab: setCurrentIndex,
    currentIndex,
  };
}
export default useTabs;
