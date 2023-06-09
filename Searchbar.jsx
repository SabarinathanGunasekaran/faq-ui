import './searchbar.css';
import React, {useState} from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';

const Searchbar = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
        <React.Fragment>
            <form action="/" method="get">
                <label htmlFor="header-search">
                </label>
                <img class="searchicon" alt='searchIcons' src="./images/search.png" />
                <input class="seacrhone"
                    type="text"
                    id="header-search"
                    placeholder="Search your queries here!"
                    name="searchbar" />
            </form>

            <div className='accordianHead'>
      <Accordion flush open={open} toggle={toggle}>
        <div className='accordianSpace'>
            <AccordionItem >
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        </div>
        
    
        <div className='accordianSpace'>
            <AccordionItem >
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        </div>

        <div className='accordianSpace'>
            <AccordionItem >
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        </div>
      </Accordion>
    </div>
        </React.Fragment>
    );
}
export default Searchbar;
