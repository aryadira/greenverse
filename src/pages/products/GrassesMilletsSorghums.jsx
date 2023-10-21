import Banner from "../../components/parts/Banner";
import { grasses_bg } from "../../assets/images/photos/products-img";
import { Marquee } from "../../components/parts";
import { BoxContainer, SpacingLayout } from "../../layouts";
import CircleButton from "../../components/parts/CircleButton";
import Card from "../../components/parts/Card";
import { grasses_millets_sorghums } from "../../constants/contents/products/perPage";
import Transition from "../../components/transition/Transition";

const GrassesMilletsSorghums = () => {
  return (
    <div>
      <Banner title='Grasses, Millets, Sorghums' subtitle='Explore.' image={grasses_bg}></Banner>
      <SpacingLayout>
        <BoxContainer>
          <div className='definition-group grid grid-cols-1 sm:grid-cols-2 place-content-between py-20'>
            <div className='definition'>
              <p>
                Pearl Millet is the forage type of millet, recommended for use as hay, pasture, and silage for feeding livestock, or as a green
                manure. Ryegrass is an herbaceous annual that is grown for both grazing and hay as well as a quick cover crop. Sudangrass is a
                fast-growing, heat- and drought-tolerant grass that develops abundant root biomass, useful for increasing soil organic matter.
              </p>
            </div>
            <div className='source-btn flex justify-end'>
              <CircleButton link='https://www.johnnyseeds.com/farm-seed/grasses-millets-and-sorghums/'>Source</CircleButton>
            </div>
          </div>
        </BoxContainer>
      </SpacingLayout>
      <Marquee className='h-[0px]'>Cultivated as cover crops or for grain production</Marquee>
      <SpacingLayout>
        <BoxContainer>
          <hr className='h-[2px] opacity-30 bg-black my-16' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {grasses_millets_sorghums.map((content) => (
              <Card key={content.id} src={content.img} type={content.type} title={content.title} price={content.price} />
            ))}
          </div>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default Transition(GrassesMilletsSorghums);
