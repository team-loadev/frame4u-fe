
interface IPhotoType {
  imgUrl: string[];
  frameUrl: string,
}

export default function PhotoFrame({
  imgUrl = [],
  frameUrl
}: IPhotoType) {

  return (
    <div
      className="w-[300px] h-[871px] px-[16px] pt-[20px] pb-[128px] flex justify-center relative"
      style={{ backgroundColor: 'transparent' }}
    >
        <img src={frameUrl} alt="frame" className="absolute top-0 left-0 w-full"/>
          <div className="flex flex-col items-center gap-[9px] h-fit w-fit">
            {imgUrl[0] ? (
              <img
                className="w-[264px] h-[174px] bg-black"
                src={imgUrl[0]}
                alt="사진1"
              />
            ) : (
              <div className="w-[264px] h-[174px] bg-black"></div>
            )}
            {imgUrl[1] ? (
              <img
                className="w-[264px] h-[174px] bg-black"
                src={imgUrl[1]}
                alt="사진2"
              />
            ) : (
              <div className="w-[264px] h-[174px] bg-black"></div>
            )}
            {imgUrl[2] ? (
              <img
                className="w-[264px] h-[174px] bg-black"
                src={imgUrl[2]}
                alt="사진3"
              />
            ) : (
              <div className="w-[264px] h-[174px] bg-black"></div>
            )}
            {imgUrl[3] ? (
              <img
                className="w-[264px] h-[174px] bg-black"
                src={imgUrl[3]}
                alt="사진4"
              />
            ) : (
              <div className="w-[264px] h-[174px] bg-black"></div>
            )}
          </div>
        </div>
  );
}
