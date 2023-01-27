import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery } from "../redux/services/shazamCore";
// import { setActiveSong } from "../redux/features/playerSlice";


const ArtistDetails = () => {
    const dispatch = useDispatch();
    const { id:artistId} = useParams();
    const { activeSong, isPlaying } = useSelector(state => state.player);

    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
    const { data: artistSongsData, isFetching:isFetchingArtistTopSongs } = useGetArtistTopSongsQuery(artistId);

    console.log("artist songs: ", artistSongsData)

    if(isFetchingArtistDetails || isFetchingArtistTopSongs){
        return <Loader title="Loading Artist Details"/>
    }

    if(error) return <Error />
    
    const tracks = {
      tracks: artistSongsData?.data
    }

    return(
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData}/>

            <RelatedSongs
                    data={tracks}
                    artistId={artistId}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
            />
        </div>
    )
}

export default ArtistDetails;
