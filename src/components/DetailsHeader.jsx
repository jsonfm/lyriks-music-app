import { Link } from "react-router-dom";


const DetailsHeader = ({ artistId, songData, artistData }) => {
  const artist = artistData?.artists[artistData.artistId]?.attributes;
  console.log("artist: ", artist);
  return(
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center w-full ">
          <img
            src={artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : songData?.title}</p>
            <p className="text-gray-400 mt-2">{songData?.subtitle}</p>
            <p className="text-base text-gray-400 mt-2">
              {artistId
                ? artist?.genresNames[0]
                : songData?.genres?.primary
              }
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  )
}

export default DetailsHeader;
