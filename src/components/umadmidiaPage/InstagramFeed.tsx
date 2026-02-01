import React from 'react';

const InstagramFeed = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nossas Redes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/reel/DTi3eoLkRxs/?utm_source=ig_embed&utm_campaign=loading" 
            data-instgrm-version="14"
            style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)' }}
          >
          </blockquote>
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/reel/DR-ZG5BERGg/?utm_source=ig_embed&utm_campaign=loading" 
            data-instgrm-version="14" 
            style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)' }}
          >
          </blockquote>
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/reel/DGMO4HTg-zs/?utm_source=ig_embed&utm_campaign=loading" 
            data-instgrm-version="14" 
            style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)' }}
          >
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
