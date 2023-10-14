import Banner from "../../components/parts/Banner";
import { covercropmixes_bg } from "../../assets/images/photos/products-img";
import { Marquee } from "../../components/parts";
import { BoxContainer, SpacingLayout } from "../../layouts";
import CircleButton from "../../components/parts/CircleButton";
import Card from "../../components/parts/Card";
import { coverCropMixes } from "../../constants/contents/products/perPage";

const CoverCropMixes = () => {
  return (
    <div>
      <Banner title='Cover Crop Mixes' subtitle='Explore.' image={covercropmixes_bg}></Banner>
      <SpacingLayout>
        <BoxContainer>
          <div className='definition-group grid grid-cols-1 sm:grid-cols-2 place-content-between py-20'>
            <div className='definition'>
              <p>
                Johnny's offers the convenience of precombined cover crop seed mixtures for both spring and fall planting. These mixes can be used as
                a green manure incorporated into the soil or to provide winter erosion control.
              </p>
            </div>
            <div className='source-btn flex justify-end'>
              <CircleButton>Source</CircleButton>
            </div>
          </div>
        </BoxContainer>
      </SpacingLayout>
      <Marquee className='h-[0px]'>Precombined cover crop seed mixtures</Marquee>
      <SpacingLayout>
        <BoxContainer>
          <hr className='h-[2px] opacity-30 bg-black my-16' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {coverCropMixes.map((content) => (
              <Card key={content.id} src={content.img} type={content.type} title={content.title} price={content.price} />
            ))}
          </div>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default CoverCropMixes;
