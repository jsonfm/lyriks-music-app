import React from 'react';
import { useSelector } from "react-redux";
import { Error, Loader, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";


const TopArtist = () => {

    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data, isFetching, error} = useGetTopChartsQuery();


    if (isFetching) return <Loader title="Loading Songs around you..." />;

    if (error) return <Error />;


    return (
        <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top Artists</h2>
  
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.tracks?.map((song, i) => (
            <ArtistCard
              key={song.key}
              track={song}
            />
          ))}
        </div>
      </div>
    )
}

export default TopArtist;
