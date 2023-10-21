import Banner from "../../components/parts/Banner";
import { grains_bg } from "../../assets/images/photos/products-img";
import { Marquee } from "../../components/parts";
import { BoxContainer, SpacingLayout } from "../../layouts";
import CircleButton from "../../components/parts/CircleButton";
import Card from "../../components/parts/Card";
import { grains } from "../../constants/contents/products/perPage";
import Transition from "../../components/transition/Transition";

const Grains = () => {
  return (
    <div>
      <Banner title='Grains' subtitle='Explore.' image={grains_bg}></Banner>
      <SpacingLayout>
        <BoxContainer>
          <div className='definition-group grid grid-cols-1 sm:grid-cols-2 place-content-between py-20'>
            <div className='definition'>
              <p>
                Cultivated as cover crops or for grain production, all of our seed grain is untreated and available in a wide range of quantities.
                Nutritious, edible grain seeds are valued commodities for human as well as livestock consumption. Grains can also be used to make
                milled and fermented products, as well as for mulching.
              </p>
            </div>
            <div className='source-btn flex justify-end'>
              <CircleButton link='https://www.johnnyseeds.com/farm-seed/grains/'>Source</CircleButton>
            </div>
          </div>
        </BoxContainer>
      </SpacingLayout>
      <Marquee className='h-[0px]'>Cultivated as cover crops or for grain production</Marquee>
      <SpacingLayout>
        <BoxContainer>
          <hr className='h-[2px] opacity-30 bg-black my-16' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {grains.map((content) => (
              <Card key={content.id} src={content.img} type={content.type} title={content.title} price={content.price} />
            ))}
          </div>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default Transition(Grains);
