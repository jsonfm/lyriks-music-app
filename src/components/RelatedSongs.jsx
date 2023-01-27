import SongBar from "./SongBar";


const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePlayClick, handlePauseClick }) => {


  if(!data?.tracks) return <p>Not related songs found.</p>
  
  return (
    <div className="flex flex-col mt-10">
      <h2 className="font-bold text-3xl text-white">Related Songs:</h2>
      <div className="mt-6 w-full flex flex-col">
        {data && data?.tracks?.map((song, i) => (
          <SongBar
            key={song.key} 
            song={song}
            artistId={artistId}
            i={i}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}

      </div>
    </div>
  )
}

export default RelatedSongs;
