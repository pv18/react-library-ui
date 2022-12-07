import React from "react";
import Accordion from "../../ui-kit/Accordion";
import { AccordionGroup } from "../../ui-kit";
import "./AccordionPage.scss";

export const AccordionPage: React.FC = () => {
  return (
    <div className="AccordionPage">
      <h2>Accordion</h2>
      <Accordion title={"Card"}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
          ad adipisci animi autem beatae consectetur cumque debitis dolore
          dolorum excepturi expedita facere harum itaque laboriosam magni modi
          natus nostrum perferendis porro quam quo ratione, reiciendis repellat
          repudiandae sapiente sit soluta unde voluptas voluptatum. Aut
          cupiditate ducimus eveniet facilis hic impedit natus nesciunt quo
          recusandae soluta. Ab accusantium assumenda beatae cumque distinctio
          est exercitationem facere laudantium magni molestias, neque odit
          quaerat quam quis quod, reiciendis, sequi sit soluta velit voluptatem!
          Autem cupiditate dolor dolorem dolores, nemo optio quidem tempora
          voluptatem! Aut doloremque eos illum minima natus nulla officiis sint
          tempore.
        </p>
      </Accordion>
      <h2>Accordion Group</h2>
      <AccordionGroup title={'Card group'}>
        <Accordion title={"Card one"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
            ad adipisci animi autem beatae consectetur cumque debitis dolore
            dolorum excepturi expedita facere harum itaque laboriosam magni modi
            natus nostrum perferendis porro quam quo ratione, reiciendis repellat
            repudiandae sapiente sit soluta unde voluptas voluptatum. Aut
            cupiditate ducimus eveniet facilis hic impedit natus nesciunt quo
            recusandae soluta. Ab accusantium assumenda beatae cumque distinctio
            est exercitationem facere laudantium magni molestias, neque odit
            quaerat quam quis quod, reiciendis, sequi sit soluta velit voluptatem!
            Autem cupiditate dolor dolorem dolores, nemo optio quidem tempora
            voluptatem! Aut doloremque eos illum minima natus nulla officiis sint
            tempore.
          </p>
        </Accordion>
        <Accordion title={"Card two"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
            ad adipisci animi autem beatae consectetur cumque debitis dolore
            dolorum excepturi expedita facere harum itaque laboriosam magni modi
            natus nostrum perferendis porro quam quo ratione, reiciendis repellat
            repudiandae sapiente sit soluta unde voluptas voluptatum. Aut
            cupiditate ducimus eveniet facilis hic impedit natus nesciunt quo
            recusandae soluta. Ab accusantium assumenda beatae cumque distinctio
            est exercitationem facere laudantium magni molestias, neque odit
            quaerat quam quis quod, reiciendis, sequi sit soluta velit voluptatem!
            Autem cupiditate dolor dolorem dolores, nemo optio quidem tempora
            voluptatem! Aut doloremque eos illum minima natus nulla officiis sint
            tempore.
          </p>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};
