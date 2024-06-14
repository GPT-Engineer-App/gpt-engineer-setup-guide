import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    (function(d, s, id) {
      var js, tjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://widget.tiledesk.com/v4/launch.js';
      tjs.parentNode.insertBefore(js, tjs);
    }(document, 'script', 'tiledesk-jssdk'));
  }, []);

  return (
    <div id="tiledesk-container" style={{ width: '100%', height: '100%' }}></div>
  );
};

export default Chatbot;