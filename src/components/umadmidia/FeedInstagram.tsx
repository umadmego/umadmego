import React, { useEffect } from 'react';

const posts = [
  'https://www.instagram.com/reel/DTi3eoLkRxs/',
  'https://www.instagram.com/reel/DR-ZG5BERGg/',
  'https://www.instagram.com/reel/DGMO4HTg-zs/',
];

/** Posts incorporados do Instagram (o script oficial transforma os blockquotes em embeds). */
function FeedInstagram() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post) => (
        <blockquote
          key={post}
          className='instagram-media'
          data-instgrm-permalink={`${post}?utm_source=ig_embed&utm_campaign=loading`}
          data-instgrm-version='14'
          style={{ background: '#FFF', border: 0, margin: 0, maxWidth: '540px', minWidth: '300px', padding: 0, width: '100%' }}
        />
      ))}
    </div>
  );
}

export default FeedInstagram;
