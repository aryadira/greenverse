import Banner from "../../components/parts/Banner";
import { brassica_bg } from "../../assets/images/photos/products-img";
import { Marquee } from "../../components/parts";
import { BoxContainer, SpacingLayout } from "../../layouts";
import CircleButton from "../../components/parts/CircleButton";
import Card from "../../components/parts/Card";
import { brassica } from "../../constants/contents/products/perPage";
import Transition from "../../components/transition/Transition";

const Brassica = () => {
  return (
    <div>
      <Banner title='Brassica' subtitle='Explore.' image={brassica_bg}></Banner>
      <SpacingLayout>
        <BoxContainer>
          <div className='definition-group grid grid-cols-1 sm:grid-cols-2 place-content-between py-20'>
            <div className='definition'>
              <p>
                Brassica are a diverse family of plants that can serve in numerous capacities on the biosustainable farm. They can be planted to
                attract and harbor beneficial insects, for use as forage, as a cover crop, to suppress weeds, to alleviate compaction, and as a green
                manure, as well as to add biomass when mulched and left or tilled in as an amendment to the soil. In certain situations they can even
                help manage soilborne pests, by virtue of compounds they contain that are noxious to certain nematodes, fungi, and other pathogenic
                microorganisms.
              </p>
            </div>
            <div className='source-btn flex justify-end'>
              <CircleButton link='https://www.johnnyseeds.com/farm-seed/brassica/'>Source</CircleButton>
            </div>
          </div>
        </BoxContainer>
      </SpacingLayout>
      <Marquee className='h-[0px]'>brassica are a diverse family of plants</Marquee>
      <SpacingLayout>
        <BoxContainer>
          <hr className='h-[2px] opacity-30 bg-black my-16' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {brassica.map((list) => (
              <Card key={list.id} src={list.img} type={list.type} title={list.title} price={list.price} />
            ))}
          </div>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default Transition(Brassica);
